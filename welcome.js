
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imagePath = 'https://www.jaxnode.com/images/jaxnodejs.png';

var Welcome = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Image source={{uri: imagePath }} 
                style={{ width: 216, height: 216 }}/>
                <Text style={styles.welcome}>
                Welcome to JaxNode Mobile!
                </Text>
                <Text style={styles.description}>
                    Use this app to find out when the next meeting will be, get directions, find links to our sponsors and github code.
                </Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  description: {
      fontSize: 15,
      textAlign: 'center',
      margin: 10
  }
});

export default Welcome;