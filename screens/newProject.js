import React, {Component} from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, DatePickerIOS, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ImagePicker } from 'expo';
import moment from 'moment';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            right: [{
                text:'Delete',
                backgroundColor: '#34495E',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                scroll:()=> {},
                onPress: () => { this.closeProject(4) },
            }],
            title: '',
            description:'',
            team:'',
            subtitle:'',
            dueDate:'',
            id:4,
            focusedTitle: false,
            focusedDescription: false,
            focusedSubtitle: false,
            focusedDueDate: false,
            focusedTeam: false,
            isDateTimePickerVisible: false,
            modalVisible: false,
            saveImageButtonVisible: false,
            selected: '',
            num: 0,       
        }

    }  
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this.setState({dueDate: moment(date).format('DD MMMM YYYY')})
      this._hideDateTimePicker();
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }


    renderImageSelectedModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'black'}} 
                        onPress={() => {this.props.close()}}>
                        <Text style={{color:'blue', backgroundColor:'black', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                     </TouchableHighlight>
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={'black'}
                />

                    {this.state.num != 0? this.renderSaveButton(): null}

            </Modal>
        )
    }


renderSaveButton(){
    return(

        <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'black', height:50}}>
            <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
        </TouchableOpacity>

    )
}

newImage(){
    this.setState({
        image:this.state.selected,
        modalVisible: false
    })
}


    getSelectedImages(image, current) {
        var num = image.length;
    
        this.setState({
          num: num,
          selected: image,
        });
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
                    <Text style={this.isFormCompleted()? {color:'blue', fontSize:13} : {color:'tomato', fontSize:13}}> All areas must be filled-in</Text>
                </View>


                <View style={styles.inputViews}>
                    <View>
                        <TextInput
                            {...this.props}
                            value={this.state.title}
                            onChangeText={(newText) => this.setState({title:newText})}
                            onFocus= {() => this.setState({focusedTitle: true})}
                            onBlur= {() => this.setState({focusedTitle:false})}
                            editable = {true}
                            keyboardAppearance={true}
                            maxLength = {40}
                            placeholder={'Title of your project'}
                            style={this.state.focusedTitle ? styles.focusedInput: styles.singleInput}
                        />
                    </View>


                    <View>
                        <TextInput
                            {...this.props}
                            value={this.state.subtitle}
                            onChangeText={(newText) => this.setState({subtitle:newText})}
                            onFocus= {() => this.setState({focusedSubtitle: true})}
                            onBlur= {() => this.setState({focusedSubtitle:false})}
                            editable = {true}
                            maxLength = {40}
                            keyboardAppearance={true}
                            placeholder={'Subtitle'}
                            style={this.state.focusedSubtitle ? styles.focusedInput: styles.singleInput}
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
                        
                        <View style={{flexDirection:'row', marginLeft:10, marginTop:10,}}>
                            
                            <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                                <View style = {{backgroundColor: '#E5E7E9', width:80, height:40, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                                    <Entypo name={'folder-images'} color={'#99A3A4'}size={18}/>
                                    <Text style={{color:'#99A3A4', fontSize:10, fontWeight:'bold', marginTop:2}}> {this.state.selected==''? 'Select image': 'Selected'} </Text>
                                    {this.renderImageSelectedModal()}          
                                </View>
                            </TouchableOpacity>

                            

                        </View>
                    </View>

                    <View style={{marginTop:40}}>
                        <TouchableOpacity disabled={this.isFormCompleted()? false: true} onPress= {() => this.saveNewProject()}>
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

    saveNewProject(){
        if (!this.isFormCompleted()){
            return
        }

        console.log("sel: " + this.state.selected);

        var newProject = {}
        newProject.name=this.state.title
        newProject.date=this.state.dueDate
        newProject.description=this.state.description
        newProject.urgent= false
        newProject.id=this.state.id
        console.log()
        newProject.image=this.state.selected[0].uri
        newProject.team=this.state.team
        newProject.right=this.state.right
        this.props.close(newProject)
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