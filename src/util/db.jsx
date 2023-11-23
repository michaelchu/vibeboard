import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
  useQuery,
} from "react-query";
import supabase from "./supabase";

// React Query client
const client = new QueryClient();

/**** USERS ****/

// Fetch user data
// Note: This is called automatically in `auth.jsx` and data is merged into `auth.user`
export function useUser(uid) {
  // Manage data fetching with React Query: https://react-query.tanstack.com/overview
  return useQuery(
    // Unique query key: https://react-query.tanstack.com/guides/query-keys
    ["user", { uid }],
    // Query function that fetches data
    () =>
      supabase.from("users").select(`*`).eq("id", uid).single().then(handle),
    // Only call query function if we have a `uid`
    { enabled: !!uid }
  );
}

// Fetch user data (non-hook)
// Useful if you need to fetch data from outside of a component
export function getUser(uid) {
  return supabase.from("users").select().eq("id", uid).single().then(handle);
}

// Update an existing user
export async function updateUser(uid, data) {
  const response = await supabase
    .from("users")
    .update(data)
    .eq("id", uid)
    .then(handle);
  // Invalidate and refetch queries that could have old data
  await client.invalidateQueries(["user", { uid }]);
  return response;
}

/**** KEYBOARDS ****/
// Get a keyboard by user id
export function useKeyboardByUser(owner_id) {
  return useQuery(
    ["keyboard", { owner_id }],
    () =>
      supabase
        .from("keyboard_themes")
        .select(
          "id, theme_name, description, keyboard_size, keyboard_layout, platform, image_path"
        )
        .eq("owner", owner_id)
        .then(handle),
    { enabled: !!owner_id }
  );
}

// Get a keyboard by theme id
export function useKeyboardByTheme(theme_id, withColors = false) {
  return useQuery(
    ["keyboard", { theme_id }],
    () =>
      supabase
        .from("keyboard_themes")
        .select(
          `id, owner, theme_name, description, keyboard_size, keyboard_layout, platform, image_path${
            withColors
              ? ", keyboard_theme_keys ( key_id, key_label_color )"
              : ""
          }`
        )
        .eq("id", theme_id)
        .then(handle),
    { enabled: !!theme_id }
  );
}

// Fetch a paginated list of keyboard themes
export function useKeyboardPaginated(page, size = 10) {
  // const { from, to } = getPagination(page, size);
  return useQuery(["keyboards", page, size], () =>
    supabase
      .from("keyboard_themes")
      .select(
        "id, theme_name, description, keyboard_size, keyboard_layout, platform, image_path"
      )
      .then(handle)
  );
}

export async function createKeyboardTheme(themeData, keyboardData) {
  const response = await supabase
    .from("keyboard_themes")
    .upsert([themeData])
    .select()
    .then(handle);

  const { id: themeId } = response[0];
  const keyboardDataWithThemeId = keyboardData.map((kd) => ({
    ...kd,
    theme_id: themeId,
  }));

  return await supabase
    .from("keyboard_theme_keys")
    .upsert(keyboardDataWithThemeId)
    .then(handle);

  // Invalidate and refetch queries that could have old data
  // await client.invalidateQueries(["items"]);
}

/**** HELPERS ****/

// Get response data or throw error if there is one
function handle(response) {
  if (response.error) throw response.error;
  return response.data;
}

// React Query context provider that wraps our app
export function QueryClientProvider(props) {
  return (
    <QueryClientProviderBase client={client}>
      {props.children}
    </QueryClientProviderBase>
  );
}

// const getPagination = (page, size) => {
//   const limit = size ? +size : 3;
//   const from = page ? page * limit : 0;
//   const to = page ? from + size : size;
//
//   return { from, to };
// };
