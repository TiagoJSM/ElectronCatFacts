# Electron Cat Facts

An [Electron](https://www.electronjs.org/) application developed with Typescript and React to display Cat Facts.

# Requirements
- Install [NodeJS](https://nodejs.org/en)
- Install `yarn` running the command `npm install --global yarn`

## Instructions
- Run `yarn` to resolve all dependencies
- Run `yarn start` to run the application

## Unit tests
- Run `yarn test`

## Features with additional time
- Make the UI more user friendly
- Save user configurations, currently they are only set in memory and reset every time the use ropens the application
- Debounce web requests, currently it's possible to throttle the backend server
- More and better unit tests, specially UI tests
- Improve github actions workflows to produce deploy artifacts and stop PR merges when pipelines fail

## Notes
- When developing the application the cat fact API wasn't working, so instead replaced it with [todo API](https://dummyjson.com/docs/todos), kept the whole application with the "cat api" theme, so it's easy to change once the cat api is working as intended