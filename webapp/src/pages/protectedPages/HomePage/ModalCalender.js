import { Button, Modal, DatePicker } from 'antd';
import { useState } from 'react';
import './Modal.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

const CalenderFunction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Button className="DoB-Modal" onClick={showModal}>
        Date Of Birth
      </Button>
      <Modal title="Select Date" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DatePicker defaultValue={selectedDate} onChange={handleDateChange} format={dateFormat} />
      </Modal>
      <div>
        <p>{selectedDate && selectedDate.format(dateFormat)}</p>
      </div>
    </>
  );
};

export default CalenderFunction;
