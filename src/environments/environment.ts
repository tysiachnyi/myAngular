// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from 'src/app/shared/interfaces';

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyAu4s3PefDI_WLk_9h9JM3SxUPjDZ4Yh70',
  fbDbUrl: 'https://angular-blog-922b6.firebaseio.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
