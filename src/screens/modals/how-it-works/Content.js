import React from 'react';
import Swiper from 'react-native-swiper';
import { ImageBackground } from 'react-native';
import { View, Thumbnail, Text } from 'native-base';
import { BASE_URL } from '../../../config';

export default () => {
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '90%', width: '100%' }}>
        <Swiper
          showsButtons
          autoplay
          autoplayTimeout={2.5}
          autoplayDirection
        >
          <ImageBackground square source={{ uri: `${BASE_URL}/images/howitworks1.png` }} style={{ height: '100%', width: '100%' }} >
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 20 }}>1.Share Birth Details</Text>
            </View>
          </ImageBackground>
          <ImageBackground square source={{ uri: `${BASE_URL}/images/howitworks2.png` }} style={{ height: '100%', width: '100%' }} >
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 20 }}>2.Ask Question</Text>
            </View>
          </ImageBackground>
          <ImageBackground square source={{ uri: `${BASE_URL}/images/howitworks3.png` }} style={{ height: '100%', width: '100%' }} >
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'green', fontSize: 20 }}>3.Get Answer</Text>
            </View>
          </ImageBackground>
        </Swiper>
      </View>
    </View>
  );
};

