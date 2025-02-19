// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a6cbd498c8323ee8e6a43bb131b29cdc@o4508738337177600.ingest.de.sentry.io/4508738341109840",

  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark", // Дополнительные настройки
    }),
  ],

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
});
