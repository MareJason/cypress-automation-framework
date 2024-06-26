const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7krdbb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*",
    baseUrl:"http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    video: false,
    videoUploadOnPasses: false,
    env:{
      first_name:"Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      automationStore: "https://automationteststore.com/"
    }
  },
  
});
