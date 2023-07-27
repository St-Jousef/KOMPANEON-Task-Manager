import React, { useState } from "react";
import { loginUser } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log("Login successful:", response);
      // Clear the form fields after successful login (optional)
      setFormData({ username: "", password: "" });
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error here
    }
  };

  return (
    <div
      className="d-flex align-items-center flex-wrap justify-content-center"
      style={{ paddingTop: "50px" }}
    >
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <img
          style={{ width: "auto" }}
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample"
        />
      </div>

      <div className="" style={{ width: "35%", margin: "0px 2px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
          <br />
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
