# Installation
1. Make sure you are in server folder
2. Run ```npm i``` to load missing modules
3. Run ```npm start``` to start application

# Configuration
To set up Api port, edit: \server\server_components\config.js

To setup SQLite db connection, edit: \server\server_components\knexfile.js

# Entry point
entry.js 

# APIs
Available api endpoints:
### /api/pricelist
Supports patch, get (and get by id), post and delete
For patch and post we use json body:
```json
{ "data": {
     "PriceListId": "9",
     "SalesItemName": "string name",
     "Price": "2478347834",
     "SalesItemUnits": "string units name",
     "id": "9"
      } 
}
```
### /api/articles
Supports get and get by id



