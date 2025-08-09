from flask_cors import CORS
from flask import Flask
import json
from flask import Blueprint,request, jsonify
from Scraper.Extract.Extract_run import extract_run
from Scraper.Scrape.Scrape_run import run_scrape
app=Flask(__name__)
CORS(app)

from .utils import logging

bp = Blueprint("programs_api", __name__)

@bp.route("/api/run-scrape", methods=["POST"])
def scrape():
    try:
        data=run_scrape()
        return jsonify({"status":"success"})
    except Exception as e:
        logging.error(f"Failed to run scraping {e}")

@bp.route("/api/run-extract",methods=["POST"])
def extract():
    try:
        data=extract_run()
        return jsonify({"status":"success"})
    except Exception as e:
        logging.error(f"Failed to run extraction {e}")  
        
if __name__ == "__main__":
    app.run(debug=True, port=5000)