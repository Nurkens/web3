E-commerce API

Overview

This project is a simple E-commerce API built using Node.js and Express.js. It provides endpoints for managing users, products, and orders.

Features

User registration

Product management (add, update)

Order creation and retrieval

Technologies Used

Node.js

Express.js

MongoDB (Mongoose ORM)

Installation

Prerequisites

Make sure you have the following installed:

Node.js

MongoDB

Setup

Clone the repository:

git clone <repository-url>
cd <project-folder>

Install dependencies:

npm install

Create a .env file in the root directory and add the following environment variables:

MONGO_URI=<your_mongodb_connection_string>

Start the server:

npm start

The server will run on http://localhost:5000 by default.

API Endpoints

User Routes

Method

Endpoint

Description

POST

/api/users/register

Register a new user

Product Routes

Method

Endpoint

Description

POST

/api/products/add

Add a new product

PUT

/api/products/update/:id

Update a product

Order Routes

Method

Endpoint

Description

POST

/api/orders/create

Create a new order

GET

/api/orders/

Get all orders

Project-folder

📂 project-folder
├── 📂 controllers
│ ├── ordersController.js
│ ├── productControllers.js
│ ├── usersControllers.js
├── 📂 models
│ ├── Order.js
│ ├── Product.js
│ ├── User.js
├── 📂 routes
│ ├── orderRoutes.js
│ ├── productRoutes.js
│ ├── userRoutes.js
├── app.js
├── package.json
└── README.md
