# 2021 F21 Challenge 1 - Taiwan Travel Advisor

Deploy in Vercel.com - https://taiwan-travel.vercel.app/

## Practice for React, Tailwind, React-Query, Redux-toolkit

## Available Scripts

In the app directory, you can run the following cmds:

To start development mode.
`npm start`
After the local server is started, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To launche the test runner for unit test
`npm test`

To launche the test runner with interactive mode of unit test
`npm run test:watch`

To run E2E test by cypress. Be sure that you have started a local server, e.g. run `npm run start` before the e2e test, since cypress test would not start a server automatically.
`npm run test:cypress`

To build the app for production mode, the output files would be in the "app/build" folder.
`npm run build`

## Build & Run by Docker

To build a docker image
`docker build -t react-travel-advisor .`

To run docker container after the image has been built. You can visit it at http://localhost after the container started.
`docker run -d -p 8080:80 --name react-travel-advisor react-travel-advisor`
