
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var NextMeeting = React.createClass({
    getInitialState () {
        return {
            meeting: { name: 'Next Meeting' }
        };
    },
    componentWillMount: function() {
        fetch('https://www.jaxnode.com/v1/api/meeting')
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                this.setState(Object.assign({}, this.state, { meeting: json.meeting }));
            });
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.meeting.name}
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

export default NextMeeting;