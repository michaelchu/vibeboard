import React, { useState } from "react";
import Section from "./Section";
import ReauthModal from "./ReauthModal";
import { Link } from "./../util/router";
import FormAlert from "./FormAlert";
import SettingsGeneral from "./SettingsGeneral";
import SettingsPassword from "./SettingsPassword";
import SettingsBilling from "./SettingsBilling";
import { useAuth } from "./../util/auth";

function SettingsSection(props) {
  const auth = useAuth();
  const [formAlert, setFormAlert] = useState(null);

  // State to control whether we show a re-authentication flow
  // Required by some security sensitive actions, such as changing password.
  const [reauthState, setReauthState] = useState({
    show: false,
  });

  const validSections = {
    general: true,
    password: true,
    billing: true,
  };

  const section = validSections[props.section] ? props.section : "general";

  // Handle status of type "success", "error", or "requires-recent-login"
  // We don't treat "requires-recent-login" as an error as we handle it
  // gracefully by taking the user through a re-authentication flow.
  const handleStatus = ({ type, message, callback }) => {
    if (type === "requires-recent-login") {
      // First clear any existing message
      setFormAlert(null);
      // Then update state to show re-authentication modal
      setReauthState({
        show: true,
        // Failed action to try again after reauth
        callback: callback,
      });
    } else {
      // Display message to user (type is success or error)
      setFormAlert({
        type: type,
        message: message,
      });
    }
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      {reauthState.show && (
        <ReauthModal
          callback={reauthState.callback}
          provider={auth.user.providers[0]}
          onDone={() => setReauthState({ show: false })}
        />
      )}

      <nav className="flex items-center border-b border-gray-200 max-w-md mx-auto mb-12">
        {[
          { section: "general", label: "General" },
          { section: "password", label: "Password" },
          { section: "billing", label: "Billing" },
        ].map((tab) => (
          <Link
            to={`/settings/${tab.section}`}
            className={
              "flex items-center grow justify-center px-3 md:px-4 -mb-px py-4 border-b-2" +
              (tab.section === section
                ? " text-blue-500 border-blue-500"
                : "") +
              (tab.section !== section
                ? " border-transparent hover:text-blue-500"
                : "")
            }
            key={tab.section}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      <div className="container mx-auto mt-5 max-w-md">
        {formAlert && (
          <div className="mb-4">
            <FormAlert type={formAlert.type} message={formAlert.message} />
          </div>
        )}

        {section === "general" && <SettingsGeneral onStatus={handleStatus} />}

        {section === "password" && <SettingsPassword onStatus={handleStatus} />}

        {section === "billing" && <SettingsBilling onStatus={handleStatus} />}
      </div>
    </Section>
  );
}

export default SettingsSection;
