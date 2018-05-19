import React, {Component} from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ImagePicker } from 'expo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {

            title: '',
            description:'',
            taskNumber:'#5',
            team:'',
            dueDate:'',
            image:'https://www.downtownmission.com/wp-content/uploads/2017/04/Picture1.jpg',
            focusedTitle: false,
            focusedDescription: false,
            focusedDueDate: false,
            focusedTeam: false,
            isDateTimePickerVisible: false,
    }

}  
_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this.setState({dueDate: moment(date).format('DD MMMM YYYY')})
  this._hideDateTimePicker();
};

isFormCompleted(){
    return this.state.title != '' && this.state.description != '' && this.state.dueDate != '' && this.state.team != ''
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
                <Text style={this.isFormCompleted()? {color:'grey', fontSize:13} : {color:'tomato', fontSize:13}}> All areas must be filled-in</Text>
            </View>


            <View style={styles.inputViews}>
                <View>
                    <TextInput
                        {...this.props}
                        value={this.state.taskTitle}
                        onChangeText={(newText) => this.setState({title:newText})}
                        onFocus= {() => this.setState({focusedTitle: true})}
                        onBlur= {() => this.setState({focusedTitle:false})}
                        editable = {true}
                        keyboardAppearance={true}
                        maxLength = {40}
                        placeholder={'Title'}
                        style={this.state.focusedTitle ? styles.focusedInput: styles.singleInput}
                    />
                </View>


                <View>
                    <TextInput
                        {...this.props}
                        value={this.state.description}
                        onChangeText={(newText) => this.setState({description:newText})}
                        onFocus= {() => this.setState({focusedDescription: true})}
                        onBlur= {() => this.setState({focusedDescription:false})}
                        editable = {true}
                        maxLength = {40}
                        keyboardAppearance={true}
                        placeholder={'Description'}
                        style={this.state.focusedDescription ? styles.focusedInput: styles.singleInput}
                    />
                </View>

                

                <View>
                    <TextInput
                        {...this.props}
                        editable = {true}
                        value={this.state.team}
                        onChangeText={(newText) => this.setState({team:newText})}
                        onFocus= {() => this.setState({focusedTeam: true})}
                        onBlur= {() => this.setState({focusedTeam:false})}
                        keyboardAppearance={true}
                        maxLength = {40}
                        placeholder={'Tag users'}
                        style={this.state.focusedTeam ? styles.focusedInput: styles.singleInput}
                    />
                </View>

               
                    <TouchableHighlight underlayColor={'#F8F9F9'} style={styles.dateSelection} onPress={this._showDateTimePicker}>
                    
                        <Text style={{color:'#BFC9CA', marginTop:25,}}>
                            {this.state.dueDate==''? 'Select date': this.state.dueDate.toString()}
                        </Text>
                    
                    </TouchableHighlight>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode='date'
                        date={this.state.date}
                        
                        />
                


                <View>

                </View>

                <View style={{marginTop:40}}>
                    <TouchableOpacity disabled={this.isFormCompleted()? false: true} onPress= {() => this.addNewTask()}>
                        <Text style={this.isFormCompleted()? {color:'tomato', fontSize:20} : {color:'grey', fontSize:20}}>Save</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </View>

    )
}

isFormCompleted(){
    return this.state.title != '' && this.state.description != '' && this.state.dueDate != '' && this.state.team != ''
}

    addNewTask(){
        if (!this.isFormCompleted()){
            return
        }

        var newTask = {}
        newTask.taskTitle=this.state.title
        newTask.date=this.state.dueDate
        newTask.description=this.state.description
        newTask.urgent= false
        newTask.image=this.state.image
        newTask.userTag=this.state.team
        newTask.taskNumber=this.state.taskNumber
        this.props.close(newTask)
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
fontSize:22,
color:'#005b71',
},

inputViews:{
alignItems:'center',
padding:20,
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

dateSelection:{
margin:20,
height:60,
width:250,
backgroundColor:'transparent',
borderRadius:5,
borderBottomWidth:2,
borderColor:'#99A3A4',
margin:20,
alignItems:'center',
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