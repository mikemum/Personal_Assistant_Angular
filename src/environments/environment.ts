// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   chatServerUrl: 'http://localhost:3000',
//   actionsBaseUrl: 'http://localhost:4000',
//   dispatcherBaseUrl: 'http://localhost:5000/api/v1/dispatch',
// };

export const environment = {
         production: false,
         actionsBaseUrl: 'https://personal-assistant-actions-api.herokuapp.com',
         dispatcherBaseUrl:
           'https://personal-assistant-dispatcher.herokuapp.com/api/v1/dispatch',
         chatServerUrl: 'https://personal-assistant-chat-server.herokuapp.com/',
       };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
