import { version } from '../../package.json';

export const environment = {
  production: true,
  appVersion: version,
  firebase: {
    apiKey: 'AIzaSyBs3mV_n7odQhbeVWP3-lJXdubfGRdllhs',
    authDomain: 'kampf-der-diener.firebaseapp.com',
    databaseURL: 'https://kampf-der-diener.firebaseio.com/',
    projectId: 'kampf-der-diener',
    storageBucket: 'gs://kampf-der-diener.appspot.com',
  }
};
