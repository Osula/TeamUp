import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FriendProfile from './FriendProfile';



export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'My projects',
      };
    render() {
        return (

    <ScrollView style={styles.screenContainer}>
        <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.albumCover} >
                    <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Biology</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Histoy</Text>
                    </View>
                </TouchableOpacity>
        </View>
        <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Math</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Art</Text>
                    </View>
                </TouchableOpacity>
        </View>

        <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Math</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Art</Text>
                    </View>
                </TouchableOpacity>
        </View>
        <View style={styles.projectContainer}>
                <TouchableOpacity style={styles.albumCover} >
                <View style={styles.titleTask}>
                        <Text style={styles.titleTaskText}>Science</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.albumCover} >
                    <View style={styles.addTaskIcon}>
                        <TouchableOpacity>
                            <Entypo   name={"circle-with-plus"} size={60} color={"tomato"}/>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
</ScrollView>




        );
    }
}


const styles = StyleSheet.create({

screenContainer:{
 backgroundColor:'#212F3C',
},

albumCover:{
    flex:1,
    height:150,
    alignItems:'center',
    backgroundColor:'#34495E',
    borderColor:'#212F3C',
    borderWidth:1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
},
titleTask:{
    position:'absolute',
    marginTop:70,
    flex:1,
    paddingTop:10,
    borderTopLeftRadius:20,
},
addTaskIcon:{
    position:'absolute',
    marginTop:50,
    height:60,
    width:160,
    alignItems:'center',
},
titleTaskText:{
    fontSize:25,
    color:'white',
},
projectContainer:{
    flexDirection:'row',

},


});