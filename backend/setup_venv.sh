rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# python3 -m spacy download en_core_web_md