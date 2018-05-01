// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAe8NqA0uRhddrg6AecoUKOxAddkKD93XU",
    authDomain: "my-poetry-d70c0.firebaseapp.com",
    databaseURL: "https://my-poetry-d70c0.firebaseio.com",
    projectId: "my-poetry-d70c0",
    storageBucket: "my-poetry-d70c0.appspot.com",
    messagingSenderId: "412702438220"
  }
};
