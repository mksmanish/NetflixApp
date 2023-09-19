import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <>
      <StackNavigator />
      <StatusBar style="light" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
