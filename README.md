## 👉 Get Started

Install dependencies

```
yarn install
```

Update your `.env` file with values for each environment variable

```
VITE_SUPABASE_PUBLIC_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
VITE_SUPABASE_URL=https://abcdefg.supabase.co
```

Run the development server

```
yarn run start
```

When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack

This project uses the following libraries and services:

- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Tailwind](https://tailwindcss.com)
- Authentication - [Supabase](https://supabase.com)
- Database - [Supabase](https://supabase.com)
- Hosting - [Vercel](https://vercel.com/)

## 📚 Guide

<details> <summary><b>Styles</b></summary> <p> Styles are applied within each component using Tailwind classes. You can customize your Tailwind colors, breakpoints, and other high-level values in <code>tailwind.config.js</code> (<a href="https://tailwindcss.com/docs/configuration">docs</a>). You can add new global classes in <code>src/styles/global.css</code> (<a href="https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes">docs</a>). Your template contains Tailwind components designed by <a href="https://tailkit.com">Tailkit</a>. You can find a larger selection of nicely designed components at <a href="https://tailkit.com">tailkit.com</a>. </p> </details>

<details>
<summary><b>Authentication</b></summary>
<p>
  This project uses <a href="https://supabase.com">Supabase</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.jsx">src/util/auth.tsx</a></code>) that wraps Supabase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Supabase functionality.

```js
import { useAuth } from "./../util/auth.tsx";

function MyComponent() {
  // Get the auth object in any component
  const auth = useAuth();

  // Depending on auth state show signin or signout button
  // auth.user will either be an object, null when loading, or false if signed out
  return (
    <div>
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Signout</button>
      ) : (
        <button onClick={(e) => auth.signin("hello@divjoy.com", "yolo")}>
          Signin
        </button>
      )}
    </div>
  );
}
```

</p>
</details>

<details>
<summary><b>Database</b></summary>
<p>
  This project uses <a href="https://supabase.com">Supabase</a> and includes some data fetching hooks to get you started (located in <code><a href="src/util/db.jsx">src/util/db.jsx</a></code>). You'll want to edit that file and add any additional query hooks you need for your project.

```js
import { useAuth } from './../util/auth.tsx';
import { useItemsByOwner } from './../util/db.jsx';
import ItemsList from './ItemsList.js';

function ItemsPage(){
  const auth = useAuth();

  // Fetch items by owner
  // Returned status value will be "idle" if we're waiting on
  // the uid value or "loading" if the query is executing.
  const uid = auth.user ? auth.user.uid : undefined;
  const { data: items, status } = useItemsByOwner(uid);

  // Once we have items data render ItemsList component
  return (
    <div>
      {(status === "idle" || status === "loading") ? (
        <span>One moment please</span>
      ) : (
        <ItemsList data={items}>
      )}
    </div>
  );
}
```

</p>
</details>
