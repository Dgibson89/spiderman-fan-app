
import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ThemeContext from "../../utils/ThemeContext";

function SignupModal({ showModal, closeModal }) {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the email
    console.log(email);
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Get Your Daily Dose of Spider-Facts!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="emailSignup">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            type="submit"
          >
            Subscribe
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
