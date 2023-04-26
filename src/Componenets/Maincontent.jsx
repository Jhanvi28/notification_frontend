import React from "react";
import Email from "../Image/Email.jpg";

function Maincontent() {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                <b>Notification Microservice</b>
              </h1>
              <div class="flex mb-4">
                <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  <b>Description</b>
                </a>
              </div>
              <p class="leading-relaxed mb-4" style={{ textAlign: "justify" }}>
                A notification microservice can handle notifications from
                variety of sources such as Email, SMS and many more. This
                microservice can provide personalized notifications based on the
                user preferences. The service exposes the rest endpoints that
                allows the users to send notifications.
                <br />
                <br />
                We are sending notification throgh below meduim
              </p>

              <div class="flex border-t border-gray-500 py-2">
                <b>
                  <span class="text-gray-500">Email</span>
                </b>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <b>
                  <span class="text-gray-500">SMS</span>
                </b>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <b>
                  <span class="text-gray-500">Push Notification</span>
                </b>
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Email}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maincontent;
