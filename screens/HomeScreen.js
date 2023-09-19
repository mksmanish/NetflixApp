import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';

import MovieRow from '../components/MovieRow';
import MovieRows from '../components/MovieRows';
import TrendingComponent from '../components/TrendingComponent';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <Header />

      <TrendingComponent />

      <MovieRows />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
