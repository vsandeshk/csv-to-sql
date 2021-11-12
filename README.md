# csv-to-sql
This code is to upload records from csv file to sql table. The code is written in node js and APIs is being created to access the server. 

# Modules used
1. Express
2. csvtojson
3. mysql

## Prerequisites
1. Node & npm should be installed
2. MYSQL should be installed and configured

## How to Run?
1. Go to the code's main directory.
2. Open terminal/cmd 
3. Install Node Modules
4. Open 'api/controller/controller.js' file 
5. edit user & password field by enter your database user crendentials
6. save and close the file
7. Go to the main directory (where app.js file is)
8. Run node server
9. Open browser and test

## 3. Install Node Modules
Enter below command in terminal/cmd to install required node modules
```bash
npm install
```

## 8. Run Node Server
Enter below command in terminal/cmd to install required node modules
```bash
node app.js
```
## 9. Open browser and test
The first step to run this application is to *Open Browser*. Then do the following by using specifing URLS.
1. Create Database
2. Create Table
3. Import Data
4. Get Records

### Create Database
Enter below url in browser
**URL** : http://localhost:3000/api/database/create

### Create Table
Enter below url in browser
**URL** : http://localhost:3000/api/table/create

### Import Records
Enter below url in browser
**URL** : http://localhost:3000/api/data/import

### Display Records from SQL
Enter below url in browser
**URL** : http://localhost:3000/api/data/display

# What Could I do more if I had more time?
Followings are the tasks that I could do to improve this code:
1. Create db schema file for node.js
2. Create Angular code to display data in frontend








