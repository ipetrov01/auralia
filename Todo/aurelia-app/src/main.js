import environment from './environment';
import config from './auth-config';
import regeneratortoRuntime from 'regenerator-runtime';
window.regeneratortoRuntime=regeneratortoRuntime;

export function configure(aurelia) {
  aurelia.use
  .standardConfiguration()
  .plugin('aurelia-auth', (baseConfig)=>{
       baseConfig.configure(config);
  })
  .feature('resources'); 

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
