# BenchLabs - front-end code challenge

This project was generated with [Angular CLI](https://github.com/angular/anguar-cli) version 13.2.2.

## Installation

1. Ensure you have node 16.x installed on your computer
2. Using your favorite terminal navigate to the project's root folder and run `npm install`

## Development server

Run `ng serve` for a dev server if you have the Angular CLI installed else run `npm run start`. Navigate
to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project or `npm run build`. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test`, or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

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
4. My commits are not that organized, but I find that commit messages don't do much in the long run as they are normally
   quashed when merging the feature branch back into the main.
5. I am aware that I am using a deprecated method with `expect().toBeObservable()` but I am running short on time to
   look up the new way of testing observables.
6. I would also have converted the project to use Jest over Jasmine if I had time

