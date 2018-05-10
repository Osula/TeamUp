import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Modal, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FriendProfile from './FriendProfile';
import NewProject from './newProject';


export default class page2 extends React.Component {



    static navigationOptions = {
        title: 'My projects',
      };
      constructor() {

        super();
        
        this.state = {
            projects : 
                [{
                name:"Biology",
                team:"Team: 4",
                description: "DNA and health",
                urgent: 'false',
                date:"Due date: 20 december 2018",
                image:"http://www.sagennext.com/wp-content/uploads/2013/01/DNA-Strand.jpg",
                },
                {
                name:"Math",
                team:"Team: 3",
                description: "Integers", 
                date:"Due date: 16 december 2018",
                urgent: 'true',
                image:"https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_251/hated_math_1200x627.jpg?quality=89&w=800",
                },
                {
                name:"History",
                team:"Team: 4",
                urgent: 'false',
                description: "World war II", 
                date:"Due date: 18 december 2018",
                image:"http://www.bbc.co.uk/staticarchive/75b9ec754e7b67c77e43ed6284fd9a2443dbf8eb.jpg",
                }
            ],
            modalVisible: false,
        };  
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    renderProject(element, i) {
        return (
        <View key={i}>
            <View style={element.urgent=='false'? styles.projectContainer : styles.projectContainerUrgent}>
                <View style={styles.projectImage}>
                    <Image style={styles.projectPic} source={{uri:element.image}}>

                    </Image>
                </View>
                <View style={styles.projectDescription}>
                        <View style={styles.projectTitle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('singleproject')}>
                                <Text style={styles.projectTitleText}>{element.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.projectSubTitle}>
                            <Text style={styles.projectSubTitleText}>{element.description}
                            </Text>
                            <Text style={styles.projectMembers}>{element.team}
                            </Text>
                            <Text style={styles.projectMembers}>{element.date}
                            </Text>
                        </View>
                </View>
            </View>

        </View>
        );
    }
    renderProjects(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderProject(element, i);
        })
    }

    renderNewProjectModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <NewProject close={() => this.setState({modalVisible: false})}/>
        </Modal>
        )
    }

    render() {
        return (

    <ScrollView>

        {this.renderProjects(this.state.projects)}
        <View style={styles.addProject}>
            <View style={styles.addIcon}>
            {this.renderNewProjectModal()}
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                    <Entypo   name={"circle-with-plus"} size={60} color={"tomato"}/>
                </TouchableOpacity>
            </View>
            <View style={styles.addProjectTitle}>
                <Text style={styles.addProjectTitleStyle}>Add a new project</Text>
            </View>
        </View>

       

    </ScrollView>
            );
        }
    }



const styles = StyleSheet.create({

screenContainer:{
 backgroundColor:'#212F3C',
},

projectContainer:{
    flexDirection:'row',
    margin:10,
    height:120,
    flex:1,
    backgroundColor:'white',
},

projectContainerUrgent:{
    flexDirection:'row',
    margin:10,
    height:120,
    flex:1,
    backgroundColor:'white',
    borderRightWidth:1,
    borderColor:'red',
},


addProject:{
    flexDirection:'column',
    margin:10,
    height:130,
    flex:1,
    backgroundColor:'white',
},
addIcon:{
marginLeft:150,
marginTop:10,
},

addProjectTitle:{
    marginLeft:130,
},
addProjectTitleStyle:{
    fontSize:12,
    color:'red',
},

projectImage:{
    width:90,
    height:120,
    position:'absolute',
    backgroundColor:'transparent',
},

projectPic:{
    width:120,
    height:120,
    position:'absolute',
},
projectDescription:{

    flexDirection:'column',
    marginLeft:130,
    padding:10,
},

projectTitleText:{
    fontSize:18,
    fontWeight:'bold',
},
projectSubTitle:{
    marginTop:20,

},
projectSubTitleText:{
    fontSize:15,
},
projectMembers:{
    fontSize:13,
    color:'#808B96',
}

});