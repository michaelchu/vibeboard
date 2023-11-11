import React from "react";
import "./../styles/global.css";
import IndexPage from "./index";
import DashboardPage from "./dashboard";
import DesignPage from "./design";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./404";
import Footer from "../components/Footer";
import Header from "../components/Header.tsx";
import Heading from "../components/Heading.tsx";
import { inject } from "@vercel/analytics";

// @ts-ignore
import { AuthProvider } from "../util/auth.jsx";
import { QueryClientProvider } from "../util/db";

inject();

function App() {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <div
            id="page-container"
            className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-black"
          >
            <Header />

            <main
              id="page-content"
              className="flex flex-auto flex-col max-w-full"
            >
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/design" component={DesignPage} />
                <Route exact path="/auth/:type" component={AuthPage} />
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
