
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  View
} from 'react-native';

export default class SponsorList extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }
    componentWillMount() {
        fetch('https://www.jaxnode.com/v1/api/sponsors')
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                this.setState({ dataSource: this.state.dataSource.cloneWithRows(json) });
            });
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
                enableEmptySections={true}
            />
        );
    }

    _renderRow(rowData) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.wideImage} 
                    source={{ uri: 'https://www.jaxnode.com/' + rowData.imagepath}} />
                <Text style={styles.name}>{rowData.name}</Text>
                <Text style={styles.description}>{rowData.message}</Text>
            </View>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                height: adjacentRowHighlighted ? 4 : 1,
                backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
            }} />
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  wideImage: {
    top: 5,
    flex: 1,
    width: 200,
    height: 25,
    resizeMode: 'center', // or 'cover'
  },
  name: {
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
