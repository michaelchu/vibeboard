import React, { useState } from "react";
import Section from "./Section";
import ReauthModal from "./ReauthModal";
import { Link } from "react-router-dom";
import FormAlert from "./FormAlert";
import SettingsGeneral from "./SettingsGeneral";
import SettingsPassword from "./SettingsPassword";
import { useAuth } from "../util/auth.jsx";

interface Tab {
  section: string;
  label: string;
}

// Move tab configuration outside the component
const tabs: Tab[] = [
  { section: "general", label: "General" },
  { section: "password", label: "Password" },
];

interface Status {
  type: string;
  message: string;
  callback?: () => void;
}

interface ReauthState {
  show: boolean;
  callback?: () => void;
}

interface FormAlertState {
  type: "error" | "success";
  message: string;
}

interface SettingsSectionProps {
  size?: string;
  bgColor?: string;
  bgImage?: string;
  bgImageOpacity?: number;
  textColor?: string;
  section?: string;
}

function SettingsSection(props: SettingsSectionProps) {
  const auth = useAuth();
  const [formAlert, setFormAlert] = useState<FormAlertState | null>(null);

  const [reauthState, setReauthState] = useState<ReauthState>({
    show: false,
  });
  const validSections = {
    general: true,
    password: true,
    billing: true,
  };

  const section = validSections[props.section!] ? props.section : "general";

  const handleStatus = ({ type, message, callback }: Status) => {
    if (type === "requires-recent-login") {
      setFormAlert(null);
      setReauthState({
        show: true,
        callback: callback,
      });
    } else if (type === "error" || type === "success") {
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
        {tabs.map((tab) => (
          <TabLink
            key={tab.section}
            active={section === tab.section}
            {...tab}
          />
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
      </div>
    </Section>
  );
}

interface TabLinkProps {
  section: string;
  label: string;
  active: boolean;
}

function TabLink({ section, label, active }: TabLinkProps) {
  return (
    <Link
      to={`/settings/${section}`}
      className={
        "flex items-center grow justify-center px-3 md:px-4 -mb-px py-4 border-b-2" +
        (active
          ? " text-blue-500 border-blue-500"
          : " border-transparent hover:text-blue-500")
      }
    >
      {label}
    </Link>
  );
}

export default SettingsSection;
