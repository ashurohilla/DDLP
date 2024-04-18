import React, { useState } from "react";

const CourseSettings = () => {
  const [maxStudents, setMaxStudents] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState("All Levels");
  const [isPublic, setIsPublic] = useState(true);
  const [enableQA, setEnableQA] = useState(false);

  const difficultyLevels = ["All Levels", "Beginner", "Intermediate", "Expert"];

  return (
    <div className="bg-gradient-to-b from-[#FFF] to-[#F9E8B0] p-8 border-solid rounded-lg shadow-md">
      <h2 className="text-black text-2xl mb-4">Course Settings</h2>

      <div className="flex flex-col mb-4">
        <div className="grid grid-cols-2">
          <label
            className="flex flex-col text-black mb-2"
            htmlFor="maxStudents"
          >
            Maximum Students
            <span className="text-sm text-gray-500 ">
              (Number of students that can enrol in this course. Set 0 for no
              limits.)
            </span>
          </label>
          <div className="flex flex-col items-center">
            <input
              className="bg-white rounded-md px-4 py-2 w-24 mr-4"
              type="number"
              id="maxStudents"
              value={maxStudents}
              onChange={(e) => setMaxStudents(e.target.value)}
            />
          </div>
          {/* <div className="bg-white rounded-md p-2">
            <button
              className="text-[#F16126] rounded-full p-2"
              onClick={() => setMaxStudents(maxStudents + 1)}
            >
              +
            </button>
            <button
              className="text-F16126 rounded-full p-2"
              onClick={() => maxStudents > 0 && setMaxStudents(maxStudents - 1)}
            >
              -
            </button>
          </div> */}
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2">
          <label className="flex text-black mb-2" htmlFor="difficultyLevel">
            Difficulty Level
          </label>
          <select
            className="bg-zinc-200 rounded-md px-4 py-2"
            id="difficultyLevel"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

    

      <div className="mb-4">
        <div className="grid grid-cols-2 items-center">
          <label className="flex flex-col text-black mb-2">
          Public Course
            <span className="text-sm text-gray-500 ">
            (Make This Course Public. No enrollment required.)
            </span>
          </label>

          <label class="switch inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              checked={isPublic}
              onChange={() => {
                setIsPublic(!isPublic);
                // setEnableQA(false);
              }}
            />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f79d7a] dark:peer-focus:ring-[#F16126] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F16126]"></div>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2 items-center">
          <label className="flex flex-col text-black mb-2">
            Q&A
            <span className="text-sm text-gray-500 ">
              (Enable Q&A section for your course)
            </span>
          </label>

          <label class="switch inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              checked={enableQA}
              onChange={() => {
                setEnableQA(!enableQA);
                // setIsPublic(false);
              }}
            />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f79d7a] dark:peer-focus:ring-[#F16126] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F16126]"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CourseSettings;
