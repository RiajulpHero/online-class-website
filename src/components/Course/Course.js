import React from 'react';
import './Course.css'

const Course = (props) => {
    const {title, instructor, price} = props.course;
    return (
        <div className="course">
            <p id="crs">Course</p>
            <p id="title">{title}</p>
            <p><small>Instructor: {instructor}</small></p>
            <p>${price}</p>
            <button id="enroll-btn" onClick={() => props.handleAddCourse(props.course)}>Enroll now</button>
        </div>
    );
};

export default Course;