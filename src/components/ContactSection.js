import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FormAlert from "./FormAlert";
import TextField from "./TextField";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import contact from "./../util/contact";

function ContactSection(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    console.log(data);

    contact
      .submit(data)
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="relative overflow-hidden">
        <div className="pattern-dots text-gray-200 absolute top-0 left-0 w-32 h-48 md:h-96 transform translate-y-12 -translate-x-16 md:-translate-x-4" />
        <div className="pattern-dots text-gray-200 absolute bottom-0 right-0 w-32 h-48 md:h-96 transform -translate-y-12 translate-x-16 md:translate-x-6" />
        <div className="relative container xl:max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
            className="text-center"
          />
          <div className="mx-auto max-w-2xl">
            {formAlert && (
              <div className="mb-6">
                <FormAlert type={formAlert.type} message={formAlert.message} />
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <TextField
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    placeholder=""
                    error={errors.name}
                    inputRef={register()}
                  />
                </div>
                <div>
                  <TextField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder=""
                    error={errors.email}
                    inputRef={register({
                      required: "Please enter an email address",
                    })}
                  />
                </div>
              </div>
              <div>
                <TextField
                  type="textarea"
                  label="Message"
                  id="message"
                  name="message"
                  placeholder=""
                  error={errors.message}
                  rows={6}
                  inputRef={register({
                    required: "Please enter a message",
                  })}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={pending}
                isBlock={true}
                startIcon={
                  !pending && (
                    <PaperAirplaneIcon className="opacity-50 inline-block w-5 h-5" />
                  )
                }
                className="w-48"
              >
                {!pending && <>Send message</>}

                {pending && <LoadingIcon className="w-6" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
