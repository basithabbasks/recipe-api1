.

🍽️ Recipe Sharing API – README
📌 Overview

This is a backend API built using Node.js and Express for a simple recipe-sharing platform.
Users can:

➕ Add new recipes

📄 View all recipes

💾 Store recipes in data/recipes.json

🌍 Interact with frontend using CORS

The API is fully deployed on Render.

🚀 Live API URL
https://recipie-api-5w32.onrender.com

📡 API Endpoints
1️⃣ Add a New Recipe (POST)

URL:

POST /api/recipes


Request Body (JSON)

{
  "title": "Pasta",
  "ingredients": "Pasta, Tomato sauce, Salt",
  "instructions": "Boil pasta and mix with sauce",
  "cookTime": "20 minutes"
}


Validation:

title, ingredients, instructions → required

difficulty → optional (default = "medium")

Example Success Response (201)

{
  "id": 1732538092314,
  "title": "Pasta",
  "ingredients": "Pasta, Tomato sauce, Salt",
  "instructions": "Boil pasta and mix with sauce",
  "cookTime": "20 minutes",
  "difficulty": "medium"
}

2️⃣ Get All Recipes (GET)

URL:

GET /api/recipes


Response Example (200)

[
  {
    "id": 1732538092314,
    "title": "Pasta",
    "ingredients": "Pasta, Tomato sauce, Salt",
    "instructions": "Boil pasta and mix with sauce",
    "cookTime": "20 minutes",
    "difficulty": "medium"
  }
]

📁 Project Structure
recipe-api/
│
├── data/
│   └── recipes.json
│
├── routes/
│   └── recipeRoutes.js
│
├── server.js
├── package.json
├── .env.example
└── README.md

🛠️ How to Run Project Locally
1️⃣ Clone the Repository
git clone https://github.com/Ahmed-Rafi07/recipie-api
cd recipe-api

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env file
PORT=3000

4️⃣ Start the Server
npm run dev


or

npm start


Server will run at:

http://localhost:3000

🌍 Deployment (Render)
Deployment Settings
Setting	Value
Build Command	npm install
Start Command	npm start
Runtime	Node
Instance	Free
Environment Variables
PORT=3000

📄 Submission Requirements (Included)

✔ All project files (server.js, routes, data, package.json, etc.)

✔ README.md

✔ PDF with:

Postman POST screenshot

Postman GET screenshot

Render dashboard screenshot

Live API URL

Challenges faced

⚠️ Challenges Faced (Sample)

Render required correct PORT configuration using process.env.PORT.

JSON file path had to be relative (./data/recipes.json).

Initial deployment failed due to typos (e.g., variable name mismatches).

Delay in response on free Render tier due to cold start.

👤 Author

Basith Abbas 
