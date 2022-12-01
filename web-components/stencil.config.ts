import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // angularOutputTarget({
    //   componentCorePackage: '@web-components/dist/components', // let's comeback here later
    //   directivesProxyFile: './../shell/src/libs/stencil-generated/proxies.ts', // let's comeback here later
    //   valueAccessorConfigs: angularValueAccessorBindings,
    // }),
  ],
  plugins: [sass()],
};
