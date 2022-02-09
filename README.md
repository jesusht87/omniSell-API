# omniSell-API
Sell whenever you want, no matter where your product is. 


## API Endpoints

All API Request must be prepended with /api            


### Authentication Endpoints

The Authentication flow for the application is:


METHOD | ENDPOINT         | TOKEN |   ROLE  |       DESCRIPTION       | POST PARAMS                                     | RETURNS
-------|------------------|-------|---------|-------------------------|-------------------------------------------------|-----------------------------
POST   | /auth/signup     | -     |    ALL  | User Signup              | name, surname, email, password, store, role    | token
POST   | /auth/login      | -     |    ALL  | User Login               | email, password                                | token
GET    | /auth/check      | YES   |    ALL  | Auth Token check         | -                                              |



### User Endpoints

METHOD | ENDPOINT         | TOKEN |   ROLE   |DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|----------|------------------------------|-------------------------------------------------|----------------------------
GET    | /users           | YES   |   ADMIN  |Finds users                   | query: search string                            | list of matching names, store and ids
GET    | /users/:storeid  | YES   |   ADMIN / MANAGER | Finds users in a store| -                              | list of employees and managers in that store 
POST   | /users           | YES   |   ADMIN  |Creates new user              | name, surname, email, password, store, role     | object with new user id, name and surname
PUT    | /users/:userid   | YES   | ADMIN    |Updates user data             | name, surname, email, password, store, or role  | object with user id and updated fields
DELETE | /users/:userid   | YES   | ADMIN    |Deletes a user                | userid                                          | object with deleted user (without password) 


### Products Endpoints

METHOD | ENDPOINT         | TOKEN |   ROLE   | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|----------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /products        | YES   |   ALL    | Finds all products            | query: search string                            | list of matching ids, name, size and colour
POST   | /products        | YES   |   ADMIN   | Adds product to catalog      | name, price, size, colour              | object with new product
PUT    | /products/:productid   | YES   |   ADMIN   | Updates product data   | productid                              | object with product id and updated fields
DELETE | /products/:productid   | YES   |   ADMIN   | Deletes a product      | productid                                 | object with deleted product


### Stores Endpoints

METHOD | ENDPOINT         | TOKEN |   ROLE   | DESCRIPTION                   | PARAMS                          | RETURNS
-------|------------------|-------|----------|-------------------------------|---------------------------------|----------------------------
GET    | /stores          | YES   |   ALL / MANAGER   | Finds stores                           | query: search string            | list of matching ids, name, and location (stock if admin/manager)
GET    | /stores/:storeid/stock  | YES  |   ALL   | Finds stock in a store                     | -                  | list of all products available in that store
GET    | /stores/:storeid/best-sellers | YES   |   ADMIN / MANAGER   | Finds best selling products in a store  | -           | list of names, size and colour
GET    | /stores/:storeid/staff  | YES  |   ADMIN / MANAGER   | Finds staff in a store         | -                   | list of all staff in that store
POST   | /stores                | YES   |   ADMIN   | Creates file for new store               | name, location         | object with new store
PUT    | /stores/:storeid       | YES   |   ADMIN   | Updates store name or location           | -       | store object
PUT    | /stores/:storeid/stock | YES   |   ADMIN / MANAGER   | Updates stock in a store      | name, price, size, or colour | list of all products available in that store
DELETE | /stores/:storeid       | YES   |   ADMIN        | Deletes a store                    | -                             | object with deleted store


### Orders Endpoints

METHOD | ENDPOINT         | TOKEN |   ROLE   | DESCRIPTION                   | PARAMS                                          | RETURNS
-------|------------------|-------|----------|-------------------------------|-------------------------------------------------|----------------------------
GET    | /orders          | YES   |   ALL   | Finds all orders              | query: search string                            | list of matching ids, content, origin and destination
GET    | /orders/:orderid | YES   |   ALL   | Finds information on a specific order  | -                                  | object with order id, content, origin and destination
POST   | /orders          | YES   |   ALL   | Make a new order (only in their store)  | order content, origin, destination    | object with order and transfer id
PUT    | /orders/:orderid   | YES   |   ADMIN / MANAGER   | Updates and order (managers in their stores, admins all orders)  | orderid                                    | object with order id and updated fields
DELETE | /orders/:orderid   | YES   |   ADMIN / MANAGER   | Cancels an order (managers in their stores, admins all orders)  | orderid                                     | object with canceled order


### Transfers Endpoints

METHOD | ENDPOINT         | TOKEN |   ROLE   | DESCRIPTION                   | PARAMS                                   | RETURNS
-------|------------------|-------|----------|-------------------------------|------------------------------------------|----------------------------
GET    | /transfers          | YES   |   ADMIN / MANAGER   | Finds all transfers created in one store           | query: storeid              | list of matching ids, content, origin, destination and status
GET    | /transfers/:transferid | YES |   ADMIN / MANAGER   | Finds information on a specific transfer  | -                        | object with transfer id, content, origin, destination and status

