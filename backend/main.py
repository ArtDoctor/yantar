from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.users_queries.router import router as users_router
from src.frontend_queries.router import router as frontend_router
from src.ads_queries.router import router as ads_router


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router, prefix="/api")
app.include_router(frontend_router, prefix="/frontend")
app.include_router(ads_router, prefix="/ads")
