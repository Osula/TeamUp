import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import { StackNavigator } from 'react-navigation';
import album from './album';
import card from './card';
import report from './report';
import FriendProfile from './FriendProfile';
import projects from './projects';
import mytasks from './mytasks';
import singleproject from './singleproject';
import {ReadMore} from 'react-native-read-more-text';
import chats from "./chats";
import singlechat from './singlechat';
import NewTask from './newtask';
import questions from './questions';
import contacts from './contacts';
import {RkButton} from 'react-native-ui-kitten';
import searchInput from './searchInput';
import settings from './settings';
import newChat from './newChat';
import createChat from './createChat';

const HomeStack = StackNavigator(
    {
      Home: {
        screen: card,
      },
      FriendProfile: {
        screen: FriendProfile,
      },
    },
    {
      initialRouteName: 'Home',
    }
  );

  const ProfileStack = StackNavigator(
    {
      Profile:{
          screen: album,
      },
      mytasks:{
        screen: mytasks,
      },
      chats:{
        screen:chats,
      },
      singlechat:{
        screen: singlechat,
      },
      newChat:{
        screen: newChat,
      },
      createChat:{
        screen: createChat,
      },
      questions:{
        screen: questions,
      },
      contacts:{
        screen:contacts,
      },
      searchInput:{
        screen: searchInput,
      },
      settings:{
        screen:settings
      }
    },

    {
      initialRouteName: 'Profile',
    }
  );
  const ProjectStack = StackNavigator(
    {
    Projects:{
        screen: projects,
    },
  
      singleproject:{
      screen: singleproject,
    },

  }
  )



export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
    Projects:{ screen: ProjectStack},

  },
  {
    navigationOptions: ({ navigation, header }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }else if (routeName === 'Projects') {
            iconName = `ios-folder${focused ? '' : '-outline'}`;
          }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#212F3C',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);