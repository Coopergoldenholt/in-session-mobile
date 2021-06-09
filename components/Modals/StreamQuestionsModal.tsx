import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Modal,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {MediumText, DullText, BrightText, Colors} from '../../styles';
import {URL} from '../../config/urlConfig';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TimePicker from './TimePicker';
import ImageModal from './ImageModal';
import Calendar from '../Calendar/SelectDayModal';
import {
  StripInput,
  StripButton,
  StripFileButton,
  Button,
  CloseButton,
} from '../Buttons';

interface IProps {
  closeModal: any;
  isVisible: boolean;
}

interface IStreamInfo {
  title: string;
  description: string;
  keyWords: string;
  isPrivate: boolean;
  price: string;
  thumbnail: {fileName: string | undefined; uri: string};
}

interface IStreamDate {
  month: number;
  day: number | undefined;
  year: number;
}

const StreamQuestionsModal = (props: IProps) => {
  // @ts-ignore
  const user = useSelector(state => state.user.user);
  const [streamInfo, setStreamInfo] = useState<IStreamInfo>({
    title: '',
    description: '',
    keyWords: '',
    isPrivate: false,
    price: '',
    thumbnail: {fileName: '', uri: ''},
  });
  const [streamDate, setStreamDate] = useState<IStreamDate>({
    month: 0,
    day: undefined,
    year: 0,
  });
  const [schedulingStream, setSchedulingStream] = useState(false);
  const [streamTime, setStreamTime] = useState<Date>();
  const [showImage, setShowImage] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setTimePicker] = useState(false);

  useEffect(() => {
    checkStream();
  }, [streamTime, streamDate, streamInfo]);

  const checkStream = () => {
    if (
      streamInfo.title &&
      streamInfo.description &&
      streamDate.day &&
      streamTime &&
      streamInfo.keyWords &&
      streamInfo.thumbnail.uri
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const openImagePickerAsync = async () => {
    // @ts-ignore
    await launchImageLibrary({includeBase64: true}, image => {
      setStreamInfo({
        ...streamInfo,
        thumbnail: {
          fileName: image.assets[0].fileName,
          uri: `data:image/png;base64,${image.assets[0].base64}`,
        },
      });
    });
  };

  const handleStreamChange = (text: string, type: string) => {
    setStreamInfo({...streamInfo, [type]: text});
  };

  const selectDay = (day: number, month: number, year: number) => {
    setStreamDate({month: month - 1, day, year});
    setShowCalendar(false);
  };

  const selectTime = (time: Date) => {
    setStreamTime(time);
    setTimePicker(false);
  };

  const scheduleStream = async () => {
    setSchedulingStream(true);
    // @ts-ignore
    const hours = streamTime.getHours();
    // @ts-ignore
    const minutes = streamTime.getMinutes();
    const formattedDate = new Date(
      streamDate.year,
      streamDate.month,
      streamDate.day,
      hours,
      minutes,
    );

    await axios
      .post(`${URL}/api/stream`, {
        streamTitle: streamInfo.title,
        keyWords: streamInfo.keyWords,
        streamDescription: streamInfo.description,
        price: streamInfo.price,
        privat: streamInfo.isPrivate,
        thumbnail: streamInfo.thumbnail,
        date: formattedDate,
        startStream: false,
        userId: user.userId,
      })
      .then(res => {
        setSchedulingStream(false);
        Alert.alert('Thank you for scheduling your stream!');
      })
      .catch(err => {
        setSchedulingStream(false);
        Alert.alert(
          'There was an error in scheduling your stream, check your stream information and try again.',
        );
      });
  };

  const closeModal = () => {
    props.closeModal();
    setStreamInfo({
      title: '',
      description: '',
      keyWords: '',
      isPrivate: false,
      price: '',
      thumbnail: {fileName: '', uri: ''},
    });
    setStreamDate({
      month: 0,
      day: undefined,
      year: 0,
    });
    setStreamTime(undefined);
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={{flex: 1, backgroundColor: Colors.backgroundColor, paddingTop: 45}}>
        <ScrollView>
          {/* Modals */}

          {/* Calendar Modal */}
          <Calendar
            setDate={selectDay}
            isVisible={showCalendar}
            onClose={() => setShowCalendar(false)}
          />
          {/* Time Modal */}
          <TimePicker
            isVisible={showTimePicker}
            selectTime={(time: Date) => selectTime(time)}
            onCancel={() => setTimePicker(false)}
          />
          {/* Image Modal  */}
          <ImageModal
            isVisible={showImage}
            onPress={() => setShowImage(false)}
            uri={streamInfo.thumbnail.uri}
          />

          {/* Close Button */}
          {showImage || showCalendar || showTimePicker ? null : (
            <CloseButton
              onPress={() => closeModal()}
              containerStyles={{
                zIndex: 1,
                position: 'absolute',
                right: 10,
                top: 10,
              }}
              size={35}
              color={Colors.brightColor}
            />
          )}

          {/* Title */}
          <StripInput
            keyboard="default"
            title="Title"
            placeholder="Stream Title"
            onChangeText={(text: string) => handleStreamChange(text, 'title')}
            value={streamInfo.title}
            viewStyles={{paddingTop: 10}}
          />

          {/* Description */}
          <StripInput
            keyboard="default"
            title="Description"
            placeholder="Stream Description"
            onChangeText={(text: string) =>
              handleStreamChange(text, 'description')
            }
            value={streamInfo.description}
          />

          {/* Day Selector */}
          <StripButton
            header="Schedule Date"
            onPress={() => setShowCalendar(true)}
            brightText={moment(
              new Date(streamDate.year, streamDate.month, streamDate.day),
            ).format('LL')}
            dullText="Schedule Your Day"
            displayBrightText={streamDate.day !== undefined}
          />

          {/* Schedule Time */}
          <StripButton
            header="Schedule Time"
            onPress={() => setTimePicker(true)}
            brightText={moment(streamTime).format('LT')}
            dullText="Schedule Your Time"
            displayBrightText={streamTime !== undefined}
          />

          {/* Key Words */}
          <StripInput
            keyboard="default"
            title="Key Words"
            placeholder="Choose Key Words"
            onChangeText={(text: string) =>
              handleStreamChange(text, 'keyWords')
            }
            value={streamInfo.keyWords}
          />

          {/* Private Switch */}
          <View style={styles.lineContainer}>
            <MediumText style={styles.text}>Private?</MediumText>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={streamInfo.isPrivate ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setStreamInfo({...streamInfo, isPrivate: !streamInfo.isPrivate})
              }
              value={streamInfo.isPrivate}
            />
          </View>
          {streamInfo.isPrivate ? (
            <View>
              {streamInfo.price ? (
                <DullText
                  style={{
                    position: 'absolute',
                    top: 42,
                    left: 5,
                    fontSize: 20,
                  }}>
                  $
                </DullText>
              ) : null}
              <StripInput
                title="Price"
                keyboard="numeric"
                placeholder="Set Your Price"
                onChangeText={(text: string) =>
                  handleStreamChange(text, 'price')
                }
                value={streamInfo.price}
              />
            </View>
          ) : null}

          {/* Thumbnail */}
          <StripFileButton
            header="Thumbnail"
            displayBrightText={streamInfo.thumbnail.fileName !== ''}
            brightText={streamInfo.thumbnail.fileName}
            iconType="paperclip"
            onMainButtonPress={
              streamInfo.thumbnail.fileName
                ? () => setShowImage(true)
                : () => openImagePickerAsync()
            }
            onClosePress={() =>
              setStreamInfo({
                ...streamInfo,
                thumbnail: {fileName: '', uri: ''},
              })
            }
          />

          <View
            style={{alignItems: 'center', marginTop: 30, paddingBottom: 45}}>
            <Button
              loading={schedulingStream}
              text="Schedule Stream"
              disabled={buttonDisabled}
              buttonStyles={{width: 200, height: 45}}
              onPress={() => scheduleStream()}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: Colors.borderColor,
    borderTopColor: Colors.borderColor,
    borderBottomWidth: 0.5,
    minHeight: 80,
  },
  text: {fontSize: 20, marginLeft: 20, marginRight: 20},
});

export default StreamQuestionsModal;
