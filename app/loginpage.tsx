/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 390,
            height: 844,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              display: 'flex',
              width: 350,
              height: 349,
              paddingTop: 6,
              paddingRight: 3,
              paddingBottom: 0,
              paddingLeft: 0,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'relative',
              marginTop: 119,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 14,
            }}
          >
            <View
              style={{
                width: 347,
                height: 143,
                flexShrink: 0,
                fontSize: 0,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 347,
                  height: 49,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'Roboto',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 24,
                  color: '#000000',
                  letterSpacing: 1.6,
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 2,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
              >
                Welcome to
              </Text>
              <ImageBackground
                style={{
                  width: 347,
                  height: 143,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 3,
                }}
                source={require('./assets/images/7447aee419984b626f82f577b5d403ff97f574ee.png')}
                resizeMode='cover'
              />
            </View>
            <View
              style={{
                width: 260,
                height: 260,
                flexShrink: 0,
                position: 'relative',
                zIndex: 4,
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 5,
                }}
              >
                <ImageBackground
                  style={{
                    width: 260,
                    height: 260,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    zIndex: 6,
                  }}
                  source={require('./assets/images/b7f88857-6f4a-4b98-9d8c-ec60ad952230.png')}
                  resizeMode='cover'
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 7,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 190,
                      height: 1,
                      position: 'relative',
                      zIndex: 44,
                      marginTop: 233.691,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 34,
                    }}
                    source={require('./assets/images/04478a04-600e-4740-80f3-0efd36f17b75.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 260,
                      height: 260,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      zIndex: 8,
                    }}
                    source={require('./assets/images/eb6ef52a-1661-4cb4-9502-b6d5a3e31926.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 120.609,
                      height: 77.701,
                      position: 'absolute',
                      bottom: 157.299,
                      right: 64.901,
                      zIndex: 9,
                    }}
                    source={require('./assets/images/4d3fe6b7-296e-48f0-8bc9-1488d6b80a8d.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: '60.27%',
                      height: '78.7%',
                      position: 'absolute',
                      top: '11.38%',
                      left: '17.22%',
                      zIndex: 11,
                    }}
                  >
                    <View
                      style={{
                        width: 67.681,
                        height: 107.443,
                        position: 'relative',
                        zIndex: 40,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 67.856,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 67.028,
                          height: 77.571,
                          position: 'absolute',
                          bottom: 29.871,
                          right: 0,
                          zIndex: 22,
                        }}
                        source={require('./assets/images/fc5cde98-57c8-4a0f-ac73-74581c05913f.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 43.415,
                          height: 57.133,
                          position: 'absolute',
                          bottom: 0,
                          right: 18.357,
                          zIndex: 25,
                        }}
                        source={require('./assets/images/f6a1a45d-2f54-479e-93f9-9ac6eaa522dc.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 4.316,
                          height: 1.862,
                          position: 'absolute',
                          bottom: 45.018,
                          right: 52.883,
                          zIndex: 28,
                        }}
                        source={require('./assets/images/3917fed8-7cb1-4a44-be1f-c8d486ce60c7.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 4.604,
                          height: 1.916,
                          position: 'absolute',
                          bottom: 44.764,
                          right: 38.3,
                          zIndex: 27,
                        }}
                        source={require('./assets/images/b25fdaa8-ead3-4b8e-a726-2207bf2414a4.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 14.799,
                          height: 15.136,
                          position: 'absolute',
                          bottom: 29.372,
                          right: 52.882,
                          zIndex: 23,
                        }}
                        source={require('./assets/images/67d870ba-b4e2-4f8c-bf8b-566b9d79d8ae.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 3.005,
                          height: 6.559,
                          position: 'absolute',
                          bottom: 37.393,
                          right: 46.688,
                          zIndex: 29,
                        }}
                        source={require('./assets/images/c3118f42-40ef-465d-bdf7-5498fce2de74.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 3.768,
                          height: 4.367,
                          position: 'absolute',
                          bottom: 38.493,
                          right: 52.623,
                          zIndex: 30,
                        }}
                        source={require('./assets/images/0a5deb60-f489-4915-b72f-a7c2a4e97e58.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground
                        style={{
                          width: 3.768,
                          height: 4.367,
                          position: 'absolute',
                          bottom: 38.493,
                          right: 39.141,
                          zIndex: 31,
                        }}
                        source={require('./assets/images/0ca9df4c-2392-4c88-ad1c-fd3eb829b0da.png')}
                        resizeMode='cover'
                      />
                      <ImageBackground