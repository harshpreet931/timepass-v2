# MERN E-Commerce Platform

![Banner Image](assets/bannerImg.png)

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This application provides a complete online shopping experience with separate dashboards for customers, merchants, and administrators.

## Features

### Customer Features
- **Product Browsing:** Browse products by category, brand, and price.
- **Product Search:** Search for specific products.
- **Product Details:** View detailed information about each product, including reviews.
- **Shopping Cart:** Add products to a shopping cart and manage cart items.
- **Wishlist:** Save products to a wishlist for future purchase.
- **Checkout:** Secure checkout process with address management.
- **Order History:** View past orders and their status.
- **Account Management:** Manage personal information and security settings.

### Merchant Features
- **Product Management:** Add, edit, and delete products.
- **Brand Management:** Add and manage product brands.
- **Category Management:** Add and manage product categories.
- **Order Management:** View and manage incoming orders.
- **Dashboard:** View sales and performance metrics.

### Admin Features
- **User Management:** Manage all users (customers and merchants).
- **Merchant Management:** Approve or disable merchant accounts.
- **Product Management:** Oversee all products on the platform.
- **Order Management:** Access and manage all orders.
- **Support:** Handle support tickets and messages.
- **Dashboard:** Comprehensive overview of the entire platform.

## Screenshots

![Screenshot 1](assets/Screenshot%202025-06-26%20at%2015.49.17.png)
![Screenshot 2](assets/Screenshot%202025-06-26%20at%2015.51.16.png)
![Screenshot 3](assets/Screenshot%202025-06-26%20at%2015.51.24.png)
![Screenshot 4](assets/Screenshot%202025-06-26%20at%2015.52.03.png)
![Screenshot 5](assets/Screenshot%202025-06-26%20at%2015.52.27.png)

## Tech Stack

- **Frontend:**
  - React
  - Redux for state management
  - Reactstrap for UI components
  - SCSS for styling
  - Webpack for bundling

- **Backend:**
  - Node.js
  - Express.js for the server framework
  - MongoDB for the database
  - Mongoose for object data modeling
  - JWT for authentication
  - Passport.js for authentication strategies

- **Deployment:**
  - Docker
  - Nginx (for client-side routing)

## Project Structure

### Client (`/client`)
```
/client
├── app/
│   ├── actions.js
│   ├── components/
│   │   ├── Common/
│   │   ├── Manager/
│   │   └── Store/
│   ├── constants/
│   ├── containers/
│   │   ├── Account/
│   │   ├── Authentication/
│   │   ├── Brand/
│   │   ├── Cart/
│   │   ├── Category/
│   │   ├── Contact/
│   │   ├── Dashboard/
│   │   ├── Homepage/
│   │   ├── Login/
│   │   ├── Merchant/
│   │   ├── Navigation/
│   │   ├── Order/
│   │   ├── Product/
│   │   ├── Review/
│   │   ├── Shop/
│   │   └── Support/
│   ├── contexts/
│   ├── reducers.js
│   ├── store.js
│   └── utils/
├── public/
│   ├── images/
│   └── index.html
├── styles/
├── webpack/
├── Dockerfile
├── nginx.conf
└── package.json
```

### Server (`/server`)
```
/server
├── config/
├── enums/
├── helpers/
├── index.js
├── models/
│   ├── address.js
│   ├── brand.js
│   ├── cart.js
│   ├── category.js
│   ├── contact.js
│   ├── newsletter.js
│   ├── order.js
│   ├── product.js
│   ├── review.js
│   ├── user.js
│   └── wishlist.js
├── routes/
│   └── api/
│       ├── address.js
│       ├── auth.js
│       ├── brand.js
│       ├── cart.js
│       ├── category.js
│       ├── contact.js
│       ├── merchant.js
│       ├── newsletter.js
│       ├── order.js
│       ├── product.js
│       ├── review.js
│       ├── user.js
│       └── wishlist.js
├── services/
├── socket/
├── utils/
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm
- MongoDB
- Docker (optional, for containerized deployment)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mern-ecommerce.git
   cd mern-ecommerce
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   - In the `/server` directory, create a `.env` file by copying `.env.example`.
   - Fill in the required environment variables, such as your MongoDB connection string and JWT secret.

5. **Seed the database (optional):**
   - To populate the database with initial data, run the seeder script:
     ```bash
     cd ../server
     npm run seed
     ```

### Running the Application

1. **Start the server:**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:3000`.

2. **Start the client:**
   ```bash
   cd ../client
   npm start
   ```
   The client development server will run on `http://localhost:8080`.

## API Endpoints

The backend API provides the following RESTful endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/products` - Get all products
- `GET /api/products/:slug` - Get a single product by slug
- `POST /api/products` - Create a new product (merchant/admin only)
- `PUT /api/products/:id` - Update a product (merchant/admin only)
- `DELETE /api/products/:id` - Delete a product (merchant/admin only)
- `GET /api/brands` - Get all brands
- `GET /api/categories` - Get all categories
- `POST /api/cart` - Add an item to the cart
- `GET /api/cart` - Get cart items
- `DELETE /api/cart/:id` - Remove an item from the cart
- `POST /api/wishlist` - Add an item to the wishlist
- `GET /api/wishlist` - Get wishlist items
- `POST /api/orders` - Place a new order
- `GET /api/orders` - Get user's orders
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get a single user (admin only)
- `PUT /api/users/:id` - Update a user (admin only)

...and many more. Refer to the route files in `/server/routes/api/` for a complete list.

## Environment Variables

The following environment variables are required for the server to run:

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for signing JWTs.
- `JWT_EXPIRATION`: JWT expiration time (e.g., `1h`).
- `MAILGUN_KEY`: Your Mailgun API key (for sending emails).
- `MAILGUN_DOMAIN`: Your Mailgun domain.
- `MAILCHIMP_KEY`: Your Mailchimp API key (for newsletter subscriptions).
- `MAILCHIMP_LIST_ID`: Your Mailchimp list ID.
- `STRIPE_SECRET_KEY`: Your Stripe secret key (for payments).

## Deployment

This application is configured for deployment with Docker.

1. **Build the Docker images:**
   ```bash
   docker-compose build
   ```

2. **Run the containers:**
   ```bash
   docker-compose up
   ```

The application will be available at `http://localhost:8080`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
