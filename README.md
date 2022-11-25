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
curl -X POST -d 'name=bnl' -d 'additional=[{"field":"email"}]' localhost:3000/api/v1/banks/add

curl -X POST -d 'name=sanpaolo' -d 'additional=[{"field":"codice_filiale"}, {"field":"received"}]' localhost:3000/api/v1/banks/add

curl -X POST -d 'name=creditagricole' -d 'additional=[{"field":"codice_filiale"}, {"field":"received"}]' localhost:3000/api/v1/banks/add

```
- Add product: name(string), bank(id)
```
curl -X POST -d 'name=mutuo50' -d 'bank=1' localhost:3000/api/v1/products/add
```
- Add prospect: bank(int), product(int), user(int), instalment(decimal), tan(double), taeg(double)
```
curl -X POST -d 'bank=1' -d 'product=1' -d 'user=1' -d 'instalment=540.32' -d 'tan=0.65' -d 'taeg=1.38' -d 'additional=[{"field":"email", "value":"filiale123@bnl.it"}]' localhost:3000/api/v1/prospects/add

curl -X POST -d 'bank=2' -d 'product=1' -d 'user=1' -d 'instalment=540.32' -d 'tan=0.65' -d 'taeg=1.38' -d 'additional=[{"field":"codice_filiale", "value":"123456"}, {"field":"received", "value":"True"}]' localhost:3000/api/v1/prospects/add
```
- Get prospect: id(int)
```
curl -X GET "localhost:3000/api/v1/prospects/prospect?id=1"
```

