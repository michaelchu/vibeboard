/*
  This file is added to your codebase if you've excluded contact form integration from your stack when exporting from
  from Divjoy, but one of your components attempts to import this file and call one of its functions.
  Rather than break your project, we include this placeholder file so your codebase can still run.
  If you need contact form integration, re-export from Divjoy and select a contact form option.
  Otherwise, you can search your codebase for the function names you see below, remove all related code, then delete this file.
*/

function submit(data) {
  return Promise.reject(
    new Error(
      "Contact form integration is disabled. See src/util/contact.js for more details."
    )
  );
}

const contact = { submit };

export default contact;
