import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="block text-white bg-[#F16126] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={openModal}
      >
        Add Topic
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-75 z-40"
            onClick={closeModal}
          ></div>
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden top-0 right-0 left-0 flex justify-center items-center"
          >
            <div className="relative p-4 w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-2xl shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Add Topic
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#">
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Topic Name
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                      <div className="flex">
                        <img
                          src="/info.svg"
                          alt=""
                          className="w-4 mt-2 h-4 inline-block mr-1"
                        />
                        <p className="text-xs mt-2 text-justify">
                          Topic titles are displayed publicly wherever required.
                          Each topic may contain one or more lessons, quiz and
                          assignments
                        </p>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Topic Summary
                      </label>
                      <textarea
                        type="text"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                      <div className="flex">
                        <img
                          src="/info.svg"
                          alt=""
                          className="w-4 mt-2 h-4 inline-block mr-1"
                        />
                        <p className="text-xs mt-2 text-justify">
                          Add a summary of short text to prepare students for
                          the activities for the topic. The text is shown on the
                          course page beside the tooltip beside the topic name.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-gray-50 gap-20 mt-5 justify-around ">
                      <button
                       onClick={closeModal}
                        className="w-fir text-blue-700 hover:text-white bg-white hover:bg-blue-800 border border-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                       Add Topic
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;