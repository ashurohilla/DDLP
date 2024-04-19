
import React, { useState } from "react";
import MyModal from "./MyModal";
import TopicView from "./TopicView";

const ParentComponent = () => {
  const [topicTitle, setTopicTitle] = useState("");
  const [isTopicAdded, setIsTopicAdded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [initialTopicTitle, setInitialTopicTitle] = useState("");

  const handleAddTopic = (title, summary) => {
    // Logic to handle adding the topic
    setTopicTitle(title);
    setIsTopicAdded(true);
    setIsEditing(false);
    setInitialTopicTitle("");
  };

  const handleEditTopic = (title) => {
    setInitialTopicTitle(title);
    setIsEditing(true);
    setIsTopicAdded(false);
  };

  const handleResetTopic = () => {
    // Reset topic title and set topic added state to false
    setTopicTitle("");
    setIsTopicAdded(false);
  };

  return (
    <div>
      {/* Render TopicView component only if a topic is added */}
      {isTopicAdded && <TopicView topicTitle={topicTitle} onEditTopic={handleEditTopic} />}
      {/* Render Modal button only if a topic is not added */}
      {!isTopicAdded && <MyModal onAddTopic={handleAddTopic} initialTopicName={initialTopicTitle} />}
      {/* Render Reset button only if a topic is added */}
      
    </div>
  );
};

export default ParentComponent;

