// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a6cbd498c8323ee8e6a43bb131b29cdc@o4508738337177600.ingest.de.sentry.io/4508738341109840",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
