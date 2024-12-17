import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_2(); // Replaced with helper function

// eslint-disable-next-line no-async-promise-executor,@typescript-eslint/no-misused-promises
export = async () => {
  // eslint-disable-next-line no-async-promise-executor,@typescript-eslint/no-misused-promises
  await new Promise<void>(async (resolve, reject) => {
    await server.start((err?: Error) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  }
  )
}
