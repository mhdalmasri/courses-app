import React, { Component } from "react";

export default class CourseList extends Component {
  state = {
    isEdit: false
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete
        </button>
      </li>
    );
  };

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    });
  };

  updateCourseItem = e => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={v => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <button>Update</button>
      </form>
    );
  };
  render() {
    let { isEdit } = this.state;
    return (
      <React.Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
}
