const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false, // agar tidak menambah cy.visit("http://localhost:3000/"); disetiap it
  },
});
