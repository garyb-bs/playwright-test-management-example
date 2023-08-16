<p float="center">
  <img src="https://www.browserstack.com/blog/content/images/2023/06/Screenshot-2023-06-20-at-12.53.41-PM.png" width="500" height="200" title="Percy.IO2">
</p>
<p float="left">
  <img src="https://pbs.twimg.com/profile_images/1318604600677527552/stk8sqYZ_400x400.png" width="100" height="100" title="Percy.IO">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/browserstack-logo-png-transparent.png" width="100" height="100" title="Percy.IO2">
</p>

# Playwright + BrowserStack Test Management Example <a href="https://playwright.dev/"><img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright" height="30" /></a>

## Introduction

This example is to demonstrate the use of BrowserStack Test Management to automatically generate test cases from a JUNit report of your automation tests.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
    - Node.js

    Install the requirements:
    ```sh
    npm install
    ```

## Running Tests

If you look at the package.json file, in teh scripts section you will see that there is an environment variable being defined ahead of the test execution:

```sh
PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml
```

And also a new property appended to the end:

```sh
--reporter=junit
```

So the complete command looks like this:

```sh
PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test login.spec.ts --headed --config=resources/conf/playwright.config.ts --project firefox --reporter=junit
```

This will create a JUnit report with the name specified. This is what we will use to upload to Test Management.

## Uploading Tests to Test Management

Once the tests are completed, you can then upload the results to Test Management. To do this, run the script "upload-to-test-manangement" to perform a POST request that will upload the results.

```sh
npm run upload-to-test-management
```

In order for this to work, you will need to update the API-TOKEN to your token and you can also change the names for the projects and test runs should you need to

```js
'headers': {
    'API-TOKEN': '<insert token>'
  },
```
