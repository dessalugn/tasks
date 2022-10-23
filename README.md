# General Notes 
Doctors' daily TODO list notifier application, on this project there is a client angular application under tasks_client floder and the python web api under tasksapi folder. The databse is PostSQL.

# Instalation 
 ## Web API
   1. Setup  an IDE, I prefer Visual Studio Code .
   2. Install Dajngo.
   3. Install Django REST framework, To install this package,run command: pip install djangorestframework.
   4. Install Django  PostgreSQL adapter,Run this command to install it: pip install psycopg2.
   5. Install PostgreSQL database and create tasks_db 
   6. Open the api project on the IDE
   7. Migrate tabels , to migrate the tables run this command on the terminal, Migrate python manage.py migrate tasks
   8. After doing the all this Run the Django Project with command: python manage.py runserver
## Web client
   1. Intsall angular cli
   2. Open the web client on IDE
   3. Run npm install to install node packages
   4. Run the web application n to run the appication run this command ng serve




