import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import DashboardItems from "./DashboardItems";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

function DashboardSection(props) {
  const auth = useAuth();

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="flex flex-wrap">
          <div className="p-4 w-full md:w-1/2">
            <div className="rounded border border-gray-200">
              <DashboardItems />
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2">
            <div className="p-6 rounded border border-gray-200 prose prose-a:text-blue-600 max-w-none">
              <h3 className="mb-4">What is this?</h3>
              <p>
                The component on your left is an example UI that shows you how
                to fetch, display, and update a list of items that belong to the
                current authenticated user. Try it now by adding a couple items.
              </p>
              <p>
                It also shows how you can limit features based on plan. If
                you're subscribed to the "pro" or "business" plan then you'll be
                able to use the star button to highlight items, otherwise you'll
                be asked to upgrade your plan.
              </p>
              <p>
                After exporting your code, you'll want to modify this component
                to your needs. You may also find it easier to just use this
                component as a reference as you build out your custom UI.
              </p>
              <h3 className="mb-4">Extra debug info</h3>
              <div>
                You are signed in as <strong>{auth.user.email}</strong>.
              </div>

              {auth.user.stripeSubscriptionId && (
                <>
                  <div>
                    You are subscribed to the{" "}
                    <strong>{auth.user.planId} plan</strong>.
                  </div>
                  <div>
                    Your plan status is{" "}
                    <strong>{auth.user.stripeSubscriptionStatus}</strong>.
                  </div>
                </>
              )}

              <div>
                You can change your account info{` `}
                {auth.user.stripeSubscriptionId && <>and plan{` `}</>}
                in{` `}
                <Link to="/settings/general">settings</Link>.
              </div>

              {!auth.user.stripeSubscriptionId && (
                <div>
                  You can signup for a plan in{" "}
                  <Link to="/pricing">pricing</Link>.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DashboardSection;
