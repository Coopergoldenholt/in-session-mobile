import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface IProps {
  isVisible: boolean;
  selectTime: any;
  onCancel: any;
}

const TimePicker = (props: IProps) => {
  return (
    <DateTimePickerModal
      isVisible={props.isVisible}
      mode="time"
      onConfirm={props.selectTime}
      onCancel={props.onCancel}
    />
  );
};

export default TimePicker;
