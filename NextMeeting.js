
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './standardstyles';

function removeTags(input) {
    return input.replace(/<(?:.|\n)*?>/gm, '').replace(/^\s*[\r\n]/gm, '');
}

var NextMeeting = React.createClass({
    getInitialState () {
        return {
            meeting: { 
                name: '', 
                description: '',
                time: '',
                headcount: 0,
                venue: {
                    country: '',
                    localized_country_name: "USA",
                    city: 'Jacksonville',
                    address_1: 'Loading...',
                    name: 'Loading...',
                    lon: -81.531815,
                    id: 19194672,
                    state: 'FL',
                    lat: 30.246962
                    
                }
        }
        };
    },
    componentWillMount: function() {
        fetch('https://www.jaxnode.com/v1/api/meeting')
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(removeTags(json.meeting.description.trim()));
                this.setState(Object.assign({}, this.state, { meeting: json.meeting }));
            });
    },
    render: function() {
        return (
            <View style={styles.container}>
                <MapView style={{ height: 100 }}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
                <Text style={styles.welcome}>
                    {this.state.meeting.name}
                </Text>
                <Text style={styles.description}>
                    {removeTags(this.state.meeting.description)}
                </Text>
                <Text>
                    When: {this.state.meeting.time}
                </Text>
                <Text>
                    {this.state.meeting.venue.address_1}
                </Text>
                <Text>
                    {this.state.meeting.venue.city}, {this.state.meeting.venue.state}
                </Text>
                
            </View>
        );
    }
});

export default NextMeeting;
