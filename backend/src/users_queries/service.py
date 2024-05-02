from src.ai_utils import calculate_embedding
from src.users_queries.db_utils import supabase, check_if_api_key_exists


def get_ads_endpoint_function(text: str, amount_of_ads: int, api_key: str) -> dict:
    try:
        query_embedding = calculate_embedding(text)

        if amount_of_ads > 5:
            amount_of_ads = 5
        if amount_of_ads < 1:
            amount_of_ads = 1

        # Execute the query
        data = supabase.rpc('get_ads', {
            "query_embedding": query_embedding,
            "match_threshold": 122222.0,
            "match_count": amount_of_ads
        }).execute().data
        print(data)
        for row in data:
            row['link'] = f"https://backend.yantar.yazero.io/ads/{api_key}.{row['id']}"

        if check_if_api_key_exists(api_key):
            result = {
                "success": True,
                "traceback": "",
                "data": data
            }
        else:
            result = {
                "success": False,
                "traceback": "API key not found; please check your API key",
                "data": data
            }
    except Exception as e:
        result = {
            "success": False,
            "traceback": str(e),
            "data": []
        }

    return result
