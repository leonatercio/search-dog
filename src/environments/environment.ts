// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  debug: true,
  production: false,
  apiVersion: '1',
  type: 'dev',
  apiHost: 'https://api.taurus-dev.soirtec.com',
  limit: 15,
  cards: {
    limit: 15
  },
  imageDefault: './../assets/images/not-found.png'
};
