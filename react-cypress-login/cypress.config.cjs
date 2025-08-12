const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(_on, _config) {
      // plugins here if needed
    },
  },
});
