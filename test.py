import mysql.connector

mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="put username here",
    password="put password here",
    database="mydb" 
)

mycursor = mydb.cursor()

mycursor.execute("SHOW TABLES")

for x in mycursor:
  print(x)