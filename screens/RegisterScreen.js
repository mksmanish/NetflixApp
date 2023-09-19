import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {netflix} from '../assets';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 100, width: 150, marginTop: 10}}
            source={netflix}
            resizeMode="contain"></Image>
        </View>
        <View style={{width: 330, marginTop: 20}}>
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            type="email"
            placeholder="Email"
            inputContainerStyle={{borderBottomWidth: 0}}
            placeholderTextColor={'white'}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: 'white',
              backgroundColor: 'gray',
            }}
          />
          <Input
            value={password}
            onChangeText={text => setPassword(text)}
            type="passord"
            placeholder="Password"
            inputContainerStyle={{borderBottomWidth: 0}}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: 'white',
              backgroundColor: 'gray',
            }}
          />
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate('Plan', {email: email, password: password})
          }
          style={
            password.length > 4
              ? {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  width: 310,
                  padding: 14,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  backgroundColor: 'red',
                }
              : {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  width: 310,
                  padding: 14,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderColor: 'white',
                  borderWidth: 2,
                }
          }>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
              color: 'white',
            }}>
            Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
