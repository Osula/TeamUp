import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FriendProfile from './FriendProfile';
import {RkButton} from 'react-native-ui-kitten';
import ViewMoreText from 'react-native-read-more-text';
import Swipeout from 'react-native-swipeout';
import { MenuProvider,  Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';




export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'My tasks'
    };

    constructor() {
        super();

        this.state = {
            
            
                allowVerticalScroll: true,

            tasks : [{
                    status:true,
                    id:1,
                    Title:"Cold war",
                    project:"History",
                    dueDate:'20 May 2018',
                    description: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                    right: [{
                        text:'Delete',
                        backgroundColor: '#34495E',
                        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                        scroll:()=> {},
                        onPress: () => { this.closeTask(1) },
                    }]
                },
                {   status:true,
                    text:'Delete',
                    id:2,
                    dueDate:'',
                    Title:"Hidrology ",
                    dueDate:'20 May 2018',
                    project:"Geography",
                    description: "The biological and geological future of Earth can be extrapolated based upon the estimated effects of several long-term influences. These include the chemistry at Earth's surface, the rate of cooling of the planet's interior, the gravitational interactions",
                    right: [{
                        text:'Delete',
                        backgroundColor: '#34495E',
                        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                        scroll:()=> {},
                        onPress: () => { this.closeTask(2) },
                    }]
                },
                {   status:true,
                    text:'Delete',
                    id:3,
                    dueDate:'',
                    Title:"Radiology",
                    dueDate:'20 May 2018',
                    project:"Biology",
                    description: "A novel technology to improve drinking water quality: a microbiological evaluation of in-home flocculation and chlorination in rural Guatemala · Are microbial indicators and pathogens correlated ...",
                    right: [{
                        text:'Delete',
                        backgroundColor: '#34495E',
                        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                        onPress: () => { this.closeTask(3) },
                    }]
                },
            ],
       
            taskSwipeBtnLeft : [{
                text:'Close',
                margin:10,
                backgroundColor: 'tomato',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => {null}
            
            }]
            
            
        }
        
    }


closeTask(taskId){
    var tasks = [];
    for (var i=0; i<this.state.tasks.length; i++){
        if (this.state.tasks[i].id != taskId ){
            tasks.push(this.state.tasks[i]);
        }
    }
    
    this.setState({tasks:tasks})
    
}
    

SwipeScrollEvent(allowParentScroll) {
        if (this.state.allowVerticalScroll != allowParentScroll) {
            this.setState({'allowVerticalScroll': allowParentScroll})
        }
    }


renderTasks(element, i){
    return(
        <View key={i}>

            <View style={styles.ToDoTaskList}>
            
                <Swipeout buttonWidth={150} left= {this.state.taskSwipeBtnLeft} scroll={this.SwipeScrollEvent.bind(this)} right={element.right}>
                    <View style={styles.card}>
                        

                        <View style={{flex:1, alignItems:'center'}}>
                            <Text style={styles.TaskNumber}>{element.Title}</Text>
                        </View>
                        
                        <View style={styles.TaskDescription2}>
                            <View>

                                <Text style={styles.dueDateTask}>{element.dueDate}</Text>
                            </View>
                        <View>

                        </View>
                            <View style={styles.ToDoTaskTag}>
                                <Text style={styles.TaskTag}>{element.project}</Text>
                            </View>
                        </View>

                        <ViewMoreText
                            numberOfLines={3}
                            onReady={this._handleTextReady}>

                            <Text style={styles.cardText}>
                                {element.description}
                            </Text>
                        </ViewMoreText>
                        
                    </View>
                </Swipeout>

             </View>
            
        </View>
    )
}


renderTask(data) {
    return data.map((element, i) => {
        console.log(element, i);
        return this.renderTasks(element, i);
    })
}

    render() {
        return (

    <ScrollView scrollEnabled={this.state.allowVerticalScroll} style={{backgroundColor:'#EBEDEF'}}>
        <MenuProvider>

        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', margin:12,}}>
            <Text style={{color:'grey', fontSize:13}}>Due date</Text>
            <Text style={{color:'grey', fontSize:13}}>Project</Text>
        </View>

         {this.renderTask(this.state.tasks)}
 
        );
        </MenuProvider>

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

    flexDirection:'column',
},


card: {
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: 'white',
  },

  cardText: {
    fontSize: 14,
    color:'black',
  },


ToDoTaskList:{
    flexDirection:'column',
    backgroundColor:'transparent',
    margin:10,
},

descriptionTAsk:{
    margin:10,
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
    fontSize:17,
    fontWeight:'bold',
    marginRight:10,
},

dueDateTask:{
    color:'tomato',
    fontSize:12,
    marginRight:10,
    marginTop:3,
},

TaskDescription:{
    color:'#2E4053',
    fontSize:12,

},
TaskDescription2:{
    flexDirection:'row',
    width:330,
    height:30,
    justifyContent:'space-between',
    backgroundColor:'transparent',
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
    marginBottom:10,
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