from pydantic import BaseModel


class AdRequest(BaseModel):
    text: str
    api_key: str
    amount_of_ads: int = 3


class CompanyAd(BaseModel):
    description: str
    one_liner: str
    link: str
    user_id: int
    credits_left: list[float] = None
    embedding: list[float]


class CompanyAdNoEmbedding(BaseModel):
    api_key: str
    description: str
    one_liner: str
    link: str
    CTA: str
    user_id: int
    credits_left: int


class CompanyAdUpdate(BaseModel):
    api_key: str
    id: int
    description: str
    one_liner: str
    link: str
    CTA: str
    user_id: int
    credits_left: int


class InsertReturnSchema(BaseModel):
    success: bool
    new_ID: int
    traceback: str


class UpdateReturnSchema(BaseModel):
    success: bool
    traceback: str


class ListDictReturnSchema(BaseModel):
    success: bool
    data: list[dict]
    traceback: str
