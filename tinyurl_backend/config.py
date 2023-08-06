from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    env_name: str = "Local"
    base_url: str = "http://localhost:8000"
    db_url: str = "sqlite:///./tinyurl.db"
    # db_url: str = "postgresql+psychopg2://127.0.0.1:5432/tinyurl_db?user=postgres&password=RkPs090320"

    class Config:
        env_file = ".env"


@lru_cache
def get_settings() -> Settings:
    settings = Settings()
    print(f"Loading settings for: {settings.env_name}")
    return settings