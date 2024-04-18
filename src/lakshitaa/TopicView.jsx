
import React, { useState } from "react";
import LessonModal from "./LessonModal"; // Import the Modal component
import hamburger from "./assets/hamburger.svg"
import edit from "./assets/edit.svg"
import darrow from "./assets/darrow.svg"
import delete1 from "./assets/delete.svg"
import add from "./assets/add.svg"

const TopicView = ({ topicTitle, onEditTopic }) => {
  const [isLessonModalOpen, setLessonModalOpen] = useState(false);

  const handleEdit = () => {
    onEditTopic(topicTitle);
  };

  const openLessonModal = () => {
    setLessonModalOpen(true);
  };

  const closeLessonModal = () => {
    setLessonModalOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-50 rounded-xl border mt-10 w-[50svw] h-60">
        <div className="flex bg-gray-100 justify-between">
          <div className="p-4 justify-start flex items-center gap-3">
            <button>
              <img src={hamburger} className="w-6 h-6" alt="" />
            </button>
            {/* Display the dynamic topic title */}
            <h1>{topicTitle}</h1>
          </div>
          <div className="p-4 justify-end flex items-center gap-3">
            <button onClick={handleEdit}>
              <img src={edit} className="w-5 h-5" alt="" />
            </button>
            <button>
              <img src={delete1} className="w-5 h-5" alt="" />
            </button>
            <button>
              <img src={darrow} className="w-5 h-5" alt="" />
            </button>
          </div>
        </div>
        <div className="flex mt-6 gap-4 p-4">
          <button onClick={openLessonModal} className="btn text-[#21b0fe] hover:bg-gray-50   bg-white border border-[#21b0fe]">
            <img src={add} className="w-5 h-5" alt="" />
            Lesson
          </button>
          <button className="btn text-[#21b0fe] hover:bg-gray-50 bg-white border border-[#21b0fe]">
            <img src={add} className="w-5 h-5" alt="" />
            Quiz
          </button>
        </div>
      </div>
      {/* Render LessonModal and pass isOpen and onClose props */}
      <LessonModal isOpen={isLessonModalOpen} onClose={closeLessonModal} />
    </div>
  );
};

export default TopicView;
