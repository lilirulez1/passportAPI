from packages.fastapi import FastAPI

app = FastAPI()


@app.get("/yo")
async def root():
    return {"message": "Hello World"}