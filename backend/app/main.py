from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from openai import OpenAI

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.post("/api/chat/multi")
async def chat(request: dict):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=request["messages"],
        temperature=request.get("temperature", 0.7),
        max_tokens=request.get("max_tokens", 512)
    )
    return {
        "results": [{
            "modelId": request["modelIds"][0],
            "text": response.choices[0].message.content,
            "latencyMs": 500,
            "usage": {"prompt_tokens": 10, "completion_tokens": 50}
        }]
    }
