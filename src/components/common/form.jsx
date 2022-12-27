import React, { Component } from "react";
import Input from "./input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.username.trim() === "") errors.username = "Username is required!";
    if (data.password.trim() === "") errors.password = "Password is required!";
    return Object.keys(errors).length == 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        value={data[name]}
        name={name}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
