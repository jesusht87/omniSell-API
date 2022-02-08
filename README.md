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
GET    | /users           | YES   | Finds users (only admins)     | query: search string                            | list of matching usernames and ids
GET    | /users/:storeid  | YES   | Finds users by store (admins/managers)  | userid                      



