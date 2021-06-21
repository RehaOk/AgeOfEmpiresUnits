# Age of Empires Units

## Project Description

A React application that uses Redux for state management \
to be able to list and display Age of Empires game units.

## Folder Strucutre

```
+---assets
+---components
|   \---__test__
+---db
|   \---__test__
+---redux
|   +---actions
|   +---reducers
|   |   \---unitFilter
|   +---sagas
|   |   \---unitFilter
|   \---__test__
|       +---actions
|       +---reducers
|       \---sagas
|           \---unitFilter
+---styles
|   +---components
|   \---views
\---views
    +---homePageView
    +---unitDetailPageView
    +---unitsPageView
    \---__test__
```

- There are 6 main folders (assests, components, db, redux, styles, views)

- All main folders except assets and styles contain a \_\_test\_\_ folder that \
  includes tests for that folder using the same hierarchy for the .test.js files

## Tested Platforms
- Google Chrome (91.0.4472.114)
- Microsoft Edge (91.0.864.54)
- Mozilla Firefox (89.0)
- Opera (77.0.4054.90)

## Extensions

There are three extensions that were used during development:

- dbaeumer.vscode-eslint (ESLINT)
- ritwickdey.live-sass (SASS COMPILER)
- esbenp.prettier-vscode (PRETTIER)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Global coverage threshold is set to 80 for lines and statements by default.\
Below this threshold terminal will notify the user.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
