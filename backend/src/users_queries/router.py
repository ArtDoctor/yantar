from fastapi import APIRouter
from src.users_queries.schemas import AdRequest
from src.users_queries.service import get_ads_endpoint_function

router = APIRouter()


@router.post("/get-ads")
def get_ads(ad_request: AdRequest):
    result = get_ads_endpoint_function(
        ad_request.text,
        ad_request.amount_of_ads,
        ad_request.api_key
    )
    return result
