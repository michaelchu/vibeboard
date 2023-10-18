/*
      This file is added to your codebase if you've excluded payments integration from your stack when exporting from
      from Divjoy, but one of your components attempts to import this file and call one of its functions.
      Rather than break your project, we include this placeholder file so your codebase can still run.
      If you need payments integration, re-export from Divjoy using the "SaaS" app type and select a payments option.
      Otherwise, you can search your codebase for the function names you see below, remove all related code, then delete this file.
    */

const errorMessage = `Stripe payments is disabled. See src/util/stripe.js for more details.`;

export async function redirectToCheckout(planId) {
  throw new Error(errorMessage);
}

export async function redirectToBilling() {
  throw new Error(errorMessage);
}
