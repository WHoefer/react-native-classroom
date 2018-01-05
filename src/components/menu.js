import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

export const Menu = (props) => {
    return (
      <View style={{flex: 1}} >
      	<View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'red', height: 40}} >
          <TouchableHighlight
            onPress={props.onPressBack}
            underlayColor='white'
            activeOpacity={1}
          >
            <Text style={{padding: 10, color: 'white'}}>zurück</Text>
          </TouchableHighlight>
          <Text style={{padding: 10, color: 'white'}}>Yoga</Text>
          <TouchableHighlight
            onPress={props.onPressDownload}
            underlayColor='white'
            activeOpacity={1}
          >
            <Text style={{padding: 10, color: 'white'}}>download</Text>
          </TouchableHighlight>
        </View>
        {props.children}
      </View>
    );
}
