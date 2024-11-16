from flask import Flask, request, render_template_string, jsonify
from flask_cors import CORS
import subprocess
import requests

app = Flask(__name__)
CORS(app)

BASE_URL = "http://127.0.0.1:8000"


def get_authorization_code(machine_code):
    process = subprocess.Popen(
        ["code_to_key"], stdin=subprocess.PIPE, stdout=subprocess.PIPE
    )
    stdout, _ = process.communicate(input=f"{machine_code}\n".encode())
    return stdout.decode().strip()


@app.route("/verify", methods=["GET"])
def index():
    remote_ip = request.remote_addr
    machine_code = request.args.get("machine_code")
    activation_code = request.args.get("activation_code")


    if not machine_code or not activation_code:
        return jsonify(
            {
                "status": 400,
                "verified": False,
                "description": "Error: Machine code and activation code are required",
            }
        )

    authorization_code = get_authorization_code(machine_code)
    response = requests.post(
        f"{BASE_URL}/register",
        json={
            "serial_number": activation_code,
            "registration_code": authorization_code,
        },
        headers={"Content-Type": "application/json", "X-Real-IP": remote_ip},
    )

    if response.status_code != 200:
        return jsonify(
            {
                "status": 500,
                "verified": False,
                "description": "Error: Network error, please try again later",
            }
        )

    data = response.json()
    print(data)
    if not data.get("verified"):
        error_message = data.get("error", "激活失败")
        translation = {
            "Already registered": "激活码已使用！",
            "Invalid Registeration code!": "激活码不存在！",
            "Failed to connect backend DB": "服务端错误！请联系管理员",
            "Times-key used too times!": "多次激活码使用已达上限！",
        }
        error_message = translation.get(error_message, error_message)
        return jsonify({"status": 400, "verified": False, "description": error_message})

    return jsonify({"verified": True, "authorization_code": authorization_code})


if __name__ == "__main__":
    app.run(debug=True, port=8001, host="0.0.0.0")
