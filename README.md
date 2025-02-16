# E-commerce API

## Overview

This project is a simple E-commerce API built using Node.js and Express.js. It provides endpoints for managing users, products, and orders.

## Features

- User registration
- Product management (add, update)
- Order creation and retrieval

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ORM)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MONGO_URI=<your_mongodb_connection_string>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on [http://localhost:5000](http://localhost:5000) by default.

## API Endpoints

### User Routes

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/users/register` | Register a new user |

### Product Routes

| Method | Endpoint                   | Description       |
| ------ | -------------------------- | ----------------- |
| POST   | `/api/products/add`        | Add a new product |
| PUT    | `/api/products/update/:id` | Update a product  |

### Order Routes

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | `/api/orders/create` | Create a new order |
| GET    | `/api/orders/`       | Get all orders     |

## Project Structure

```
📂 project-folder
├── 📂 controllers
│   ├── ordersController.js
│   ├── productControllers.js
│   ├── usersControllers.js
├── 📂 models
│   ├── Order.js
│   ├── Product.js
│   ├── User.js
├── 📂 routes
│   ├── orderRoutes.js
│   ├── productRoutes.js
│   ├── userRoutes.js
├── app.js
├── package.json
└── README.md
```

## Routes

### Order Routes

```javascript
import Router from "express";
import ordersController from "../controllers/ordersController.js";

const orderRouter = new Router();

orderRouter.post("/create", ordersController.createOrder);
orderRouter.get("/", ordersController.getOrders);

export default orderRouter;
```

### Product Routes

```javascript
import Router from "express";
import productControllers from "../controllers/productControllers.js";

const productRouter = new Router();

productRouter.post("/add", productControllers.addProduct);
productRouter.put("/update/:id", productControllers.updateProduct);

export default productRouter;
```

### User Routes

```javascript
import Router from "express";
import usersControllers from "../controllers/usersControllers.js";

const userRouter = new Router();

userRouter.post("/register", usersControllers.register);

export default userRouter;
```
