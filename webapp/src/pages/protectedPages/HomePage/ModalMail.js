import { Button, Modal, Radio, Input, Form } from 'antd';
import { useState } from 'react';
import './Modal.css';


const ModalMail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsEmailValid(true);
  };

  const handleSubmit = () => {
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      return;
    }

    // Perform additional actions on form submission
    console.log('Email:', email);
    console.log('Selected Option:', selectedOption);

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        Email ID
      </Button>
      <Modal
        title="Select Option and Enter Email"
        visible={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Email"
            validateStatus={isEmailValid ? '' : 'error'}
            help={isEmailValid ? '' : 'Invalid email format'}
          >
            <Input value={email} onChange={handleEmailChange} placeholder="Enter email" />
          </Form.Item>
        </Form>
      </Modal>
      <div>
        <p>{email}</p>
      </div>
    </>
  );
};

export default ModalMail;
