This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


>>>>>>>>>Sample Code>>>>>>>>>
const data = {
  "RS_AOS_ADHOC": [
    {
      "originator": "Monika Ramaswamy",
      "problemPerCount": 3
    },
    {
      "originator": "Laxmi Nair",
      "problemPerCount": 4
    },
    {
      "originator": "Mahasweta Nayak",
      "problemPerCount": 2
    }
  ],
  "RS_AOS_22.7": [],
  "RS_AOS_21.7": [
    {
      "originator": "Monika Ramaswamy",
      "problemPerCount": 2
    },
    {
      "originator": "Mukta Dahiya",
      "problemPerCount": 1
    },
    {
      "originator": "Brahmaiah Thoganti",
      "problemPerCount": 1
    }
  ],
  "RS_AOS_22.6": [],
  "RS_AOS_20.3": [],
  "RS_AOS_21.2": [
    {
      "originator": "Monika Ramaswamy",
      "problemPerCount": 1
    },
    {
      "originator": "Mukta Dahiya",
      "problemPerCount": 7
    },
    {
      "originator": "David Jacob",
      "problemPerCount": 2
    },
    {
      "originator": "Laxmi Nair",
      "problemPerCount": 7
    },
    {
      "originator": "Mahasweta Nayak",
      "problemPerCount": 11
    }
  ],
  "RS_AOS_22.1": [
    {
      "originator": "Monika Ramaswamy",
      "problemPerCount": 1
    }
  ],
  "RS_AOS_20.2": [],
  "RS_AOS_21.1": []
};
var result = [];

for(var key in data){
  var array = data[key];
  array.map(item =>{
    if(result.some(obj => obj.label === item.originator)){
      var index = result.findIndex(e => e.label === item.originator);
      var objCopy = result[index];
      objCopy.data.push(item.problemPerCount);
      result[index] = objCopy;
    }else{
      result.push({"label": item.originator, "data":[item.problemPerCount]});
    }
  })
}

console.log(result);
