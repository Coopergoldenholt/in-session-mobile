// import React from 'react';
// import {Modal, View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
// import {Agenda} from 'react-native-calendars';
// import moment from 'moment';

// const ScheduleLiveStream = (props) => {
//   //   const timeToString = (time) => {
//   //     const date = new Date(time);
//   //     return date.toISOString().split('T')[0];
//   //   };

//   const displayInitials = (num) => {
//     if (num > 19) {
//       let newNum = num.toString();
//       num = newNum.slice(1);
//     }

//     switch (num.toString()) {
//       case '1':
//         return 'st';
//       case '2':
//         return 'nd';
//       case '3':
//         return 'rd';

//       default:
//         return 'th';
//     }
//   };
//   const displayMonth = (num) => {
//     switch (num) {
//       case 1:
//         return 'January';
//       case 2:
//         return 'Feburary';
//       case 3:
//         return 'March';

//       case 4:
//         return 'April';
//       case 5:
//         return 'May';
//       case 6:
//         return 'June';
//       case 7:
//         return 'July';
//       case 8:
//         return 'August';
//       case 9:
//         return 'Septemeber';
//       case 10:
//         return 'October';
//       case 11:
//         return 'Novemebr';
//       case 12:
//         return 'December';
//     }
//   };

//   const renderItem = (item) => {
//     return (
//       <TouchableOpacity
//         style={{
//           height: 65,
//           width: 300,

//           backgroundColor: '#00adf5',
//           borderRadius: 10,
//           marginLeft: 20,
//         }}>
//         <Text style={{marginLeft: 10, marginTop: 3, color: 'white'}}>
//           NickMercks
//         </Text>
//         <Text style={{marginLeft: 10, marginTop: 3, color: 'white'}}>
//           How to get better at Warzone
//         </Text>
//         <Text
//           style={{
//             marginLeft: 10,
//             marginTop: 3,
//             color: 'white',
//             marginBottom: 10,
//           }}>
//           45 minutes - 2:30 P.M.
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: '#222222'}}>
//       <View style={{flex: 1, backgroundColor: '#222222'}}>
//         <Agenda
//           // testID={testIDs.agenda.CONTAINER}
//           items={props.items}
//           loadItemsForMonth={props.loadItems}
//           selected={moment().format('L')}
//           // renderItem={renderItem}
//           renderDay={(day, item) => {
//             return (
//               <View style={{marginBottom: 30}}>
//                 {day ? (
//                   <>
//                     <Text
//                       style={{fontSize: 35, color: 'white', marginLeft: 10}}>
//                       {`${displayMonth(day.month)} ${day.day}`}
//                       <Text
//                         style={{
//                           fontSize: 25,
//                           color: 'white',
//                           marginLeft: 10,
//                         }}>
//                         {displayInitials(day.day)}
//                       </Text>
//                     </Text>
//                     {renderItem(item)}
//                   </>
//                 ) : (
//                   renderItem(item)
//                 )}
//               </View>
//             );
//           }}
//           theme={{
//             backgroundColor: '#222222',
//             calendarBackground: '#222222',
//             textSectionTitleColor: '#b6c1cd',
//             textSectionTitleDisabledColor: '#d9e1e8',
//             selectedDayBackgroundColor: '#00adf5',
//             selectedDayTextColor: '#ffffff',
//             todayTextColor: '#00adf5',
//             dayTextColor: '#2d4150',
//             textDisabledColor: '#d9e1e8',
//             dotColor: '#00adf5',
//             selectedDotColor: '#ffffff',
//             arrowColor: 'orange',
//             disabledArrowColor: '#d9e1e8',
//             monthTextColor: '#00adf5',
//             indicatorColor: 'blue',

//             textDayFontWeight: '300',
//             textMonthFontWeight: 'bold',
//             textDayHeaderFontWeight: '300',
//             textDayFontSize: 16,
//             textMonthFontSize: 16,
//             textDayHeaderFontSize: 16,
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default ScheduleLiveStream;
