# cacioepepe

BostonHacks Registration Portal

[![Actions Status](https://github.com/bostonhacks/cacioepepe/workflows/Build/badge.svg)](https://github.com/bostonhacks/cacioepepe/actions)
[![License](http://img.shields.io/badge/License-MIT-brightgreen.svg)](./LICENSE)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

#### Testing Build

```bash
serve -s dist OR firebase serve --only hosting
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Calling Firebase functions

With an authenticated @firebase/app object,

```javascript
import { functions } from "../firebase/init";
firebase.functions().httpsCallable("name-of-function")(input_data).then(data => {...})
```

For more info on the types of functions, visit the official [Firebase Documentation](https://firebase.google.com/docs/functions).

## Making a Firestore transaction

With an authenticated @firebase/app object,

```javascript
import { db } from "../firebase/init";
db.collection("name-of-collection").doc("doc-identifier").action().then(data => {...})
```

For more info on actions that can be performed, visit the official [Firebase Documentation](https://firebase.google.com/docs/firestore).

## Deploying Firebase Resources

Run the following command after installing the [Firebase CLI](https://firebase.google.com/docs/cli) to deploy everything but the website.

```bash
firebase deploy --except hosting
```

To deploy functions,

```bash
npm run deploy
```

To deploy a specific function,

```bash
firebase deploy --only functions:(function name)
```

## Deploying the Website to Staging

After running the buildscript, run the following command.

```bash
firebase deploy --only hosting:staging
```

## Deploying the Website to Production

After running the buildscript, run the following command.

```bash
firebase deploy --only hosting:production
```

## Contributing

To contribute to Cacioepepe, view our [contribution guide](https://github.com/Bostonhacks/cacioepepe/blob/master/CONTRIBUTING.md).
