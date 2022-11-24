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
2) run the command npm start

## Run APIs
- Add user
```
curl -X POST -d 'username=paolo95' -d 'codice_fiscale=xxxxxxxxxxxxxxxx' localhost:3000/api/v1/user/add
```