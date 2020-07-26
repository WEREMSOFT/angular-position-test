# Angular Interview Demo

This project was created as a test for an angular position.

Please read the following notes:

* some parts of the user interface were changed following the material UI guidelines. `https://material.io/design/guidelines-overview`. The differences inted to be intentional to improve usability.

* Type inference is heavily used in order to minimize cognitive load when reading the code. Variables and return values have no typedef when this can be deducted from the asignation or return clause. As stated in the book **Effective Typescrpt(Vanderkam 2020)**

* Interaction with external API's are encapsulated inside HostService. Replace mock values with real calls to the API is trivial.

* Unit tests and e2e tests are **not included**. But they can be added for specific clases upon request.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
