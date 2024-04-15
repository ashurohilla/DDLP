import React, { useState } from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";
import { db, storage } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CourseAdd = () => {
  const [courseName, setCourseName] = useState('');
  const [tutorName, setTutorName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [maxStudent, setMaxStudent] = useState('');
  const [whatuLearn, setWhatuLearn] = useState('');
  const [materialInclue, setMaterialInclue] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleNewCourse = async (courseName, tutorName, courseDesc, maxStudent, whatuLearn, materialInclue, courseDuration, thumbnailFile) => {
    try {
      // Generate a unique file name for the thumbnail
      const timestamp = new Date().getTime();
      const uniqueFileName = `${thumbnailFile.name}_${timestamp}`;
  
      // Upload the thumbnail file to Firebase Storage
      const thumbnailRef = ref(storage, `thumbnails/${uniqueFileName}`);
      const uploadTask = uploadBytesResumable(thumbnailRef, thumbnailFile);
  
      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          console.error('Error uploading thumbnail:', error);
        },
        async () => {
          const thumbnailUrl = await getDownloadURL(uploadTask.snapshot.ref);
  
          // Add the course data to Firestore, including the thumbnail URL
          const courseRef = collection(db, 'courses');
          await addDoc(courseRef, {
            courseName,
            tutorName,
            courseDesc,
            maxStudent,
            whatuLearn,
            materialInclue,
            courseDuration,
            thumbnailUrl,
          });
  
          // Clear the input fields after successful submission
          setCourseName('');
          setTutorName('');
          setCourseDesc('');
          setMaxStudent('');
          setWhatuLearn('');
          setMaterialInclue('');
          setCourseDuration('');
          setThumbnailFile(null);
          console.log('Course added successfully!');
        }
      );
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    if (courseName.trim() === '' || courseDesc.trim() === '' || !thumbnailFile) {
      console.log('Please fill in all fields and upload a thumbnail.');
      return;
    }

    handleNewCourse(
      courseName,
      tutorName,
      courseDesc,
      maxStudent,
      whatuLearn,
      materialInclue,
      courseDuration,
      thumbnailFile
    );
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full md:w-1/2 px-4">
        <div className="mb-4 text-align:center">
          <h1>Add Course</h1>
        </div>
        <div className="mb-4">
          <Input
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Tutor Name"
            value={tutorName}
            onChange={(e) => setTutorName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Textarea
            label="Course Description"
            value={courseDesc}
            onChange={(e) => setCourseDesc(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-4">
            <Input
              label="Max Students"
              value={maxStudent}
              onChange={(e) => setMaxStudent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textarea
              label="What Will I Learn?"
              value={whatuLearn}
              onChange={(e) => setWhatuLearn(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textarea
              label="Materials Included"
              value={materialInclue}
              onChange={(e) => setMaterialInclue(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Total Course Duration"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              type="file"
              label="Course Thumbnail"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
            />
          </div>
          <div className="mb-4" type="submit" onClick={Submit}>
            <Button variant="filled">Add Course</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;