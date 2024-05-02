import requests
from requests.adapters import HTTPAdapter 
import google.generativeai as genai
import os


class VertexHttpClient:
    def __init__(self, project_url):
        self._project_url = project_url
        # Using requests library for HTTP communication
        self._session = requests.Session()
        # Session configuration (optional for retries, etc.)
        # retries = Retry(total=5, backoff_factor=1, status_forcelist=[429, 500, 502, 503, 504])
        self._session.mount('https://', HTTPAdapter(max_retries=retries)) 

    def send(self, request):
        if request.url.hostname != 'generativelanguage.googleapis.com':
            return self._session.send(request)

        # Constructing the Vertex AI specific request  
        vertex_request = requests.Request(
            request.method,
            request.url.replace(
                'https://generativelanguage.googleapis.com/v1/models',
                self._project_url
            ),
            data=request.body,
            headers=request.headers.copy()
        )

        # Remove the API key from standard headers
        vertex_request.headers.pop('x-goog-api-key', None)

        # Add the API key as a Bearer token
        vertex_request.headers['Authorization'] = f'Bearer {vertex_request.headers["x-goog-api-key"]}'

        # Send the modified request
        return self._session.send(vertex_request)


api_key=os.environ["GOOGLE_API_KEY"]
genai.configure(api_key=api_key)
generative_model = genai.GenerativeModel(
    model_name='gemini-pro',  # Or whatever value is suitable
    api_key=api_key,
    http_client=VertexHttpClient(your_project_url) 
) 
response = model.generate_content("The opposite of hot is")
print(response.text)
