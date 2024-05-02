from pydantic import BaseModel


class UserCreationSchema(BaseModel):
    api_key: str
    email: str
    auth_id: str


class UserSchema(BaseModel):
    email: str
    auth_id: str
    credits: int
    api_key: str


class UserInfoSchema(BaseModel):
    api_key: str
    auth_id: str


class CreditsDonationAdSchema(BaseModel):
    api_key: str
    user_id: int
    credits: int
    ad_id: int


class UserAuthIDSchema(BaseModel):
    api_key: str
    user_auth_id: str
