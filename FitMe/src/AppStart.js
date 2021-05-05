import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MainStackNavigator from './routes/MainStackNavigator';

class AppStart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainStackNavigator></MainStackNavigator>;
  }
}

export default AppStart;
