from fastapi import APIRouter
from src.users_queries.schemas import CompanyAdNoEmbedding, CompanyAdUpdate
from src.frontend_queries.schemas import CreditsDonationAdSchema, UserCreationSchema
from src.frontend_queries.schemas import UserAuthIDSchema, UserInfoSchema
from src.users_queries.db_utils import insert_company_ad, get_user_info, update_ad_info, get_ad_info_by_user
from src.frontend_queries.service import create_user, donate_credits_to_ad
from src.security import check_api_key

router = APIRouter()


@router.post("/insert-ad")
def insert_ad(ad_request: CompanyAdNoEmbedding):
    check_api_key(ad_request.api_key)
    result = insert_company_ad(ad_request)
    return result.model_dump()


@router.post("/update-ad")
def update_ad(ad_request: CompanyAdUpdate):
    check_api_key(ad_request.api_key)
    result = update_ad_info(ad_request, ad_request.id)
    return result.model_dump()


@router.post("/create-user")
def create_user_endpoint(user_request: UserCreationSchema):
    print(user_request.email)
    check_api_key(user_request.api_key)
    result = create_user(user_request)
    return result.model_dump()


@router.post("/get-user-info")
def get_user_info_endpoint(user_info: UserInfoSchema):
    check_api_key(user_info.api_key)
    result = get_user_info(user_info.auth_id)
    return result


@router.post("/donate-credits-to-ad")
def donate_credits(ad_request: CreditsDonationAdSchema):
    check_api_key(ad_request.api_key)
    result = donate_credits_to_ad(ad_request)
    return result.model_dump()


@router.post("/get-user-ads")
def get_ad_info_endpoint(ad_info: UserAuthIDSchema):
    check_api_key(ad_info.api_key)
    result = get_ad_info_by_user(ad_info.user_auth_id)
    return result.model_dump()
