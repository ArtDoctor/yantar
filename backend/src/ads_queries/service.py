from src.users_queries.db_utils import get_company_link_by_id, check_if_api_key_exists, add_credits_by_api
from src.users_queries.db_utils import add_clicks_to_ad, change_ad_credits
from fastapi.responses import RedirectResponse
from fastapi import Request
from src.redis_utils import redis_client


def get_ad_link_response(request: Request, api_key: str, ad_id: int):
    user_ip = request.client.host  # Get the client IP address
    url = get_company_link_by_id(ad_id)

    # Check if this IP has already clicked the link
    if redis_client.sismember(url, user_ip):
        return RedirectResponse(url=url)

    # add api key check
    if check_if_api_key_exists(api_key):
        add_credits_by_api(api_key)
        # Record this IP in the set for this ad
        redis_client.sadd(url, user_ip)
        change_ad_credits(ad_id, -1)
        add_clicks_to_ad(ad_id)

    return RedirectResponse(url=url)
