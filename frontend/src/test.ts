import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing'
import { getTestBed } from '@angular/core/testing'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'

declare const require: any

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: { destroyAfterEach: false }
  }
)
// Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/)
// // And load the modules.
// context.keys().map(context)
