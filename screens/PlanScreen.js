import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  check,
  nlogo,
  cellphone,
  tv,
  tablet,
  laptop,
  television,
} from '../assets';
import Plans from '../data/Plans';
import {moderateScale} from 'react-native-size-matters';

const PlanScreen = () => {
  const data = Plans;
  const TextLabel = ({label}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 6}}>
        <Image
          style={{width: 20, height: 20, tintColor: 'red'}}
          source={check}
        />
        <Text style={{marginLeft: 6, fontSize: 17, fontWeight: '500'}}>
          {label}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>
          Choose the plan that is right for you
        </Text>

        <TextLabel label={'Watch all you want Ad free'} />
        <TextLabel label={'Recommendation for just you'} />
        <TextLabel label={'Cancel your Plan anytime'} />
        <View style={{marginTop: 20}}></View>
        <ScrollView>
          {data.map((item, index) => (
            <Pressable
              style={{
                height: 160,
                borderRadius: 8,
                borderColor: 'red',
                borderWidth: 2,
                padding: 15,
                marginBottom: 30,
              }}
              key={index}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    backgroundColor: 'red',
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    {item.name}
                  </Text>
                </View>
                <Text style={{fontWeight: '600', fontSize: 18}}>
                  price: ₹{item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>
                    video Quality : {item?.videoQuality}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 2,
                    }}>
                    Resolution: {item?.resolution}
                  </Text>
                </View>
                <Image style={{height: 30, width: 30}} source={nlogo} />
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 15, fontWeight: '400'}}>
                  Devices You can watch On :
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginLeft: moderateScale(10),
                  }}>
                  {item.devices.map(dev => (
                    <Image
                      style={{width: 30, height: 30, tintColor: 'red'}}
                      source={
                        dev?.name == 'mobile'
                          ? cellphone
                          : dev?.name == 'tv'
                          ? television
                          : dev?.name == 'laptop'
                          ? laptop
                          : tablet
                      }></Image>
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({});
