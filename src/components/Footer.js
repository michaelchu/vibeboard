import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "./Section";
import { Link } from "./../util/router";
import TextField from "./TextField";
import Button from "./Button";
import newsletter from "./../util/newsletter";

function Footer(props) {
  const [subscribed, setSubscribed] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ email }) => {
    setSubscribed(true);
    // Parent component can optionally
    // find out when subscribed.
    props.onSubscribed && props.onSubscribed();
    // Subscribe them
    newsletter.subscribe({ email });
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
      className={props.sticky && "mt-auto"}
    >
      <footer className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-400">
              Product
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/pricing", name: "Pricing" },
                { url: "/faq", name: "FAQ" },
                { url: "/", name: "Features" },
                { url: "/", name: "Solutions" },
                { url: "/", name: "Resources" },
              ].map((link, index) => (
                <Link
                  to={link.url}
                  className="font-medium text-gray-600 hover:text-gray-500"
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-400">
              Company
            </h4>
            <nav className="flex flex-col space-y-3 mt-6">
              {[
                { url: "/about", name: "About" },
                { url: "/contact", name: "Contact" },
                { url: "/", name: "Blog" },
                { url: "/legal/terms-of-service", name: "Terms of Service" },
                { url: "/legal/privacy-policy", name: "Privacy Policy" },
              ].map((link, index) => (
                <Link
                  to={link.url}
                  className="font-medium text-gray-600 hover:text-gray-500"
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm uppercase font-semibold tracking-wider text-gray-400">
              Social
            </h4>
            <div className="mt-6 flex flex-row space-x-4">
              {[
                {
                  url: "https://twitter.com",
                  icon: (
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                  ),
                },
                {
                  url: "https://facebook.com",
                  icon: (
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  ),
                },
                {
                  url: "https://instagram.com",
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  ),
                },
                {
                  url: "https://github.com/",
                  icon: (
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  ),
                },
              ].map((link, index) => (
                <Link
                  to={link.url}
                  className="text-gray-400 hover:text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <svg
                    className="inline-block w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {link.icon}
                  </svg>
                </Link>
              ))}
            </div>
            <h4 className="mt-10 text-sm uppercase font-semibold tracking-wider text-gray-400">
              Join Our Newsletter
            </h4>

            {subscribed === true && (
              <div className="mt-3">You are now subscribed!</div>
            )}

            {subscribed === false && (
              <form
                className="mt-6 flex items-start space-x-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grow">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    error={errors.email}
                    size="sm"
                    inputRef={register({
                      required: "Please enter an email address",
                    })}
                  />
                </div>
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;
