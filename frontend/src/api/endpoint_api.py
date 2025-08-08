from flask_cors import CORS
from flask import Flask
import json
from flask import request, jsonify
app = Flask(__name__)
CORS(app)


@app.route("/api/fetch-filter", methods=["POST"])
def get_goodlist():
    data=request.get_json()
    with open("Datasets/site_filter.json", "r", encoding="utf-8") as f:
        filter_data = json.load(f)
        
        for new_filter in data:
            if new_filter not in filter_data["goodlist"]:
                filter_data["goodlist"].append(new_filter)
                
    with open("Datasets/site_filter.json", "w", encoding="utf-8") as f:
        json.dump(filter_data, f)
    return jsonify({"status":"success"})

@app.route("/api/fetch-site", methods=["POST"])
def get_websites():
    data=request.get_json()
    with open("Datasets/site_filter.json", "r", encoding="utf-8") as f:
        site_data=json.load(f)
        
        for new_site in data:
            if new_site not in site_data["websites"]:
                site_data["websites"].append(new_site)
                
    with open("Datasets/site_filter.json", "w", encoding="utf-8") as f:
        json.dump(site_data, f)
    return jsonify({"status":"success"})


@app.route("/api/save-goodlist", methods=["POST"]) #Web Link Endpoint
def save_goodlist():
    data = request.get_json()
    with open("Datasets/goodlist.json", "w") as f: #Reads Json file
        json.dump(data, f) #Saves data into json file
    return jsonify({"status": "success"})

@app.route("/api/save-websites", methods=["POST"]) #Web Link Endpoint
def save_websites():
    data = request.get_json()
    with open("Datasets/websites.json", "w") as f: #Reads Json file
        json.dump(data, f) #Saves data into json file
    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
