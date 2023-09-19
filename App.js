import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigator from './StackNavigator';
import {StripeProvider} from '@stripe/stripe-react-native';
import {ProfileContext} from './screens/Context';

const App = () => {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey="pk_test_51Ns2dOSJwOwrFd1LKWnUcnOB4Snuq35c2eNNZE2bs6fdeq0fI220Eu5h59NHm4VOZDYqyHXQcPXZD9G2BJ3GE5ZG00gihX0ecg">
          <StackNavigator />
          <StatusBar style="light" />
        </StripeProvider>
      </ProfileContext>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
