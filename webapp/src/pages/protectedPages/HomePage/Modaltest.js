import { Button, Modal, Radio } from 'antd';
import './Modal.css';
import { useState } from 'react';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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

  return (
    <>
      <Button className='Gender-Button' onClick={showModal}>
        Gender
      </Button>
      <Modal
        title="Select Option"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Radio.Group onChange={handleRadioChange} value={selectedOption}>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Others">Others</Radio>
        </Radio.Group>
      </Modal>
      <div>
        <p>{selectedOption}</p>
      </div>
    </>
  );
};

export default App;
