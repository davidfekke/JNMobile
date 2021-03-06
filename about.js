
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './standardstyles';

var About = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                About the JaxNode User Group
                </Text>
                <Text style={styles.description}>
                    The Jacksonville Node.js and Javascript User Group is for anyone interested in learning more about Node.js and JavaScript. JavaScript was originally created for scripting web browsers, but now JavaScript applications run on the server, desktop and even robots.
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                </Text>
            </View>
        );
    }
});

export default About;
