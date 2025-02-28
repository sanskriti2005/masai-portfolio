import { Button, Heading, Input, Textarea, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const initFormData = { email: "", message: "" };
  const [formData, setFormData] = useState(initFormData);
  const [msg, setMsg] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const res = await axios.post(
        "https://getform.io/f/bpjnpveb",
        formDataToSend
      );

      if (res.status === 200) {
        setFormData(initFormData);
        setMsg("Email Sent!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMsg("Failed to send message.");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      width={{
        base: "90%",
        sm: "90%",
        md: "45%",
        lg: "45%",
        "2xl": "45%",
      }}
      padding="1rem"
    >
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%", 
        }}
      >
        <Heading color={"gray.400"}>Reach out to me</Heading>
        {msg && <p>{msg}</p>}
        <Input
          type="email"
          placeholder="Enter your Email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
        <Textarea
          cols={33}
          rows={10}
          placeholder="Enter your message"
          value={formData.message}
          name="message"
          onChange={handleInput}
        />
        <Button type="submit">Send</Button>
      </form>
    </Box>
  );
};

export default ContactForm;
