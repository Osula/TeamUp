import React, { Component } from 'react';
import { StyleSheet, video,ListView, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import SearchBar from 'react-native-searchbar';
import FriendProfile from './FriendProfile';

const items = [
  
];

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }
  
  

  render(element, i) {
    return (
      <View style={{backgroundColor:'white', flex:1}}>
        <View style={{ marginTop: 40, padding:20, backgroundColor:'transparent' }}>
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableOpacity>
                  <View  style={styles.headerContainer}>
                    <View style={styles.profilePic}>
                        <Image style={styles.roundPic} source={{uri:result.image}}></Image>
                    </View>
                    <View style={styles.profileTime}>
                      <View>
                          <View style={styles.profileText}>
                              <View style={{flexDirection:'row'}}>
                                  <TouchableOpacity>
                                      <View>
                                          <Text style={styles.users}>{result.user}</Text>
                                      </View>
                                  </TouchableOpacity>
                                  <Text style={{fontSize:13, color:'grey', marginTop:4, marginLeft:5}}>({result.userName})</Text>
                              </View>
                          </View>
                          <View>
                              <View style={styles.messages}>
                                  <Text style={styles.messageStyle}>{result.bio}</Text>
                              </View>
                          </View>
                      </View>
                    </View>
                    {typeof result === 'object' && !(result instanceof Array) ? result.user && result.userName: result.toString()}
                  </View>
                </TouchableOpacity>
              );
            })
          }
        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.state.items}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  headerContainer:{    
    flexDirection: 'row',
    backgroundColor:'white',
    borderBottomWidth:2,
    borderColor:'#F2F3F4',
    flex:1,
    marginTop:10,
    marginBottom:10,
    },
    
  newHeaderContainer:{    
      flexDirection: 'row',
      backgroundColor:'white',
      borderBottomWidth:1,
      borderColor:'#F2F3F4',
      flex:1,
      },
  
  
  addChat:{   
      backgroundColor:'transparent',
      marginBottom:10,
      marginRight:10,
      marginTop:10,
      flexDirection:'row',
      justifyContent:'flex-end',
    },
      
  profilePic:{
      width:80,
      height:80,
      flexDirection:'row',
      backgroundColor:'transparent',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      },
  
  profileTime:{
      flexDirection:'column',
      marginTop:20,
      flex:1,
  },
  
  roundPic:{
      width:50,
      height:50,
      borderRadius:25,
      position:'absolute',
      marginLeft:10,
      marginTop:10,
  },
  
  profileText:{
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  
  users:{
      fontSize:18,
      fontWeight:'bold',
      color:'black',
  },
  messageStyle:{
      fontSize:12,
      color:'#566573',
  },
  timeView:{
      marginRight:10,
  
  },
  
  messages:{
      marginTop:5,
  },
  
  
  timeStyle:{
      color:'#566573',
      fontSize:14,
  },
  
  });