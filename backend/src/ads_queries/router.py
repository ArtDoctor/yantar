from fastapi import APIRouter, Request
from src.ads_queries.service import get_ad_link_response

router = APIRouter()


@router.get("/{api_key}.{ad_id}")
def get_ad(request: Request, api_key: str, ad_id: int):
    response = get_ad_link_response(request, api_key, ad_id)
    return response
