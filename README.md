# exercise-mortgage

1) create an .env file inside the root with this code:
```
PORT=3000
MYSQL_USER=mysql username
MYSQL_PASSWORD=mysql password
MYSQL_PORT=mysql port
MYSQL_HOST=127.0.0.1
MYSQL_NAME=mysql databaae name
```
3) get the sql code from db_construction.sql and run it in phpMyAdmin

2) run the command npm start

## Run APIs
- Add user: name(string), codice_fiscale(string)
```
curl -X POST -d 'username=paolo95' -d 'codice_fiscale=xxxxxxxxxxxxxxxx' localhost:3000/api/v1/users/add
```
- Add bank: name(string), additional(JSON)
```
curl -X POST -d 'name=unicredit' -d 'additional=[{"field":"email"}]' localhost:3000/api/v1/banks/add
```
- Add product: name(string), bank(id)
```
curl -X POST -d 'name=mutuo50' -d 'bank=1' localhost:3000/api/v1/products/add
```