# SwagShop eCommerce Store
eCommerce store built with MERN Stack + Redux.

## Website
https://swagshopapp.herokuapp.com/

## Features
* Full fledged shopping cart
* Product reviews and ratings
* Top products carousel
* Product pagination
* Product search
* User profile with orders
* Admin product management
* Admin user management
* Admin Order details page
* Mark orders as delivered option
* Checkout process (shipping, placing order, etc)
* PayPal / credit card integration

## Usage
### ES Modules in Node
We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

### ENV Variables
Create a .env file in the main folder and add the following:

~~~
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb uri
JWT_SECRET = jwt secret 
PAYPAL_CLIENT_ID = paypal client id
~~~
