import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import CalendarOld from 'react-native-calendar';
import {Calendar} from 'react-native-calendars';
import {AppImages} from '../../assets/AppImages';
import {Slots} from '../../model/Slots';
import {LocaleConfig} from 'react-native-calendars';
import {
  dayNames,
  dayNamesShort,
  formatAccessibilityLabel,
  monthNames,
  monthNamesShort,
} from '../../constants/CalendarConfig';
import {styles} from './HomeScreenStyles';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: formatAccessibilityLabel,
  monthNames: monthNames,
  monthNamesShort: monthNamesShort,
  dayNames: dayNames,
  dayNamesShort: dayNamesShort,
};
LocaleConfig.defaultLocale = 'en';

class Home1 extends Component {
  constructor(props) {
    super(props);
    this.state = {slots: Slots};
  }

  CalendarHeader = date => {
    return (
      <View style={styles.calendarHeaderContainer}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.arrowLeft}>
            <Image style={styles.leftArrowImg} source={AppImages.back}></Image>
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold'}}>
          {date.toString()}
        </Text>
        <TouchableOpacity>
          <View style={styles.arrowLeft}>
            <Image style={styles.rightArrowImg} source={AppImages.back}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Home2');
        }}>
        <View style={styles.bottomButtonView}>
          <Text style={styles.bottomButtonText}>Mark Day Off</Text>
        </View>
      </TouchableOpacity>
    );
  };

  onSlotPress = item => {
    let oldData = this.state.slots;
    for (let i = 0; i < oldData.length; i++) {
      if (oldData[i].time == item.time) {
        oldData[i].marked = !oldData[i].marked;
      }
    }
    this.setState({slots: oldData});
  };

  renderSlots = () => {
    return (
      <FlatList
        style={styles.flatListSlots}
        numColumns={2}
        data={this.state.slots}
        keyExtractor={item => item.time}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              this.onSlotPress(item);
            }}
            style={styles.slotTouch}>
            <View
              style={[
                styles.slotsView,
                {backgroundColor: item.marked ? '#ccc' : 'white'},
              ]}>
              <Text style={styles.slotText}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}></FlatList>
    );
  };

  renderWixCalendar = () => {
    return (
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        hideArrows={true}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={date => {
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
      <View style={styles.main}>
        {this.renderWixCalendar()}
        {this.renderSlots()}
        {this.renderButton()}
      </View>
    );
  }
}

export default Home1;
