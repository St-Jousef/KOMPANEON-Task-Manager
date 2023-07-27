import React, { useState } from "react";
import { registerUser } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log("Registration successful:", response);
      // Clear the form fields after successful registration (optional)
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error here
    }
  };

  return (
    <div
      className="d-flex align-items-center flex-wrap justify-content-center"
      style={{ paddingTop: "50px", backgroundColor: "#ADD8E6" }}
    >
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <img
          style={{ width: "auto" }}
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="phone"
        />
      </div>

      <div
        className="flex flex-row items-center justify-center lg:justify-start"
        style={{ width: "35%", margin: "0px 2px" }}
      >
        <Form method="post" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <br />
          <Button type="submit">Register</Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
