import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {netflix} from '../assets';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        setLoading(false);
      }
      if (user) {
        navigation.navigate('Profile');
      }
    });
    return unsubscribe;
  }, []);

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
      console.log(userCredentials);
      const user = userCredentials.user;
      console.log(user.email);
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView>
        {loading ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
                margin: 10,
              }}>
              Loading
            </Text>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <>
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
              onPress={onSignIn}
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
                Sign In
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Register')}
              style={{
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'white',
                }}>
                New to netflix? Sign up now
              </Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
