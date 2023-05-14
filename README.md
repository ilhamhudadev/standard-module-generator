# flutter-project-base-standard-generator README
by Ilham Huda | Ilhamhuda.dev@gmail.com | ilhamhuda6@gmail.com
Github : https://github.com/ilhamhudadev


This is a standard Flutter project structure that provides a solid foundation for building scalable and maintainable Flutter applications. The project structure is designed to separate concerns and promote modularity, making it easy to add new features and maintain existing ones.

## Directory Structure
The project is divided into three main directories:

## common
This directory contains files that are used globally throughout the project. It includes constants, utility functions, and classes that are used across all modules.

## core
This directory contains the main configuration files that are used throughout the project. It includes configuration for API, environment, routes, localization, controllers, styles, variables, and other global configuration.

## modules
This directory contains the feature modules of the application. Each module is designed to be self-contained, with its own set of controllers, views, and styles. The module directory also contains its own set of assets, localization files, and any other resources that are specific to the module.

To get started with this project, clone the repository and install the required dependencies using the flutter pub get command. Once the dependencies are installed, you can start adding new modules to the modules directory.

Contributing
Contributions are welcome and encouraged. If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.
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