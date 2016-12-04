
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import styles from './standardstyles';

const imagePath = 'https://www.jaxnode.com/images/jaxnodejs.png';

var Welcome = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/images/jaxnodejs.png')} style={{ width: 216, height: 216 }} /> 
                
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

export default Welcome;
