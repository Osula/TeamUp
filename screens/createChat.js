import React from 'react';
import { StyleSheet, video,ListView, Modal, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import {EvilIcons} from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {StackNavigator} from 'react-navigation';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
import { SearchBar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import SearchInput from './searchInput';
import { CheckBox } from 'react-native-elements';
import CameraRollPicker from 'react-native-camera-roll-picker';


const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Create group chat',
      };
    constructor() {

        super();

        this.state = {
            name:'',
            image:{uri: ''},
            num:0,
            modalVisible:false,
        }}
            

createGroupButton(){
    return(
        <View style={{height:40, flex:1, alignItems:'center', padding:10, borderBottomWidth:1, marginTop: 30, borderColor:'#F2F4F4'}}>
            <TouchableOpacity onPress={() => this.newImage()}>
                <Text style={{fontSize:20, marginLeft:15, color:'tomato'}}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}

renderSaveButton(){
    return(
        <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'black', height:50}}>
            <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
        </TouchableOpacity>
    )
}



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


    renderGroupData(){
        return(
            <View style={{shadowColor: '#ABB2B9',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 2,elevation: 1,backgroundColor:'white', height:400, margin:30, width:320,}}>
                <View style={{marginTop:30, marginLeft:10, alignItems:'center'}}>
                    <Text style={{fontSize:20, color:'#1F618D'}}>Group Name</Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={(newText) => this.setState({name:newText})}
                        maxLength = {40}
                        keyboardAppearance={true}
                        placeholder={'....'}
                        style={styles.singleInput}
                    />
                </View>
                <View style={{marginTop:30, marginLeft:20, alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})} >
                        <Text style={{fontSize:20, color:'#1F618D', marginBottom:20}}>Select image</Text>
                    </TouchableOpacity>
                    {this.renderImageSelectedModal()}
                    <View style={{backgroundColor:'#F2F4F4', width:80, height:80, alignItems:'center', borderRadius:30, paddingTop:13}}>
                        <Entypo name={'camera'} size={50} color={'white'}/>
                        <Image style={{ marginTop:-70, width:85, height:85, alignItems:'center', borderRadius:40,}} 
                            source={this.state.image}>
                        </Image>         
                    </View>
                </View>
                {this.state.num != 0 && this.state.name !=''? this.createGroupButton(): null}
            </View>
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
        
    <View style={{backgroundColor:'#F8F9F9', flex:1}}>
        {this.renderGroupData()}
    </View>
            );
        }
    }

    const styles = StyleSheet.create({

singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#EBEDEF',
    height:50,
    padding:5,
    width:250,
    marginBottom:30,
    fontSize:18,
    color: '#212F3D',
    
},

});