# flutter-project-base-standard-generator README
by Ilham Huda | Ilhamhuda.dev@gmail.com | ilhamhuda6@gmail.com
Github : https://github.com/ilhamhudadev

The purpose of creating extensions is to simplify and unify the process of generating modules. This includes a module generator to help with generating modules. The generated module consists of four components: the controller, data, screen, and test modules. 



### controller 
Managing the flow of data within the application and acts as a middle layer between the repository and screen modules. It updates the pipe when there are changes in data. 

### data 
Defining the input/output logic of the application and requires a repository to retrieve data from various sources and send it to the controller. 

### screen 
Module serves as the entry point for the current app and represents the route and page of the application. 

### test 
Where unit, widget, and integration tests for the current module are located. 

Finally, the widget module is the place where current module widgets are stored.