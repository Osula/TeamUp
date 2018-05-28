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



export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Project'
    };

    constructor() {
        super();

        this.state = {
            viewToRender: 'TODO',
            modalVisible: false,

            SingleTodo: [{
                taskNumber:'#1',
                taskTitle:'Health care',
                userTag:'@Lorem',
                },
                {
                taskNumber:'#2',
                taskTitle:'Social integration',
                userTag:'@Ipsum',
                },
                {
                taskNumber:'#6',
                taskTitle:'Smoking and death rates',
                userTag:'@John',
                },
            ],

            singleClosed:[{
                taskNumber:'#3',
                taskTitle:'Health and food',
                userTag:'@Lorem',
            },
            {
                taskNumber:'#4',
                taskTitle:'Health organisation',
                userTag:'@Lorem',
            },
            {
            taskNumber:'#5',
                taskTitle:'Stress related health issues',
                userTag:'@Lorem',
            }]
        }
        
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      renderNewTask() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <NewTask close={(newTask) => this.addNewTask(newTask)}/>
        </Modal>
        )
    }

    addNewTask(newTask){
        if (newTask==undefined || newTask== null ){
            this.setState({modalVisible: false})
            return
        }

        var newTaskList = this.state.SingleTodo;

        newTaskList.push(newTask)
        this.setState({SingleTodo: newTaskList})
        this.setState({modalVisible: false})
    }


    renderClosed(element, i) {
        return (
        <View key={i}>
            <View style={styles.ToDoList}>
                <View style={styles.taskListTitle}>
                    <View>
                        <Text style={styles.closedTaskTag}>Task</Text>
                    </View>
                    <View>
                        <Text style={styles.closedTaskTag}>Closed by </Text>
                    </View>
                </View>
                {this.renderSingleCloseds(this.state.singleClosed)}
            </View>
        </View>
            );
        }

    renderSingleClosed(element, i){
        return(
            <View key={i}>
                <View style={styles.ToDoTaskList}>

                    <View style={styles.TaskDescription2}>
                        <Text style={styles.TaskNumber}>{element.taskNumber}</Text>
                        <Text style={styles.TaskDescription}>{element.taskTitle}</Text>
                    </View>
                    <View style={styles.ToDoTaskTag}>
                        <Text style={styles.TaskTag}>{element.userTag}</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderTodo(element, i) {
        return (
        <View key={i}>
            <View style={styles.ToDoList}>
                <View style={styles.taskListTitle}>
                    <View>
                        <Text style={styles.closedTaskTag}>Task</Text>
                    </View>
                    <View>
                        <Text style={styles.closedTaskTag}>Assinged to </Text>
                    </View>
                </View>

               {this.renderSingleToDos(this.state.SingleTodo)}

            </View>
        </View>
        );
    }

    renderSingleToDo(element, i){
        return(
        <View key={i}>
            <View style={styles.ToDoTaskList}>
                <View style={styles.TaskDescription2}>
                    <Text style={styles.TaskNumber}>{element.taskNumber}</Text>
                    <Text style={styles.TaskDescription}>{element.taskTitle}</Text>
                </View>
                <View style={styles.ToDoTaskTag}>
                    <Text style={styles.TaskTag}>{element.userTag}</Text>
                </View>
            </View>
        </View>

        )
    }


    renderSingleToDos(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderSingleToDo(element, i);
        })
    }

    renderSingleCloseds(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderSingleClosed(element, i);
        })
    }


    showTodo() {
        this.setState({viewToRender: 'TODO'});
    }

    showClosed() {
        this.setState({viewToRender: 'CLOSED'});
    }


    render() {
        return (

            <ScrollView >
                <View> 
                    <Image style={styles.headerContainer} source={{uri:'http://www.sagennext.com/wp-content/uploads/2013/01/DNA-Strand.jpg'}}>
                    </Image>
                </View>
                    
                <View style={styles.descriptionBoxTitle}>
                    <View style={styles.projectTitle}>
                        <Text style={styles.projectTitleStyle}>DNA and health</Text>
                    </View>
                
                    <ViewMoreText
                        numberOfLines={3}
                        onReady={this._handleTextReady}>
                        <Text>L'acido desossiribonucleico o deossiribonucleico è un acido nucleico che contiene le informazioni genetiche necessarie alla biosintesi di RNA e proteine, molecole...</Text>
            
                    </ViewMoreText>

                </View>


            <View style={styles.descriptionBox}>

                <View style={styles.teamProject}>
                    <View style={styles.teamProjectStyle}>
                        <Text style={styles.descriptionText}>Team:  </Text>
                        <Text style={styles.descriptionSubText}>3</Text>
                    </View>
                </View>

                <View style={styles.dateProject}>
                    <View style={styles.dateProjectSub}>
                        <Text style={styles.descriptionText}>Due date:</Text>
                        <Text style={styles.descriptionSubText}>20/05/2018</Text>
                    </View>
                </View>

                <View style={styles.addTask}>
                    <View style={styles.addTaskStyle}>
                        <Text style={styles.descriptionText} >Add task</Text>
                        {this.renderNewTask()}
                        <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                            <Entypo  name={"circle-with-plus"} size={20} color={"tomato"}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <View style={styles.taskOptions}>
                <TouchableOpacity onPress={this.showTodo.bind(this)} >
                    <View style={this.state.viewToRender == "TODO" ? styles.toDo : styles.toDoNotActive }>
                        <Text style={styles.toDoStyle}>To-Do</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showClosed.bind(this) } >
                    <View style={this.state.viewToRender == "TODO" ? styles.closedTask : styles.pressedStyle }>
                        <Text style={styles.toDoStyle}>Closed</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        
        {this.state.viewToRender == "TODO" ? this.renderTodo() : this.renderClosed() }

        
    </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

screenContainer:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
},

ToDoList:{
    flex:1,
    flexDirection:'column',
    padding:10,
    backgroundColor:'white',

},

ToDoTaskList:{
    flex:1,
    flexDirection:'row',
    padding:15,
    height:50,
    backgroundColor:'#F4F6F6',
    borderWidth:1,
    borderColor:'white',
    justifyContent:'space-between',

},
taskListTitle:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
},

ToDoTaskTag:{
    marginLeft:10,
},
closedTaskTag:{
    color:'#808B96',
    fontSize:14,
    fontWeight:'bold',
},

pressedStyle:{
    borderRightWidth:1,
    borderColor:'white',
    backgroundColor:'#34495E',
    width:190,
    height:50,
    paddingLeft:70,
    paddingTop:15,
},

TaskTag:{
    color:'tomato',
    fontSize:13,
    fontWeight:'bold',
},

TaskNumber:{
    color:'black',
    fontSize:13,
    fontWeight:'bold',
    marginRight:10,
},

TaskDescription:{
    color:'black',
    fontSize:13,

},
TaskDescription2:{
    flexDirection:'row',
},

taskOptions:{
    flexDirection:'row',
    height:50,
    backgroundColor:'#212F3C',
},

toDo:{
    borderRightWidth:1,
    borderColor:'white',
    backgroundColor:'#34495E',
    width:190,
    height:50,
    paddingLeft:70,
    paddingTop:15,
},
toDoNotActive:{
    borderRightWidth:1,
    borderColor:'white',
    backgroundColor:'#212F3C',
    width:190,
    height:50,
    paddingLeft:70,
    paddingTop:15,
},

closedTask:{
    borderLeftWidth:1,
    borderColor:'white',
    backgroundColor:'#212F3C',
    width:190,
    height:50,
    paddingLeft:65,
    paddingTop:15,
},

toDoStyle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
},

headerContainer:{    
    height:100,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    flex: 1, 
},

projectTitle:{
    alignItems:'center',
    marginBottom:10,
    marginTop:10,
},

projectSubTitle:{
    marginLeft:30,
    height:80,
    marginTop:10,
},

projectTitleStyle:{
    fontSize:20,
    fontWeight:'bold',
},

descriptionBoxTitle:{
    flexDirection:'column',
    padding:10,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    margin:10,
},

descriptionBox:{
    flexDirection:'row',
    padding:19,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    height:110,
},

descriptionText:{
    color:'#85929E',
    fontWeight:'bold',
    fontSize:16,
},

descriptionSubText:{
    color:'#AEB6BF',
    fontSize:13,
    
},

teamProject:{
    height:80,
    width:100,
    borderColor:'#F8F9F9',
    borderRightWidth:1,
},

teamProjectStyle:{
    height:50,
    width:80,
    alignItems:'center',
    marginTop:20,
},

dateProject:{
    height:80,
    width:130,
    padding:20,
    borderColor:'#F8F9F9',
    borderRightWidth:1,
},

dateProjectSub:{
marginLeft:10,
},

dateProjectStyle:{
    fontSize:12,
},

addTask:{
    height:80,
    width:120,
},
addTaskStyle:{
    height:50,
    width:80,
    marginLeft:20,
    alignItems:'center',
    marginTop:20,
},


});