import React, {Component} from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ImagePicker } from 'expo';

export default class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            

            inputFields:[{
                placeHolder:' Task title',
                focused: false,
            },
            {
                placeHolder:' Task description',
                focused: false,
            },
            {
                placeHolder:' Project',
                focused: false,
            },
            {
                placeHolder:' Tag users',
                focused: false,
            },
        ]}  
    }

    changeStyleInput(element, isFocused){
        var elementsInState = this.state.inputFields;
        
        for (el in elementsInState){
            if (elementsInState[el].placeHolder==element.placeHolder){
                elementsInState[el].focused=isFocused;
            }
        }

        this.setState({inputFields:elementsInState})
    }

    renderSingleInput(element){
        return (
            <View>
                <TextInput
                    {...this.props}
                    editable = {true}
                    keyboardAppearance={true}
                    maxLength = {40}
                    onBlur = {() => this.changeStyleInput(element, false)}
                    onFocus={ () => this.changeStyleInput(element, true)}
                    placeholder={element.placeHolder}
                    style={element.focused ? styles.focusedInput : styles.singleInput}
                />
            </View>
        )
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
                    <Text style={styles.pageText}> Create new task </Text>
                </View>


                <View style={styles.inputViews}>
                    {this.renderInputs(this.state.inputFields)}

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


    renderInputs(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderSingleInput(element);
        })
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
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:50,
    width:250,
    margin:10,
},

focusedInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'tomato',
    height:60,
    width:300,
    margin:20,
},

inputText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    marginTop:10,
},

})