# MarsColony

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### README
### HOME SCREEN 
<img width="376" alt="screen shot 2017-03-06 at 3 33 09 pm" src="https://cloud.githubusercontent.com/assets/24995518/23635090/96f2405a-0282-11e7-8400-6aa51be20586.png">
Animation used to create center radial button. This button uses routerLink to switch to the next screen. 
---
<img width="375" alt="screen shot 2017-03-06 at 3 33 30 pm" src="https://cloud.githubusercontent.com/assets/24995518/23638073/3f515ba8-0294-11e7-916b-92616d70f2ec.png">
The register screen collects data of the user. the user cannot continue without filling in the forms with the correct valid data.
---
<img width="375" alt="screen shot 2017-03-06 at 3 34 29 pm" src="https://cloud.githubusercontent.com/assets/24995518/23638119/7cf785ea-0294-11e7-9955-98ad9cac1a9f.png">
If the user fills in invalid data, a flashing error animation will show until the user fills out the requred input.
---
<img width="373" alt="screen shot 2017-03-06 at 3 34 55 pm" src="https://cloud.githubusercontent.com/assets/24995518/23638289/8fc35586-0295-11e7-99e6-faea42efe584.png">
Recent encounts grabs information thats posted in the API and generates a list in a contained overflow list. When we hit the submit report page it brings us to a page where we can contribute to the API list
---
<img width="375" alt="screen shot 2017-03-06 at 3 35 25 pm" src="https://cloud.githubusercontent.com/assets/24995518/23638802/9f3d019e-0298-11e7-976d-7c4c26e07d3d.png">
Here we can make a report of what type of encounter we've stumbled upon. We madea call to the API and asked for the list of encounters stored and in return we get a list of the encounters we can then put into a drop down. We ask the user for an input of what axctions were taken. We can then take the information thats in our textfield and send both the encounter and actions to send to the API. Again we cannot report this formfield if any of the inputs are empty and if so we receive an error animation.
---
<img width="376" alt="screen shot 2017-03-06 at 6 20 00 pm" src="https://cloud.githubusercontent.com/assets/24995518/23638942/89692ea0-0299-11e7-9547-9dfed9e27cb3.png">
The not found 404 page is a page for if the user accidentally entered a wrong link. This rocket emoji will redirect the user to the home page. with a routerLink.
