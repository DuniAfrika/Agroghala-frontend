import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <Link to="/">
          <h1 className="py-2 text-success">AGROGHALA</h1>
        </Link>
        <legend className="pb-2 border-bottom">Feedback Form</legend>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
      w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
      dark:focus:border-blue-500 "
          placeholder="example@agroghala.com"
        />
        <label
          htmlFor="message"
          className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Your feedback
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Leave a comment..."
        ></textarea>
        <button
          type="button"
          class="my-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Send Feedback
        </button>
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          We’ll never share your details. Read our{" "}
          <p
            
            className="font-medium text-green-600 hover:underline dark:text-green-500"
          >
            Privacy Policy
          </p>
          .
        </p>
      </div>
    </div>
  );
}

export default Contacts;
