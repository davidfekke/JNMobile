
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
import Icon from 'react-native-vector-icons/Ionicons';

import NextMeeting from './NextMeeting';
import Welcome from './welcome';
import About from './about';
import SponsorList from './sponsorlist';

const Router = createRouter(() => ({
  home: () => Welcome,
  about: () => About,
  meeting: () => NextMeeting,
  sponsors: () => SponsorList
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
          title="Home"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="md-home" color="#000000" />}
          >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>

        <TabItem
          id="meeting"
          title="Meeting"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="ios-people" color="#000000" />}
          >
          <StackNavigation
            id="meeting"
            initialRoute={Router.getRoute('meeting')}
          />
        </TabItem>

        <TabItem
          id="sponsors"
          title="Sponsors"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="ios-basketball" color="#000000" />}
          >
          <StackNavigation
            id="sponsors"
            initialRoute={Router.getRoute('sponsors')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="ios-alert" color="#000000" />}
          >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

      </TabNavigation>
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
});