import React from 'react';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
// @ts-ignore
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../styles';

import Icon from '../Icons';
import {IconButton} from '../Buttons';

interface IProps {
  maxDate?: Date;
  minDate?: Date;
  setDate: any;
  onClose: any;
  isVisible: boolean;
}

interface IDate {
  day: number;
  month: number;
  year: number;
}

const Calender = (props: IProps) => {
  const onPress = (date: IDate) => {
    props.setDate(date.day, date.month, date.year);
  };
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={props.isVisible}>
        <View style={styles.container}>
          <IconButton
            onPress={props.onClose}
            iconType="close"
            color={Colors.mediumColor}
            size={40}
            containerStyles={styles.closeButton}
          />
          <Calendar
            maxDate={props.maxDate ? props.maxDate : undefined}
            minDate={props.minDate ? props.minDate : undefined}
            onDayPress={onPress}
            //   markedDates={this.state.markedDates}
            markingType={'period'}
            //   current={this.props.focusCalendarDate}
            hideExtraDays
            //   theme={{
            //     calendarBackground: Colors.primaryBackground,
            //     dayTextColor: Colors.primaryText,
            //     arrowColor: Colors.green,
            //     monthTextColor: Colors.primaryText,
            //     todayTextColor: Colors.green,
            //   }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.8)',
    flex: 1,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 8,
  },
});

export default Calender;
