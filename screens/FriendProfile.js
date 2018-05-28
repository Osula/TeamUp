import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import ViewMoreText from 'react-native-read-more-text'; 
import Swipeout from 'react-native-swipeout';



export default class page2 extends React.Component {
    person = {
        firstName: "Lorem",
        lastName : "Ipsum",
        id       : 5566,
        fullName : function() {
           return this.firstName + " " + this.lastName + "'s" + " " + "profile";
        }
    };

    static navigationOptions = {
        title: 'Profile',
      };
    constructor() {

        super();

        page2.navigationOptions.title = this.person.fullName();

        this.state = {
            cards: ['tag1', 'tag2'],
            message:'',

            questionAnswered: [{

                question: "1 Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
                title:"Lorem Ipsum asked:",
            }],

            answers : [{
                id:1,
                title: 'John answered: ',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
            {   
                id:2,
                title:'John answered: ',
                delete:'Delete',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
            {   
                id:3,
                title:'John answered: ',
                delete:'Delete',
                date:'20 May 2018',
                answer: "Con l'espressione guerra fredda si indica la contrapposizione politica, ideologica e militare che venne a crearsi intorno al 1947 (non tutti gli studiosi concordano), tra le due potenze principali emerse vincitrici dalla seconda guerra mondiale: gli Stati Uniti d'America e l'Unione Sovietica. Ben presto si giunse alla divisione ",
            },
        ],
        }
    }


    renderAnswered(element, i){
        return(
            <View key={i}>
                <View style={styles.ToDoTaskList}>
                    <View style={{flex:1, alignItems:'left'}}>
                        <Text style={styles.userNameAnswersCard}>{element.title}</Text>
                    </View>

                    <ViewMoreText
                        numberOfLines={3}
                        onReady={this._handleTextReady}>

                        <Text style={styles.cardText}>
                            {element.answer}
                        </Text>
                    </ViewMoreText>
                    {this.renderQuestionUnderAnswers(this.state.questionAnswered)}
                    <View style={styles.TaskDescription2}>
                        <View>
                            <Text style={styles.dueDateTask}>{element.date}</Text>
                        </View>
                    </View>
                </View>
            
            </View>
        )
    }
    renderQuestionUnderAnswer(question, i){
        return(
            <View key={i}>
                <View style={styles.cardRightQuestion}> 
                    <View style={{flex:1, alignItems:'left'}}>
                        <Text style={styles.userNameQuestionCard}>{question.title}</Text>
                    </View>
                    <ViewMoreText
                        numberOfLines={2}
                        onReady={this._handleTextReady}>
    
                        <Text style={styles.cardTextUnderQuestion}>
                            {question.question}
                        </Text>
                    </ViewMoreText>
                </View>            
            </View>
        )   
    }
    renderAnswereds(answersArray) {
        return answersArray.map((element, i) => {
            console.log(element, i);
            return this.renderAnswered(element, i);
        })
    }

    renderQuestionUnderAnswers(data){
        return data.map((element, i) => {
            return this.renderQuestionUnderAnswer(element, i);
        })
    }

    isFormCompleted(){
        return this.state.message != '' 
    }


    render() {
        return (

    <ScrollView style={{backgroundColor:'white'}}>
            <View> 
                <Image style={styles.headerContainer} source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0f/c6/81/d3/beach.jpg'}}>
                </Image>
            </View>
            <View style={styles.userName}>
                <Image style={styles.profilepic} 
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w'}}
                    />
                <View style={styles.UserNameView}>
                    <Text style={styles.userNameTextStyle1}>{this.person.firstName + ' '+ this.person.lastName}</Text>
                    <Text style={styles.userNameTextStyle2}>@Lorem</Text>
                </View>
             </View>

        <View style={styles.bigTextbox}>
            <ViewMoreText
                numberOfLines={3}
                onReady={this._handleTextReady}>
                <Text>
                    L'acido desossiribonucleico o deossiribonucleico è un acido nucleico che contiene le informazioni genetiche necessarie alla biosintesi di RNA e proteine, molecole...
                </Text>
            </ViewMoreText>
        </View>

        <View style={{backgroundColor:'#34495E',}}>
            <TextInput
                value={this.state.message}
                onChangeText={(newText) => this.setState({message:newText})}
                maxLength = {40}
                keyboardAppearance={true}
                placeholder={'Ask something...'}
                style={styles.singleInput}
            />
            <View style={{alignItems:'center', marginBottom:15}}>
                <TouchableOpacity disabled={this.state.message !=''? false: true}>
                    <Text style={this.isFormCompleted()? {color:'tomato', fontSize:20} : {color:'white', fontSize:20}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>

        {this.renderAnswereds(this.state.answers)}
     
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
       
headerContainer:{    
    height:100,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    flex: 1, 
},
 cardTextUnderQuestion: {
    fontSize: 13,
    color:'grey',
    },
      
QuickViewContainer:{       
    backgroundColor:'#F2F4F4',
    paddingBottom:10,   
},

cardTextUnderQuestion: {
    fontSize: 13,
    color:'grey',
    },

cardRightQuestion: {
    padding: 10,
    marginTop:10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth:1,
    backgroundColor: 'white',
},

card: {
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: 'white',
},

singleInput:{
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#99A3A4',
    height:50,
    padding:5,
    flex:1,
    margin:10,
    marginBottom:10,
    
},

ToDoTaskList:{
    flexDirection:'column',
    backgroundColor:'#F2F4F4',
    margin:10,
    padding:10,
    borderBottomWidth:1,
    borderColor:'white',
},

dueDateTask:{
    color:'#34495E',
    fontSize:12,
    marginRight:10,
    marginTop:10,
},
       
QuickViewText:{
    color:'#BDC3C7',
    fontSize:15,
    marginLeft:20,
    marginTop:10,      
},
       
imageViewContainer:{
    flexDirection:'row',
},

imageStyle:{     
    width: 130, 
    height: 200,
    borderRadius:15,
    marginLeft:20,
     marginTop:10,
           
},
       
menuThumbNail:{
    width: 30, 
    height: 30,
    borderRadius:5,
    marginRight:10,
},
       
profilepic:{
    width:90,
    height:90,
    marginTop:-15,
    marginRight:5,
    borderRadius:40,
    borderColor:'white',
    borderWidth:3,
},

menuThumbNailContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
     height:50,
    borderBottomWidth:1,
    borderColor:'#E5E7E9',
    paddingTop:10,
    marginRight:20,                   
},

Textbox:{
    paddingTop:8,
},
       
addButton:{
    justifyContent:'flex-end',
    flex: 1, 
    flexDirection: 'row',
    marginTop:5,
},
           
addButtonStyle:{         
    right: 5,
    fontSize:15,
    marginRight:10,
    color:'blue',
    fontWeight: 'bold'
},
           
           
TaskTag:{
    fontSize:15,
    fontWeight:'bold',
    color:'tomato',
},
           
bigTextbox:{
    padding:20,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
},
       

miniMenuSingle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#212F3C',
    height:60,
    borderBottomWidth:1,
    borderColor:'#5D6D7E',
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    },

taskText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
},
       
UploadView:{
    flexDirection:'row',
    justifyContent:'flex-end',
    borderColor:'#E5E7E9',
    padding:5,
    marginLeft:20,
},
       
UploadIcons:{
    marginLeft:10,
},
       
userName:{
    flex: 1, 
    flexDirection: 'row',
    marginTop:10,
    marginLeft:70,
    padding:5,
    marginTop:-40,
},
userNameAnswersCard:{
    color:'#34495E',
    fontSize:15,
    fontWeight:'bold',
    marginRight:10,
},
userNameQuestionCard:{
    color:'#34495E',
    fontSize:13,
    fontWeight:'bold',
    marginRight:10,
},
       
UserNameView:{
       marginTop:8,
},
       
userNameTextStyle1:{
    fontSize:22,
    fontWeight:'bold',
    color:'black',
},

userNameTextStyle2:{
    fontSize:18,
    fontWeight:'bold',
    color:'pink',
},
       
textStyle:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
},
       });