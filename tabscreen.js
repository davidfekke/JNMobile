
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Colors from './Colors';
import Icon from 'react-native-vector-icons/Ionicons';

import NextMeeting from './NextMeeting';
import Welcome from './welcome';
import About from './about';
import SponsorList from './sponsorlist';
import MeetingMap from './MeetingMap';

const Router = createRouter(() => ({
  home: () => Welcome,
  about: () => About,
  meeting: () => NextMeeting,
  sponsors: () => SponsorList,
  map: () => MeetingMap
}));

export default class TabScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          id="home"
          
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected)  => this._renderIcon('Home', 'md-home', isSelected)}
          >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>

        <TabItem
          id="meeting"
          
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => this._renderIcon('Meeting', 'ios-people', isSelected)}
          >
          <StackNavigation
            id="meeting"
            initialRoute={Router.getRoute('meeting')}
          />
        </TabItem>

        <TabItem
          id="sponsors"
          
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => this._renderIcon('Sponsors', 'ios-basketball', isSelected)}
          >
          <StackNavigation
            id="sponsors"
            initialRoute={Router.getRoute('sponsors')}
          />
        </TabItem>

        <TabItem
          id="about"
          
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => this._renderIcon('About', 'ios-alert', isSelected)}
          >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

      </TabNavigation>
    );
  }

  _renderIcon(title, iconName, isSelected) {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
      <View style={styles.tabItemContainer}>
        <Icon name={iconName} size={32} color={color} />

        <Text style={[styles.tabTitleText, {color}]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 11,
  }
});
