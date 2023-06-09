import { Button, Modal, Radio, Input, Form } from 'antd';
import { useState } from 'react';
import './Modal.css';

const ModalNumber = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

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

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    setIsPhoneNumberValid(true);
  };

  const handleSubmit = () => {
    const phoneNumberRegex = /^\d{10}$/;

    if (!phoneNumberRegex.test(phoneNumber)) {
      setIsPhoneNumberValid(false);
      return;
    }

    // Perform additional actions on form submission
    console.log('Phone Number:', phoneNumber);
    console.log('Selected Option:', selectedOption);

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        Phone Number
      </Button>
      <Modal
        title="Select Option and Enter Phone Number"
        visible={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Phone Number"
            validateStatus={isPhoneNumberValid ? '' : 'error'}
            help={isPhoneNumberValid ? '' : 'Invalid phone number format'}
          >
            <Input
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
            />
          </Form.Item>
          
        </Form>
      </Modal>
      <div>
        <p>{phoneNumber}</p>
      </div>
    </>
  );
};

export default ModalNumber;
