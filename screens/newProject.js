import React, {Component} from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ImagePicker } from 'expo';

export default class NewProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.closeIcon}>
                    <TouchableHighlight
                        onPress={() => {this.props.close()}}>
                        <Text style={{color:'#005b71', fontSize:20, marginLeft:10}}> Cancel </Text>
                     </TouchableHighlight>
                </View>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageText}> Create new project </Text>
                </View>


                <View style={styles.inputViews}>
                    <View>
                        <TextInput
                            {...this.props}
                            editable = {true}
                            keyboardAppearance={true}
                            maxLength = {40}
                            placeholder={'Title of your project'}
                            style={styles.singleInput}
                        />
                    </View>


                    <View>
                        <TextInput
                            {...this.props}
                            editable = {true}
                            maxLength = {40}
                            keyboardAppearance={true}
                            placeholder={'Subtitle'}
                            style={styles.singleInput}
                        />
                    </View>

                    <View>
                        <TextInput
                            {...this.props}
                            editable = {true}
                            keyboardAppearance={true}
                            maxLength = {40}
                            placeholder={'Due date'}
                            style={styles.singleInput}
                        />
                    </View>

                    <View>
                        <TextInput
                            {...this.props}
                            editable = {true}
                            keyboardAppearance={true}
                            maxLength = {40}
                            placeholder={'Tag users'}
                            style={styles.singleInput}
                        />
                    </View>


                    <View>
                        
                        <View style={{flexDirection:'row', marginLeft:10, marginTop:20,}}>
                            
                            <TouchableOpacity onPress={this._pickImage}>
                                <View style = {{backgroundColor: '#E5E7E9', width:80, height:40, alignItems: 'center', 
                                    justifyContent: 'center', borderRadius: 5}}>
                                    <Entypo name={'folder-images'} color={'#99A3A4'}size={18}/>
                                    <Text style={{color:'#99A3A4', fontSize:10, fontWeight:'bold', marginTop:2}}>Select image</Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>

                    <View style={{marginTop:40}}>
                        <Button
                            title="Save"
                            color="tomato"
                            />
                    </View>
            </View>
        </View>

        )
    }
}


const styles = StyleSheet.create({


Container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'white',

},

closeIcon:{
    marginTop:40,
    marginLeft:10,
    height:30,
    
},
pageTitle:{
    marginTop:30,
    alignItems:'center',
},

pageText:{
    fontSize:20,
    color:'tomato',
},

inputViews:{
    alignItems:'center',
    padding:20,
},

singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:2,
    borderColor:'#99A3A4',
    height:50,
    width:250,
    margin:10,
},

inputText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    marginTop:10,
},

})