# omniSell-API
Sell whenever you want, no matter where your product is. 


## API Endpoints

All API Request must be prepended with /api            


### Authentication Endpoints

The Authentication flow for the application is:


METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, email, password, store, role     | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token
GET    | /auth/check      | YES   | Auth Token check         | -                                               |



### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /users           | YES   | Finds users (only admins)     | query: search string                            | list of matching names, store and ids
GET    | /users/:storeid  | YES   | Finds users by store (admins/managers)  | storeid                               | list of employees and managers in that store 
POST   | /users           | YES   | Creates new user (only admins)  | name, surname, email, password, store, role     | object with new user id, name and surname
PUT    | /users/:userid   | YES   | Updates user data (only admins)  | name, surname, email, password, store, or role  | object with user id and updated fields
DELETE | /users/:userid   | YES   | Deletes a user (only admins)  | userid                                          | object with deleted user (without password) 


### Products Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /products        | YES   | Finds all products            | query: search string                            | list of matching ids, name, size and colour
POST   | /products        | YES   | Adds product to catalog (only admins)  | name, price, size, colour              | object with new product
PUT    | /products/:productid   | YES   | Updates product data (only admins)  | productid                              | object with product id and updated fields
DELETE | /products/:productid   | YES   | Deletes a product (only admins)  | productid                                 | object with deleted product


### Stores Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                          | RETURNS
-------|------------------|-------|-------------------------------|---------------------------------|----------------------------
GET    | /stores          | YES   | Finds stores                   | query: search string            | list of matching ids, name, and location (stock if admin/manager)
GET    | /stores/:storeid/stock  | YES  | Finds stock in a store         | storeid                   | list of all products available in that store
GET    | /stores/:storeid/best-sellers | YES   | Finds best selling products in a store  | storeid            | list of names, size and colour
GET    | /stores/:storeid/staff  | YES  | Finds stock in a store         | storeid                   | list of all products available in that store
POST   | /stores        | YES   | Creates file for new store (only admins)  | name, location         | object with new store
PUT    | /stores/:storeid   | YES   | Updates store name or location (only admins)  | storeid        | store object

DELETE | /stores/:storeid   | YES   | Deletes a store (only admins)  | storeid                      | object with deleted store


### Orders Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /orders          | YES   | Finds all orders              | query: search string                            | list of matching ids, content, origin and destination
GET    | /orders/:orderid | YES   | Finds information on a specific order  | orderid                                | object with order id, content, origin and destination
POST   | /orders          | YES   | Make a new order (only in their store)  | order content, origin, destination    | object with order and transfer id
PUT    | /orders/:orderid   | YES   | Updates and order (managers in their stores, admins all orders)  | orderid                                    | object with order id and updated fields
DELETE | /orders/:orderid   | YES   | Cancels an order (managers in their stores, admins all orders)  | orderid                                     | object with canceled order


### Transfers Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION                   | PARAMS                                   | RETURNS
-------|------------------|-------|-------------------------------|------------------------------------------|----------------------------
GET    | /transfers          | YES   | Finds all transfers created in one store (admins/managers)            | query: storeid              | list of matching ids, content, origin, destination and status
GET    | /transfers/:transferid | YES | Finds information on a specific transfer  | -                        | object with transfer id, content, origin, destination and status

