import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';
import { ActivityIndicator, ImageBackground, Animated } from 'react-native';
import { Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

// You can import from local files
import ImageLoader from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showIcon: true, pressed: false };
  }

  componentDidMount() {}

  getData() {
    fetch(
      'https://us-south.functions.cloud.ibm.com/api/v1/web/zarnigarahmad%40gmail.com_dev/space-facts/get-fact.json'
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          showIcon: false,
          facts: responseJson.payload.fact,
          url: responseJson.payload.url,
          pressed:true
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  showIcon = () => {
    if (this.state.showIcon) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://i.ibb.co/njPCz7s/logo2.png' }}
          />
        </View>
      );
    }
    return null;
  };

  handlePress = () => {
    this.getData();
  };

  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/gzbwh4p/front-page3.png' }}
        style={{ width: '100%', height: '100%' }}>
        {this.showIcon()}
        <View
          style={{
            flex: 10,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={styles.paragraph}>{this.state.facts}</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            disabled={this.state.pressed}
            onPress={this.handlePress}
            style={{
              margin: 8,
              borderRadius: 10,
            }}
            color="#fff1e6"
            title="Fact of the Day"
            type="clear"
          />
        </View>
      </ImageBackground>
    );
  }
}

// const AssetExample = () => (
//   <View style={styles.container}>
//     <ImageLoader
//       style={styles.icon}
//       source={{ uri: 'https://i.ibb.co/njPCz7s/logo2.png' }}
//     />
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'center',
    width: 700,
    height: 400,
    borderRadius: 10,
  },
  bottom: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-end',
    marginBottom: 32,
    fontSize: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 27,
    fontWeight: 'normal',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff1e6',
  },
});
