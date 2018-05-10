import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
              <View style={styles.miniMenuView}>
              <Text style={styles.QuickViewText}>All Files</Text>
      
                  <View style={styles.menuThumbNailContainer}>
                      
                      
                      <View style={styles.UploadView}>
                          <Image style={styles.menuThumbNail} 
                          source={{uri: 'http://www.iconhot.com/icon/png/file-icons-vs-2/256/png-36.png'}}
                          />
                          <Text  style={styles.Textbox}>Nome File.pff</Text>
                      </View>
                      <TouchableOpacity>
                          <Ionicons name={"md-close"} size={20} color={"blue"}/>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.menuThumbNailContainer}>
                      
                      <View style={styles.UploadView}>
                          <Image style={styles.menuThumbNail} 
                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                          />
                          <Text  style={styles.Textbox}>Nome File.altro</Text>
                      </View>
                      <TouchableOpacity>
                          <Ionicons name={"md-close"} size={20} color={"blue"}/>
                      </TouchableOpacity>
                      
                  </View>
                  <View style={styles.menuThumbNailContainer}>
                      
                          <View style={styles.UploadView}>
                              <Image style={styles.menuThumbNail} 
                              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                              />
                              <Text style={styles.Textbox}>Nome File.jpg</Text>
                          </View>
                          <TouchableOpacity>
                              <Ionicons name={"md-close"} size={20} color={"blue"}/>
                          </TouchableOpacity>
                      
                  </View>
                  <View style={styles.menuThumbNailContainer}>
                      
                      <View style={styles.UploadView}>
                          <Image style={styles.menuThumbNail} 
                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                          />
                          <Text  style={styles.Textbox} >Nome File.altro</Text>
                      </View>
                      <TouchableOpacity>
                          <Ionicons name={"md-close"} size={20} color={"blue"}/>
                      </TouchableOpacity>
                      
                  </View>
              </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}