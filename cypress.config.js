const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9iyncm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;

};
    },
  },

    "experimentalSessionAndOrigin": true
  
});
