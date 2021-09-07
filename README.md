## Setup

This response was built and tested with Node v14.17 and NPM 6.14. This is important because the solution utilizes ES Modules, which are supported in Node 14 using the `type: module` field in package.json. 

NPM was used to install dependencies and run the applications and tests, yarn barfed on installing babel for some reason. DB running is required for one test, so amended instructions are:
- npm i
- npm run start:db
- npm run test
- npm run start:app

## Architecture
The response utilizes a general philosophy and methodology based on Clean Architecture:
![clean architecture diagram](https://alansantos.dev/wp-content/uploads/2019/03/CleanArchitecture.jpg)
In this case, I was mostly interested in using the pattern as a vehicle for dependency injection. Dependency injection is highly useful for decoupling, abstraction, and maintaining optionality. 

Taking a look at the code base you'll see that index.js is sparse, while AppContext is the star of the show. The idea is for AppContext to be a dependency controller where most processes get their dependencies. I didn't implement this pattern 100%, but instead was pragmatic and tried to choose where it would be helpful to make testing more convenient. 

## ToDos:

 - Support encoded user tokens from client 
 - More robust error handling for responses
 - Return updated listing when incrementing favorite count
 - Decouple persistence models from Mongo
 - Configure eslint/prettier
 - Increase test coverage
 
