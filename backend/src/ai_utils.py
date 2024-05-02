import requests
import os
import numpy as np

GOOGLE_PROJECT_ID = os.getenv("GOOGLE_PROJECT_ID")


def calculate_embedding(input_string: str) -> list[float]:
    # Get the access token
    access_token = os.popen("gcloud auth print-access-token").read().strip()

    # Endpoint URL for text embeddings
    url = (
        f"https://us-central1-aiplatform.googleapis.com/v1/projects/{GOOGLE_PROJECT_ID}/"
        "locations/us-central1/publishers/google/models/text-embedding-preview-0409:predict"
    )

    # Headers for the request
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    # Data to be sent - your query
    data = {
        "instances": [
            {"content": input_string}
        ]
    }

    # Send the POST request
    response = requests.post(url, headers=headers, json=data)

    # Handle the response
    if response.status_code == 200:
        embeddings = response.json()['predictions'][0]['embeddings']['values']
        return np.array(embeddings).tolist()
    else:
        print("Request failed:", response.text)
        return None
