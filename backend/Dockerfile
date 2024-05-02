FROM python:3.10

WORKDIR /app

RUN apt-get update
RUN apt-get upgrade -y

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir --upgrade -r requirements.txt

RUN curl -sSL https://sdk.cloud.google.com | bash
ENV PATH $PATH:/root/google-cloud-sdk/bin

COPY . .

RUN gcloud auth activate-service-account --key-file=google_key.json

EXPOSE 9024

CMD ["bash", "start_backend_prod.sh"]
