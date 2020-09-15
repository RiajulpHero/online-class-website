import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './School.css';

const School = () => {
    const [courses, setCourses] = useState(fakeData)
    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (course) =>{
      const newCart = [...cart, course];
      setCart(newCart);
    }
    return (
        <div className="school-container">
            <div className="course-container">
              {
                  courses.map(course => <Course course={course} key={course.id} handleAddCourse={handleAddCourse}></Course>)
              }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default School;