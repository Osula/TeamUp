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
import { MenuProvider,  Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';




export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'My tasks'
    };

    constructor() {
        super();

        this.state = {
            tasks : [{
                    status:true,
                    id:1,
                    Title:"Cold war",
                    project:"History",
                    description: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                },
                {   status:true,
                    id:2,
                    Title:"Hidrology ",
                    project:"Geography",
                    description: "The biological and geological future of Earth can be extrapolated based upon the estimated effects of several long-term influences. These include the chemistry at Earth's surface, the rate of cooling of the planet's interior, the gravitational interactions",
                },
                {   status:true,
                    id:3,
                    Title:"Radiology",
                    project:"Biology",
                    description: "A novel technology to improve drinking water quality: a microbiological evaluation of in-home flocculation and chlorination in rural Guatemala · Are microbial indicators and pathogens correlated ...",
                },
            ]
           
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


renderTasks(element, i){
    return(
        <View key={i}>

            <View style={styles.ToDoTaskList}>
                <View style={styles.card}>
                
                    <View style={styles.TaskDescription2}>
                        <View>
                            <Text style={styles.TaskNumber}>{element.Title}
                            </Text>
                        </View>
                    <View>
                        <TouchableOpacity>
                            <Menu >
                                <MenuTrigger>
                                    <Entypo name={'chevron-small-down'} size={30} color={'#566573'}/>
                                </MenuTrigger>
                                <MenuOptions style={{backgroundColor: 'white', alignItems:'center', paddingBottom:5,}}>
                                    <MenuOption style={{marginLeft: 3}} onSelect={() => this.closeTask(element.id)}> 
                                        <Text style={{color: 'blue', fontSize:17,}}>Close task </Text> 
                                    </MenuOption>
                                    <MenuOption onSelect={() => this.closeTask(element.id)} >
                                        <Text style={{color: 'red', fontSize:17,}}>Delete task</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ToDoTaskTag}>
                        <Text style={styles.TaskTag}>{element.project}</Text>
                    </View>
                </View>
                
                    <ViewMoreText
                        numberOfLines={2}
                        onReady={this._handleTextReady}>

                        <Text style={styles.cardText}>
                            {element.description}
                        </Text>
                    </ViewMoreText>
                </View>

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

    <ScrollView style={{backgroundColor:'#F8F9F9'}}>
        <MenuProvider>
        <View> 
            <Image style={styles.headerContainer} source={{uri:'http://www.sagennext.com/wp-content/uploads/2013/01/DNA-Strand.jpg'}}>
            </Image>
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
    marginHorizontal: 10,
    marginVertical:5,
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: 'rgba(245, 238, 248, 0.3)',
  },

  cardText: {
    fontSize: 14,
    color:'black',
  },


ToDoTaskList:{
    flexDirection:'column',
    backgroundColor:'transparent',
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
    fontSize:15,
    fontWeight:'bold',
    marginRight:10,
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