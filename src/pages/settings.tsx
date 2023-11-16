import Meta from "../components/Meta";
import SettingsSection from "../components/SettingsSection";
import { requireAuth } from "../util/auth.jsx";
import Header from "../components/Header.tsx";
import { useRouter } from "./../util/router";

/*
SettingsPage component renders the settings page.

Renders:

- Header
- Meta title
- SettingsSection component

Gets 'section' query param from router to determine settings section to display.

Passes section prop to SettingsSection.

Requires authentication via requireAuth HOC.

Props:

None

Usage:

<SettingsPage />

*/

function SettingsPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Meta title="Settings" />
      <SettingsSection
        size="md"
        bgColor="bg-gray-700"
        bgImage=""
        bgImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

export default requireAuth(SettingsPage);
