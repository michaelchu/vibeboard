import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Section from "./Section";
import TextField from "./TextField";
import Button from "./Button";
import { Link } from "./../util/router";
import newsletter from "./../util/newsletter";

function NewsletterSection(props) {
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
    >
      <div className="container py-10 md:py-0">
        <div className="lg:w-2/3 xl:w-1/2 mx-auto relative">
          <div className="absolute pattern-dots text-gray-200 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
          <div className="absolute pattern-dots text-gray-200 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
          <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12" />
          <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3" />
          <div className="p-2 rounded text-center relative bg-blue-500 bg-opacity-10">
            <div className="p-8 lg:py-12 lg:px-16 bg-white rounded">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                {props.title}
              </h3>
              <p className="prose prose-indigo mb-6">{props.subtitle}</p>

              {subscribed === true && (
                <div className="mt-3 text-center">You are now subscribed!</div>
              )}

              {subscribed === false && (
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-start space-x-3">
                    <TextField
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      error={errors.email}
                      inputRef={register({
                        required: "Please enter an email address",
                      })}
                    />
                    <Button type="submit" size="lg">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 leading-6">
                    No spam ever, unsubscribe at any time.
                    <br />
                    Check out our{" "}
                    <Link
                      to="/legal/privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-400"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
