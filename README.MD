.
# Recipe API

Simple Node.js + Express API for sharing recipes. This repository contains the backend used to create and list recipes stored in JSON files under `data/`.

Repository: https://github.com/basithabbasks/recipe-api1

## Quick start

Requirements: Node.js (>=14) and npm

From PowerShell:
```
Set-Location 'C:\Users\LENOVO\Downloads\recipe-api\recipe-api1'
npm ci
node server.js
```

For development with auto-reload (optional):
```
npx nodemon server.js
```

Server default port is read from `process.env.PORT` (use `.env` or set `PORT` before running).

## API Endpoints

- Get all recipes
  - Method: GET
  - URL: `/api/recipes`
  - Response: 200 OK — array of recipe objects

- Add new recipe
  - Method: POST
  - URL: `/api/recipes`
  - Body (JSON):
    ```json
    {
      "title": "Pasta",
      "ingredients": "Pasta, Tomato sauce, Salt",
      "instructions": "Boil pasta and mix with sauce",
      "cookTime": "20 minutes"
    }
    ```
  - Response: 201 Created — created recipe object with `id`

Notes: `title`, `ingredients`, and `instructions` are required by the server logic.

## Project structure

```
recipe-api1/
├─ data/                # recipes stored as JSON
├─ routes/              # route handlers (recipeRoutes.js)
├─ server.js            # app entrypoint
├─ package.json
├─ .env.example
└─ README.MD
```

## Run locally (short)
1. `npm ci`
2. `node server.js` (or `npx nodemon server.js`)
3. Visit `http://localhost:PORT` (default PORT in `.env` or 3000)

## Deployment
This project was deployed previously on Render. Configure the `PORT` environment variable in your host environment.

## Contributing
- Open issues or pull requests on GitHub.

## Contact
Author: Basith Abbas

---
Updated README: adds run instructions, endpoints, and examples.
📁 Project Structure
