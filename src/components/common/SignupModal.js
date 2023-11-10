
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

  const textColor = theme === 'light' ? '#0D47A1' : '#000';

  return (
    <Modal  show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton >
        <Modal.Title style={{ color: textColor }}>Get Your Daily Dose of Spider-Facts!</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: textColor }}>
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
            <Form.Text className="text-muted" style={{ color: textColor }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            variant="outline-dark"
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
