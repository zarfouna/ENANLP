# Evaluate a news article with Natural Language Processing

this project is a web tool that allows users to run Natural Language Processing (NLP) on article Using an exciting Meaning cloud API.

### Project dependencies

```
"dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "form-data": "^4.0.0",
    "jest-fetch-mock": "^3.0.3",
    "meaning-cloud": "^1.1.10",
    "webpack": "^4.40.0",
    "webpack-cli": "^3.3.5"
  },
  "devDependencies": {
    "@babel/core": "^7.13.15",
    "@babel/plugin-transform-modules-commonjs": "^7.13.8",
    "@babel/preset-env": "^7.13.15",
    "babel-loader": "^8.2.2",
    "body-parser": "^1.19.0",
    "clean-webpack-plugin": "^3.0.0",
    "cors": "^2.8.5",
    "css-loader": "^5.2.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.6.3",
    "mini-css-extract-plugin": "^1.4.1",
    "node-fetch": "^2.6.7",
    "node-sass": "^5.0.0",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "sass": "^1.32.8",
    "sass-loader": "^10.1.1",
    "style-loader": "^2.0.0",
    "terser-webpack-plugin": "^5.1.1",
    "webpack-dev-server": "^3.11.2",
    "workbox-webpack-plugin": "^6.1.5"
  }

```

### Project intallation

run
` npm i`

### run project in development mode

will start a webpack dev server at port 8080

` npm run build-dev`

### run project in production mode

Will generate the dist files and then start server at port 8081

` npm run build-prod`

` npm run start`

## Webpack configs

### Development

`webpack.config.dev.js`

### Prdocution

`webpack.config.prod.js`

## API

The project uses meaningcloud APIs [meaningcloud](https://www.meaningcloud.com/).

## Offline Functionality

The project have service workers set up in webpack to provide the offline functionality of our app.
