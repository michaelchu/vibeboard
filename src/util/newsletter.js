/*
  This file is added to your codebase if you've excluded newsletter integration from your stack when exporting from
  from Divjoy, but one of your components attempts to import this file and call one of its functions.
  Rather than break your project, we include this placeholder file so your codebase can still run.
  If you need newsletter integration, re-export from Divjoy and select a newsletter option.
  Otherwise, you can search your codebase for the function names you see below, remove all related code, then delete this file.
*/

function subscribe(data) {
  alert(
    "Newletter integration is disabled. See src/util/newsletter.js for more details."
  );
}

const newsletter = { subscribe };

export default newsletter;
