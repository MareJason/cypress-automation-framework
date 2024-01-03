const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
    env:{
      first_name:"Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      automationStore: "https://automationteststore.com/"
    }
  },
  
});
