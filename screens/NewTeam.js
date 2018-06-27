import React, {Component} from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation';
import moment from 'moment';

export default class NewTeam extends Component {
    constructor(props) {
        super(props);

    this.state = {

        team: this.props.members,
        focusedTeam: false,
    }

}  

isFormComplete() {
    return this.state.newMember != ''
}


render() {
    return (
        <ScrollView>
        <View style={styles.Container}>
            <View style={styles.closeIcon}>
                <TouchableHighlight
                    onPress={() => {this.props.close()}}>
                    <Text style={{color:'#005b71', fontSize:20, marginLeft:10}}> Cancel </Text>
                 </TouchableHighlight>
            </View>
            <View style={styles.pageTitle}>
                <Text style={styles.pageText}> Add team member</Text>
                
            </View>


            <View style={styles.inputViews}>
                
                <View>
                    <TextInput
                        {...this.props}
                        editable = {true}
                        value={this.state.team}
                        onChangeText={(newText) => this.setState({newMember: newText})}
                        onFocus= {() => this.setState({focusedTeam: true})}
                        onBlur= {() => this.setState({focusedTeam:false})}
                        keyboardAppearance={true}
                        maxLength = {40}
                        placeholder={'Add users'}
                        style={this.state.focusedTeam ? styles.focusedInput: styles.singleInput}
                    />
                </View>

                

                <View style={{marginTop:40}}>
                    <TouchableOpacity disabled={this.isFormComplete()? false: true} onPress= {() => this.addNewTeamMember()}>
                        <Text style={this.isFormComplete()? {color:'tomato', fontSize:20} : {color:'grey', fontSize:20}}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {this.renderUsersTaggedFoo(this.state.team)}

            <View style={{marginTop:20, alignSelf:'center'}}>
                    <TouchableOpacity disabled={this.isFormComplete()? true: false} onPress= {() => this.addNewTeam()}>
                        <Text style={this.isFormComplete()? {color:'grey', fontSize:20} : {color:'tomato', fontSize:20}}>Save</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </ScrollView>
    )
}

remove(el) {
    this.setState({team: this.state.team.filter(element => element != el)})
}

renderUsersTagged(element, i){
    return(
        <View style={{flexDirection:'column'}}>
                <View style={{padding:15, height:50, flexDirection:'row', justifyContent:'space-between', width:150, backgroundColor:'white', borderWidth:1, borderColor:'#90A4AE', borderRadius:10, margin:10}}>
                    <Text style={{fontSize:15, }}>{this.state.team[i]}</Text> 
                    <TouchableOpacity onPress={() => this.remove(this.state.team[i])}>
                        <Entypo name={'cross'} color={'black'} size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
    )
}
renderUsersTaggedFoo(data) {
    return data.map((element, i) => {
        console.log(element, i);
        return this.renderUsersTagged(element, i);
    })
}
isFormComplete(){
    return this.state.newMember != ''
}

    addNewTeamMember(){
        this.setState({team: [...this.state.team, this.state.newMember], newMember: ''})
    }

    addNewTeam(){
        this.props.close(this.state.team)
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
fontSize:17,
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
    fontSize:15, 
    fontWeight:'bold',
    color:'grey',
},


singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#99A3A4',
    height:50,
    width:250,
    margin:10,
    fontSize:15, 
    fontWeight:'bold',
    color:'grey',
},

})