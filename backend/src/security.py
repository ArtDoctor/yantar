import os
from fastapi import HTTPException

def check_api_key(api_key: str):
    if api_key != os.getenv("FRONTEND_API_KEY"):
        raise HTTPException(status_code=401, detail="Invalid API Key")
    return True
