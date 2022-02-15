# BenchLabs - front-end code challenge

This project was generated with [Angular CLI](https://github.com/angular/anguar-cli) version 13.2.2.

## Installation

1. Ensure you have node 16.x installed on your computer
2. Using your favorite terminal navigate to the project's root folder and run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Considerations

I tried to keep things simple, there are things I would have done differently for production code depending on
requirements. Things such as creating a responsive layout with an actual theme, fonts, and updated design. I did start
to add paging but decided that was overkill and instead just loaded all results at once. My unit tests do not cover
everything, I just added a few for examples.

1. You'll notice I had to manually convert the values to numbers in my calculateTotal method, this is because for
   whatever reason (I am not positive) Angular was changing the values to strings leaving you with a long string of
   numbers, not the sum.
2. There are places I would break up the component, normally I place results in a display component, and leave the main
   page as an orchestrator and/or route.
3. The error page is extremely basic and could be done a better, but I believe it works and is easily refactored to look
   prettier.

