import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Calendar} from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';
import {AppImages} from '../../assets/AppImages';

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
    this.state = {};
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
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              width: 30,
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
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              width: 30,
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

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <Calendar
          ref={ref => {
            this.calender = ref;
          }}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            // console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          //   renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={0}
          // Hide day names. Default = false
          hideDayNames={false}
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
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00b3b3',
            selectedDayTextColor: '#f50',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
