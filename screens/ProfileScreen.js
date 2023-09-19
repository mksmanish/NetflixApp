import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {arrow, netflix} from '../assets';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const profiles = [
    {
      id: '0',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU',
      name: 'Manish',
    },
    {
      id: '1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU',
      name: 'Poonam',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU',
      name: 'Anish',
    },
    {
      id: '3',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU',
      name: 'shubham',
    },
  ];

  const OnSignOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Pressable
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <Image
          style={{height: 22, width: 22, tintColor: 'white'}}
          source={arrow}
          resizeMode="contain"></Image>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: '500',
            marginLeft: 10,
          }}>
          Profiles and more
        </Text>
      </Pressable>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 100, width: 150, marginTop: 10}}
          source={netflix}
          resizeMode="contain"></Image>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{color: 'gray', fontSize: 16, fontWeight: '800'}}>
          Who's Watching ?
        </Text>
        <FlatList
          numColumns={2}
          data={profiles}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <Pressable style={{marginHorizontal: 10, padding: 20}}>
              <Image
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 8,
                  resizeMode: 'contain',
                }}
                source={{uri: item?.image}}
                resizeMode="contain"></Image>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                {item?.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <Pressable onPress={OnSignOutUser}>
        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            fontWeight: '600',
            fontSize: 20,
            marginTop: 20,
          }}>
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
