import React from "react";
import "./../styles/global.css";
import Navbar from "../components/Navbar";
import IndexPage from "./index";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import { Switch, Route, Router } from "../util/router";
import NotFoundPage from "./404";
import Footer from "../components/Footer";
import { AuthProvider } from "../util/auth";
import { QueryClientProvider } from "../util/db";

function App() {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <body className={""}>
            <Navbar bgColor="bg-white" />

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/auth/:type" component={AuthPage} />
              <Route exact path="/settings/:section" component={SettingsPage} />
              <Route component={NotFoundPage} />
            </Switch>

            <Footer
              size="md"
              bgColor="bg-white"
              bgImage=""
              bgImageOpacity={1}
              textColor=""
              sticky={true}
            />
          </body>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
