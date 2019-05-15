import React from "react";

export default function CourseForm(props) {
  return (
    <div>
      <form onSubmit={props.addCourse}>
        <input
          type="text"
          onChange={props.updateCourse}
          value={props.current}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
