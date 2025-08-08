from flask_cors import CORS
from flask import Flask
import json
from flask import request, jsonify
app = Flask(__name__)
CORS(app)

from utils import logging

@app.route("/api/add-filter", methods=["POST"])
def add_goodlist():
    try:
        data=request.get_json()
    except Exception as e:
        logging.error(f"Data not acquired from typescript API {e}")
        
    try:
        with open("Datasets/site_filter.json", "r", encoding="utf-8") as f:
            filter_data = json.load(f)
    except Exception as e:
        logging.error(f"Initial data load from json failed {e}")
        
    try:
        for new_filter in data:
            if new_filter not in filter_data["goodlist"]:
                filter_data["goodlist"].append(new_filter)
    except Exception as e:
        logging.error(f"Filtering execution failed {e}")
    
    try:
        with open("Datasets/site_filter.json", "w", encoding="utf-8") as f:
            json.dump(filter_data, f)
    except Exception as e:
        logging.error(f"Data write into json failed {e}")
        
    return jsonify({"status":"success"})


@app.route("/api/add-site", methods=["POST"])
def add_websites():
    try:
        data=request.get_json()
    except Exception as e:
        logging.error("Data not acquired from typescript API",e)
        
    try:
        with open("Datasets/site_filter.json", "r", encoding="utf-8") as f:
            site_data=json.load(f)
    except Exception as e:
        logging.error("Initial data load from json failed",e)
        
    try:
        for new_site in data:
            if new_site not in site_data["websites"]:
                site_data["websites"].append(new_site)
    except Exception as e:
        logging.error("Filtering execution failed",e)
        
    try:           
        with open("Datasets/site_filter.json", "w", encoding="utf-8") as f:
            json.dump(site_data, f)
    except Exception as e:
        logging.error("Data write into json failed",e)
        
    return jsonify({"status":"success"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)