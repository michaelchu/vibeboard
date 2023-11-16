import React from "react";
import "./../styles/global.css";
import IndexPage from "./index";
import DashboardPage from "./dashboard";
import DesignPage from "./design";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import RecentlyUpdatedPage from "./recently-updated.tsx";
import TrendingPage from "./trending.tsx";
import TopPage from "./top.tsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./404";
import Footer from "../components/Footer";
import { inject } from "@vercel/analytics";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { AuthProvider } from "../util/auth.jsx";
import { QueryClientProvider } from "../util/db";

inject();

/*
App component defines the main router and page structure.

Renders:

- QueryClientProvider for React Query
- AuthProvider for authentication
- Router with Routes for each page component
- Header and Footer components

Routes:

- / -> IndexPage
- /dashboard -> DashboardPage
- /design -> DesignPage
- /auth/:type -> AuthPage
- /trending -> TrendingPage
- /recently-updated -> RecentlyUpdatedPage
- /top -> TopPage
- /settings/:section -> SettingsPage
- 404 -> NotFoundPage

Props:

- None

Usage:

<App />

Wraps app in providers and contains all routes.
*/

function App() {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <div
            id="page-container"
            className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
          >
            {/*<Header />*/}

            <main
              id="page-content"
              className="flex flex-auto flex-col max-w-full"
            >
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/design" component={DesignPage} />
                <Route exact path="/auth/:type" component={AuthPage} />
                <Route exact path="/trending" component={TrendingPage} />
                <Route
                  exact
                  path="/recently-updated"
                  component={RecentlyUpdatedPage}
                />
                <Route exact path="/top" component={TopPage} />
                <Route
                  exact
                  path="/settings/:section"
                  component={SettingsPage}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
