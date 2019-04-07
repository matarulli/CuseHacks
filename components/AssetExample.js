import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

//import * as React from 'react';
//export default class AssetExample extends React.Component {
// render() {
// return (

export default class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onload = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onload={this.onload}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}



const styles = StyleSheet.create({

});
