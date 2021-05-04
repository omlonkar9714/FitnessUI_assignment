import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, FlatList} from 'react-native';

import CalendarOld from 'react-native-calendar';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {AppImages} from '../../assets/AppImages';
import {Slots} from '../../model/Slots';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

LocaleConfig.defaultLocale = 'en';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {slots: Slots};
  }

  CalendarHeader = date => {
    return (
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              width: 25,
              borderWidth: 1,
            }}>
            <Image
              style={{height: '60%', width: '70%', resizeMode: 'contain'}}
              source={AppImages.back}></Image>
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold'}}>
          {date.toString()}
        </Text>
        <TouchableOpacity>
          <View
            style={{
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              width: 25,
              borderWidth: 1,
            }}>
            <Image
              style={{
                height: '60%',
                transform: [{rotate: '180deg'}],
                width: '70%',
                resizeMode: 'contain',
              }}
              source={AppImages.back}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderButton = () => {
    return (
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Mark Day Off
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSlots = () => {
    return (
      <FlatList
        style={{width: '100%', alignSelf: 'center', backgroundColor: '#f7f7f7'}}
        numColumns={2}
        data={this.state.slots}
        keyExtractor={item => item.time}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              let oldData = this.state.slots;
              for (let i = 0; i < oldData.length; i++) {
                if (oldData[i].time == item.time) {
                  oldData[i].marked = !oldData[i].marked;
                }
              }
              this.setState({slots: oldData});
            }}
            style={{
              width: '45%',
              marginHorizontal: '2%',
              marginVertical: '2%',
            }}>
            <View
              style={{
                width: '100%',

                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item.marked ? '#ccc' : 'white',
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 20}}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}></FlatList>
    );
  };

  renderWixCalendar = () => {
    return (
      <Calendar
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={direction => <Arrow />}
        // Do not show days of other months in month page. Default = false
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        // hideDayNames={true}
        // Show week numbers to the left. Default = false
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter.
        renderHeader={date => {
          // console.log(date.toDateString());
          // console.log(date.toISOString());
          // console.log(date.toLocaleDateString());
          // console.log(date.toUTCString().slice(8, 16));
          return this.CalendarHeader(date.toUTCString().slice(8, 16));
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    );
  };

  renderCalendar = () => {
    return (
      <CalendarOld
        weekStart={0}
        dayHeadings={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
        onDateSelect={date => {
          console.log('Pressed date : ', date.slice(0, 10));
        }}
        showControls={true}
        prevButtonText={'Prev'}
        nextButtonText={'Next'}
        customStyle={{
          dayButtonFiller: {
            backgroundColor: 'white',
          },
          calendarHeading: {
            backgroundColor: 'white',
            borderColor: 'transparent',
          },
          weekRow: {
            backgroundColor: 'white',
          },
          weekendDayButton: {
            backgroundColor: 'white',
          },
          weekendDayText: {
            color: 'black',
          },
          weekendHeading: {
            color: 'black',
          },
          selectedDayCircle: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'green',
          },
          selectedDayText: {
            color: 'black',
          },
          currentDayText: {
            color: '#00adf5',
          },
          currentDayCircle: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'green',
          },
          calendarContainer: {marginBottom: 10},
          day: {fontSize: 15, color: 'black', textAlign: 'center'},
        }}></CalendarOld>
    );
  };

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        {this.renderCalendar()}
        {this.renderWixCalendar()}
        {this.renderSlots()}
        {this.renderButton()}
      </View>
    );
  }
}

export default HomeScreen;
