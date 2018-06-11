import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FriendProfile from './FriendProfile';
import ViewMoreText from 'react-native-read-more-text';
import {RkButton} from 'react-native-ui-kitten';
import NewTask from './newtask';
import { CheckBox } from 'react-native-elements';
import CameraRollPicker from 'react-native-camera-roll-picker';




export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Settings'
    };

    constructor() {
        super();

        this.state = {
            viewToRender: 'Profile',
            focusedName: false,
            focusedBio: false,
            focusedAge: false,
            checkedPrivate: true,
            focusedPassword: false,
            focusedNewPassword: false,
            image:{uri: 'https://mahasiswigoblog.files.wordpress.com/2016/06/jj.jpg?w=282&h=283'},
            cover:{uri: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=334247d4893b40898bd1f74282aaada9&auto=format&fit=crop&w=750&q=80'},
            modalVisible: false,
            coverModalVisible: false,
            saveImageButtonVisible: false,
            selected: '',
            num: 0,  
        }
    }

    hideShowCheck(){
        this.setState({checkedPrivate: !this.state.checkedPrivate})
    }

    showProfile(){
        this.setState({viewToRender: 'Profile'})
    }

    showAccount() {
        this.setState({viewToRender: 'Account'})
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setCoverModalVisible(visible){
        this.setState({coverModalVisible: visible})
    }

    setButtonVisible(visible) {
        this.setState({saveImageButtonVisible: visible});
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
                <TouchableHighlight style={{height:50,backgroundColor:'black'}} onPress={() => {this.setState({modalVisible:false})}}>
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



selectedCoverModal() {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.coverModalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <TouchableHighlight style={{height:50,backgroundColor:'black'}} onPress={() => {this.setState({coverModalVisible:false})}}>
                <Text style={{color:'blue', backgroundColor:'black', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
            </TouchableHighlight>
            <CameraRollPicker
                callback={this.getSelectedImageCover.bind(this)}
                selectSingleItem={true}
                imageMargin={2}
                backgroundColor={'black'}
            />
                {this.state.num != 0? this.renderSaveButtonCover(): null}
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

renderSaveButtonCover(){
    return(
        <TouchableOpacity onPress={() => this.newCover()} style={{backgroundColor:'black', height:50}}>
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


newCover(){
    this.setState({
        cover:this.state.selected,
        coverModalVisible: false
    })
}
getSelectedImageCover(cover, current) {
    var num = cover.length;

    this.setState({
      num: num,
      selected: cover,
    });
}
    renderAccount(){
        return(
            <View>
               <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, marginTop:20, margin:10, borderBottomWidth:1, borderBottomColor:'#F8F9F9', paddingBottom:20}}>
                <Text style={{fontSize:15, color:'#2471A3', width:70}}>E-mail</Text>
                    <TextInput
                        value={'JSmith9@example.com'}
                        maxLength = {60}
                        keyboardAppearance={true}
                        onFocus= {() => this.setState({focusedName: true})}
                        onBlur= {() => this.setState({focusedName:false})}
                        placeholder={this.value}
                        style={this.state.focusedName ? styles.focusedInput: styles.singleInput}
                    />
                </View>
                <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, marginTop:20, margin:10, borderBottomWidth:1, borderBottomColor:'#F8F9F9', paddingBottom:20}}>
                    <Text style={{fontSize:15, color:'#2471A3', marginTop:20, width:70}}>Change password</Text>
                    <View>
                        <TextInput
                            value={''}
                            maxLength = {60}
                            keyboardAppearance={true}
                            onFocus= {() => this.setState({focusedPassword: true})}
                            onBlur= {() => this.setState({focusedPassword:false})}
                            placeholder={'Old password'}
                            style={this.state.focusedPassword ? styles.focusedInput: styles.singleInput}
                        />
                        <TextInput
                            value={''}
                            maxLength = {60}
                            keyboardAppearance={true}
                            onFocus= {() => this.setState({focusedNewPassword: true})}
                            onBlur= {() => this.setState({focusedNewPassword:false})}
                            placeholder={'New password'}
                            style={this.state.focusedNewPassword ? styles.passwordInputFocused: styles.passwordInput}
                        />
                    </View>
                </View>

                <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, marginTop:30, margin:10, borderBottomWidth:1, borderBottomColor:'#F8F9F9', paddingBottom:20}}>

                    <Text style={{fontSize:15, color:'#2471A3', width:70}}>Visibility</Text>

                    <CheckBox
                        center
                        title='Public'
                        onIconPress={() => this.hideShowCheck()}
                        checked={!this.state.checkedPrivate}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={'tomato'}
                        containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                    />

                    <CheckBox
                        center
                        title='Private'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                        onIconPress={() => this.hideShowCheck()}
                        checked={this.state.checkedPrivate}
                        checkedColor={'tomato'}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{fontSize:15, color:'#2471A3', marginLeft:30, marginTop:30}}>Deactivate your account</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{fontSize:15, color:'#2471A3', marginLeft:30, marginTop:20}}>Delete your account</Text>
                </TouchableOpacity>

            </View>
        )
    }


    renderProfileSettings(){
        return(
            <View>
                <View style={{paddingTop:10, paddingLeft:20, marginTop:10, flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})} style={{marginTop:10}}>
                        <Text style={{color:'#2471A3', fontSize:15, marginTop:20}}>Change avatar</Text>
                        {this.renderImageSelectedModal()}  
                    </TouchableOpacity>
                    <Image style={styles.profilepic} 
                        source={this.state.image}>
                    </Image>
                </View>
                <View style={{paddingTop:10, paddingLeft:20, paddingBottom:20,marginTop:10, flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#F8F9F9',}}>
                    <TouchableOpacity onPress={() => this.setState({coverModalVisible: true})} style={{marginTop:10}}>
                        <Text style={{color:'#2471A3', fontSize:15, marginTop:20}}>Change Cover</Text>
                        {this.selectedCoverModal()}  
                    </TouchableOpacity>
                    <Image style={styles.profilepic} 
                        source={this.state.cover}>
                    </Image>
                </View>
                <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, marginTop:20, margin:10}}>
                    <Text style={{fontSize:15, color:'#2471A3', width:60}}>Name</Text>
                    <TextInput
                        value={'Jane Smith'}
                        maxLength = {40}
                        keyboardAppearance={true}
                        onFocus= {() => this.setState({focusedName: true})}
                        onBlur= {() => this.setState({focusedName:false})}
                        placeholder={this.value}
                        style={this.state.focusedName ? styles.focusedInput: styles.singleInput}
                    />
                </View>
                <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, margin:10, marginTop:20}}>
                    <Text style={{fontSize:15, color:'#2471A3', width:60, marginTop:30}}>Bio</Text>
                    <TextInput
                        value={'The element is special relative to layout: everything inside is no longer using the flexbox layout...'}
                        maxLength = {300}
                        multiline={true}
                        keyboardAppearance={true}
                        onFocus= {() => this.setState({focusedBio: true})}
                        onBlur= {() => this.setState({focusedBio:false})}
                        placeholder={this.value}
                        style={this.state.focusedBio ? styles.focusedBio: styles.bioInput}
                    />
                </View>
                <View style={{flexDirection:'row', paddingTop:10, paddingLeft:20, margin:10, marginTop:20}}>
                    <Text style={{fontSize:15, color:'#2471A3', width:60}}>Age</Text>
                    <TextInput
                        value={'20/12/1990'}
                        maxLength = {40}
                        keyboardAppearance={true}
                        onFocus= {() => this.setState({focusedAge: true})}
                        onBlur= {() => this.setState({focusedAge:false})}
                        placeholder={this.value}
                        style={this.state.focusedAge ? styles.focusedInput: styles.singleInput}
                    />
                </View>
                
            </View>
        )
    }
    render() {
        return (
            <ScrollView style={{flex:1, backgroundColor:'white'}}>
                <View style={{backgroundColor:'white', flex:1}}>
                    <View style={{flexDirection:'row',}}>
                        <View >
                            <TouchableOpacity style={this.state.viewToRender=='Profile'? styles.activeButton : styles.nonActiveButton} onPress={this.showProfile.bind(this)}>
                                <Text style={this.state.viewToRender=='Profile'? styles.activeButtonText : styles.nonActiveButtonText} >Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={this.state.viewToRender=='Profile'? styles.nonActiveButton : styles.activeButton} onPress={this.showProfile.bind(this)}  onPress={this.showAccount.bind(this)}>
                                <Text style={this.state.viewToRender=='Profile'? styles.nonActiveButtonText : styles.activeButtonText}>Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.state.viewToRender=='Profile' ? this.renderProfileSettings() : this.renderAccount()}
                    <TouchableOpacity disabled={false}>
                        <Text style={{fontSize:20, color:'tomato', marginLeft:135, marginTop:30, marginBottom:30,}}>Save changes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        
        

        );
    }
    
}


const styles = StyleSheet.create({
profilepic:{
    width:80,
    height:80,
    borderRadius:40,
    borderColor:'white',
    borderWidth:3,
    marginLeft:50,
},
singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:25,
    padding:5,
    width:220,
    marginLeft:20,
    
},
bioInput:{
    backgroundColor:'transprearent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:60,
    padding:5,
    width:230,
    marginLeft:20,
    
},
focusedBio:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:60,
    width:220,
    marginLeft:30,
    },

focusedInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:30,
    width:230,
    marginLeft:30,
    },

passwordInput:{
    marginTop:20,
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:25,
    padding:5,
    width:220,
    marginLeft:20,
   },

passwordInputFocused:{
    marginTop:20,
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:30,
    width:190,
    marginLeft:30,
},

activeButton:{
    width:190,
    alignItems:'center',
    paddingTop:10, 
    height:45, 
    backgroundColor:'white',
    borderWidth:1, 
    shadowColor: '#EBEDEF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    borderColor:'#F8F9F9',

},
nonActiveButton:{
    width:190,
    alignItems:'center',
    paddingTop:10, 
    height:45, 
    backgroundColor:'white',
    borderWidth:1, 
    shadowColor: '#EBEDEF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor:'#F8F9F9',
},
nonActiveButtonText:{
    color:'grey',
    fontSize:15,
    fontWeight:'bold',
},

activeButtonText:{
    color:'tomato', 
    fontSize:17,
    fontWeight:'bold',
},
});