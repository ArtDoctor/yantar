import os
from supabase import create_client, Client
from src.users_queries.schemas import CompanyAdNoEmbedding, InsertReturnSchema, UpdateReturnSchema, ListDictReturnSchema
from src.frontend_queries.schemas import UserSchema
import traceback
from src.ai_utils import calculate_embedding


ads_table: str = os.environ.get("ADS_TABLE")
links_table: str = os.environ.get("LINKS_TABLE")
users_table: str = os.environ.get("USERS_TABLE")
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)


def insert_company_ad(ad: CompanyAdNoEmbedding):
    try:
        embedding = calculate_embedding(ad.description)

        res = supabase.table(ads_table).insert(
            {
                "description": ad.description,
                "one_liner": ad.one_liner,
                "link": ad.link,
                "cta": ad.CTA,
                "user_id": ad.user_id,
                "credits_left": ad.credits_left,
                "embedding": embedding
            }
        ).execute()

        return InsertReturnSchema(
            success=True,
            new_ID=res.data[0]['id'],
            traceback=''
        )
    except Exception:
        return InsertReturnSchema(
            success=False,
            new_ID=-1,
            traceback=traceback.format_exc()
        )


def get_company_link_by_id(id: int):
    res = supabase.table(ads_table).select("*").eq("id", id).execute()
    return res.data[0]['link']


def add_credits_by_api(user_api_key: str, amount: int = 1):
    res = supabase.table(users_table).select("*").eq("api_key", user_api_key).execute()
    credits = res.data[0]['credits']
    res = supabase.table(users_table).update({"credits": credits + amount}).eq("api_key", user_api_key).execute()
    return res.data[0]['credits']


def check_if_api_key_exists(user_api_key: str) -> bool:
    res = supabase.table(users_table).select("*").eq("api_key", user_api_key).execute()
    return len(res.data) > 0


def change_ad_credits(ad_id: str, amount: int = 1) -> None:
    res = supabase.table(ads_table).select("*").eq("id", ad_id).execute()
    credits = res.data[0]['credits_left']
    res = supabase.table(ads_table).update({"credits_left": credits + amount}).eq("id", ad_id).execute()


def change_user_credits(user_id: int, amount: int = 1) -> None:
    res = supabase.table(users_table).select("*").eq("id", user_id).execute()
    credits = res.data[0]['credits']
    res = supabase.table(users_table).update({"credits": credits + amount}).eq("id", user_id).execute()


def get_all_api_keys():
    res = supabase.table(users_table).select("api_key").execute()
    return [row['api_key'] for row in res.data]


def update_ad_info(ad: CompanyAdNoEmbedding, ad_id: int):
    try:
        # TODO: Don't calculate embedding if description didn't change
        embedding = calculate_embedding(ad.description)

        supabase.table(ads_table).update(
            {
                "description": ad.description,
                "one_liner": ad.one_liner,
                "link": ad.link,
                "cta": ad.CTA,
                "user_id": ad.user_id,
                "credits_left": ad.credits_left,
                "embedding": embedding
            }
        ).eq("id", ad_id).execute()

        return UpdateReturnSchema(
            success=True,
            new_ID=ad_id,
            traceback=''
        )
    except Exception:
        return UpdateReturnSchema(
            success=False,
            new_ID=ad_id,
            traceback=traceback.format_exc()
        )


def get_user_credits(user_id: int):
    res = supabase.table(users_table).select("*").eq("id", user_id).execute()
    return res.data[0]['credits']


def create_user_db(user: UserSchema):
    try:
        user_dict = {
            "email": user.email,
            "auth_id": user.auth_id,
            "credits": user.credits,
            "api_key": user.api_key
        }
        res = supabase.table(users_table).insert(user_dict).execute()
        return InsertReturnSchema(
            success=True,
            new_ID=res.data[0]['id'],
            traceback=''
        )
    except Exception:
        return InsertReturnSchema(
            success=False,
            new_ID=-1,
            traceback=traceback.format_exc()
        )


def get_user_info(user_id: int) -> dict:
    res = supabase.table(users_table).select("*").eq("auth_id", user_id).execute()
    if len(res.data) == 0:
        return {}
    return res.data[0]


def add_clicks_to_ad(ad_id: int, clicks_change: int = 1):
    res = supabase.table(ads_table).select("*").eq("id", ad_id).execute()
    clicks = res.data[0]['clicks_amount']
    res = supabase.table(ads_table).update({"clicks_amount": clicks + clicks_change}).eq("id", ad_id).execute()


def get_ad_info_by_user(auth_id: str):
    try:
        # get user_id by user auth_id
        user_id = supabase.table(users_table).select("*").eq("auth_id", auth_id).execute().data[0]['id']
        res = supabase.table(ads_table).select(
            "id, created_at, description, one_liner, link, cta, user_id, credits_left, clicks_amount"
        ).eq("user_id", user_id).execute()
        res = ListDictReturnSchema(
            success=True,
            data=res.data,
            traceback=''
        )
        return res
    except Exception:
        return ListDictReturnSchema(
            success=False,
            data=[],
            traceback=traceback.format_exc()
        )
