import secrets
import string
from src.users_queries.db_utils import get_all_api_keys, change_ad_credits, get_user_credits
from src.users_queries.db_utils import create_user_db, change_user_credits
from src.frontend_queries.schemas import UserCreationSchema, CreditsDonationAdSchema, UserSchema
from src.users_queries.schemas import InsertReturnSchema, UpdateReturnSchema
import traceback


def generate_api_key(length=10):
    alphabet = string.ascii_letters + string.digits
    key = ''.join(secrets.choice(alphabet, ) for i in range(length))
    return key


def generate_unique_api_key(length=10):
    existing_keys = get_all_api_keys()
    while True:
        new_key = generate_api_key(length)
        if new_key not in existing_keys:
            return new_key
            # In a real application, you would store this new key in your database here


def create_user(user_data: UserCreationSchema) -> InsertReturnSchema:
    user = UserSchema(
        email=user_data.email,
        auth_id=user_data.auth_id,
        credits=50,
        api_key=generate_unique_api_key()
    )
    result = create_user_db(user)
    return result


def donate_credits_to_ad(ad_request: CreditsDonationAdSchema):
    if ad_request.credits < 0:
        return UpdateReturnSchema(success=False, traceback="Cannot donate negative credits")
    elif ad_request.credits > get_user_credits(ad_request.user_id):
        return UpdateReturnSchema(success=False, traceback="Not enough credits")
    else:
        try:
            change_ad_credits(ad_request.ad_id, ad_request.credits)
            change_user_credits(ad_request.user_id, -ad_request.credits)
            return UpdateReturnSchema(success=True, traceback='')
        except Exception:
            traceback_str = traceback.format_exc()
            return UpdateReturnSchema(success=False, traceback=traceback_str)
