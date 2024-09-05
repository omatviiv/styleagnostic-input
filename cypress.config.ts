import { defineConfig } from "cypress";
// import { ProvidePlugin } from "webpack";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      /*
      console.log('>>>>>>>>>>>>ProvidePlugin', ProvidePlugin);
      // Import and use ProvidePlugin
      const providePlugin = new ProvidePlugin({
        // Your provide options here
      });

      on('file:preprocessor', providePlugin);
      */
    },
  },
});
