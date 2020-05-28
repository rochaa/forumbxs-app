# ForumBXS

## Services
1. Registration of questions
2. Registration of answers

## Frameworks
> Angular 9 and Bootstrap 4.5

## Requirements

> Angular 9.1.0 -> https://github.com/angular/angular-cli

> Docker -> https://docs.docker.com/desktop/

## Local tests (docker)

> docker build -f Dockerfile -t forumbxs-app:latest .

Wait a few seconds for the application to finish compiling in the container.

> docker run --rm -d -p 4333:4200 forumbxs-app

## Local tests (angular)

> ng build

> ng serve (Navigate to `http://localhost:4200/`)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
