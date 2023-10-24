const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },

    env: {
          "URL_HML_CONTACT_US": "https://project-passaport-pre-prod.vercel.app/request-for-information/"
        }
    }
});