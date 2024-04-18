
import React, { useState } from "react";
import info from "./assets/info.svg"
import attachment from "./assets/attachment.svg"

const LessonModal = ({ isOpen, onClose }) => {
  const [lessonContent, setLessonContent] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    setLessonContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSave = () => {
    // Here you can perform any action like saving lesson content and image file
    console.log("Lesson content:", lessonContent);
    console.log("Image file:", imageFile);
    onClose(); // Close the modal after saving
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" onClick={onClose}>
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="bg-white   rounded-lg  shadow-xl transform transition-all max-w-lg w-full">
              <div className="h-[60svh] scrollbar-hide p-6 overflow-y-auto overflow-hidden">

             
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lesson Name
                </label>
                <input
                  type="text"
                  placeholder="Draft Name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <div className="flex">
                  <img
                    src={info}
                    alt=""
                    className="w-4 mt-2 h-4 inline-block mr-1"
                  />
                  <p className="text-xs mt-2 text-justify">
                    Topic titles are displayed publicly wherever required. Each
                    topic may contain one or more lessons, quiz and assignments
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lesson Content
                </label>
                <textarea
                  type="text"
                  placeholder="Draft Name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <div className="flex">
                  <img
                    src={info}
                    alt=""
                    className="w-4 mt-2 h-4 inline-block mr-1"
                  />
                  <p className="text-xs mt-2 text-justify">
                    Topic titles are displayed publicly wherever required. Each
                    topic may contain one or more lessons, quiz and assignments
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Feature Image
                </label>
                <div className="w-full bg-gray-50 h-48 rounded-lg">
                  <div className="grid grid-cols-2">
                    <div className="flex justify-center items-center mt-4">
                      {imageFile ? (
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="Uploaded"
                          className="w-40 h-40 overflow-hidden object-cover rounded-lg"
                        />
                      ) : (
                        <p className="text-gray-500 mt-10">No image selected</p>
                      )}
                    </div>
                    <div className="flex flex-col justify-center mt-8">
                      <h1 className="text-xs">Size: 1200x800</h1>
                      <h1 className="mt-2 text-xs">File Support:</h1>
                      <input
                        type="file"
                        id="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="file"
                        className="btn bg-[#21b0fe] text-white mt-2 hover:bg-[#21b0fe] w-fit  cursor-pointer"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Video Source
                </label>

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Video Playback Time
                </label>

                <div className="flex gap-4 justify-center items-center">
                  <input
                    type="text"
                    placeholder="Hours"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Minutes"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Seconds"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload exercise files to the Lesson
                </label>

                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                 
                <label
                  htmlFor="file"
                  className="btn bg-white text-[#21b0fe] border border-[#21b0fe] mt-2 hover:bg-white w-fit  cursor-pointer"
                >
                    <img
                    src={attachment}
                    alt=""
                    className="w-5  h-5 inline-block mr-1"
                  />
                  Upload Image
                </label>
              </div>
              </div>
              <div className="p-4 flex justify-around mt-6 rounded-b-xl bg-gray-100">
                <div className="flex justify-start">
                <button
                  onClick={handleSave}
                  className="btn bg-white border border-[#21b0fe] text-[#21b0fe] hover:bg-white"
                >
                  Cancel
                </button>
                </div>
                <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="rounded-lg ml-2 bg-[#0c0c0c] text-white hover:bg-[#21b0fe] "
                >
                  Update Lesson
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonModal;
