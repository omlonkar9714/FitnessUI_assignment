import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bottomButtonText: {fontSize: 20, fontWeight: 'bold', color: 'white'},
  bottomButtonView: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  slotText: {fontSize: 20},
  slotTouch: {
    width: '45%',
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  rightArrowImg: {
    height: '60%',
    transform: [{rotate: '180deg'}],
    width: '70%',
    resizeMode: 'contain',
  },
  leftArrowImg: {height: '60%', width: '70%', resizeMode: 'contain'},
  arrowLeft: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 25,
    borderWidth: 1,
  },
  calendarHeaderContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  main: {flex: 1, padding: 10},
  flatListSlots: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#f7f7f7',
  },
  slotsView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});
