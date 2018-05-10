import React from 'react';
import { StyleSheet, video,ListView, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Pie from './pie';

const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    render() {
        return (

    <ScrollView >
                
            <View> 
                    <View style={styles.headerContainer}>

                        <View style={styles.guideLineView}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={"md-close"} size={20} color={"blue"}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerTitle}>
                            <Text style={styles.textStyle}>#Task report</Text>
                        </View>
                    </View>
                    
                    

                </View>



        <View style={styles.chartContainer}>
    
             <View style={[styles.pieContainer, {flex:1}]}>
        
        <View style={styles.taskThemeTag}>

            <View style={styles.UserNameView}>
                <Text style={styles.taskTheme}>Task #Theme</Text>
                <Text style={styles.tag1}>@Ambiente</Text>
            </View>
        </View>
                
                <View style={styles.pieDescriptors}>
            
                    <View >
                        <Text style={styles.chartTextCaricate}>500/1000</Text>
                        <Text style={styles.chartTextCaricate}>Caricate</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextDaApprovare }>250</Text>
                        <Text style={styles.chartTextDaApprovare}>Da approvare</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextApprovato}>250</Text>
                        <Text style={styles.chartTextApprovato}>Approvato</Text>
                    </View>
                </View>
        </View>
        <ScrollView horizontal={true} style={[styles.pieContainerScrollView] }>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']}/>
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                        radius={100}
                        innerRadius={60}
                        series={[25, 25, 50]}
                        colors={['#0000FF', '#F4D03F', '#F8F9F9']} 
                    />
                    <View style={styles.chartMiddle}>
                        <Text style={styles.chartMiddleText}>25%</Text>
                    </View>
                </View>
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']} 
                    />
                    <View style={styles.chartMiddle}>
                        <Text style={styles.chartMiddleText}>25%</Text>
                    </View>
                </View>
            
            </ScrollView>
  

    </View>
    <View style={styles.chartContainer}>

        <View style={[styles.pieContainer, {flex:1}]}>
        <View style={styles.taskThemeTag}>

            <View style={styles.UserNameView}>
                <Text style={styles.taskTheme}>Task #Theme</Text>
                <Text style={styles.tag2}>@Ambiente</Text>
            </View>
        </View>
                
                <View style={styles.pieDescriptors}>
            
                    <View >
                        <Text style={styles.chartTextCaricate}>500/1000</Text>
                        <Text style={styles.chartTextCaricate}>Caricate</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextDaApprovare }>250</Text>
                        <Text style={styles.chartTextDaApprovare}>Da approvare</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextApprovato}>250</Text>
                        <Text style={styles.chartTextApprovato}>Approvato</Text>
                    </View>
                </View>
        </View>
        <ScrollView horizontal={true} style={[styles.pieContainerScrollView] } showsPagination={true}>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']}/>
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']} />
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']} />
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
            
            </ScrollView>
  

    </View>
    <View style={styles.chartContainer}>

        <View style={[styles.pieContainer, {flex:1}]}>
        <View style={styles.taskThemeTag}>

            <View style={styles.UserNameView}>
                <Text style={styles.taskTheme}>Task #Theme</Text>
                <Text style={styles.tag3}>@Ambiente</Text>
            </View>
        </View>
                
                <View style={styles.pieDescriptors}>
            
                    <View >
                        <Text style={styles.chartTextCaricate}>500/1000</Text>
                        <Text style={styles.chartTextCaricate}>Caricate</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextDaApprovare }>250</Text>
                        <Text style={styles.chartTextDaApprovare}>Da approvare</Text>
                    </View>
                    <View>
                        <Text style={styles.chartTextApprovato}>250</Text>
                        <Text style={styles.chartTextApprovato}>Approvato</Text>
                    </View>
                </View>
        </View>
        <ScrollView horizontal={true} style={[styles.pieContainerScrollView] } showsPagination={true}>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']}/>
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
                
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']} />
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
                <View style={styles.singleChart}>
                    <Pie style={styles.pieStyle}
                    radius={100}
                    innerRadius={60}
                    series={[25, 25, 50]}
                    colors={['#0000FF', '#F4D03F', '#F8F9F9']} />
                        <View style={styles.chartMiddle}>
                            <Text style={styles.chartMiddleText}>25%</Text>
                        </View>
                </View>
            
            </ScrollView>
  

    </View>

    
       
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
        
    paddingRight:15,
    paddingTop:15,
    paddingBottom:10,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    marginLeft:10,
    marginTop:10, 
    flexDirection: 'row',
    },
    


headerTitle:{
    marginLeft:130,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,

},
textStyle:{
    fontSize:17,
    fontWeight:'bold',
    color:'black',
  },
    
chartContainer:{
    backgroundColor:'white',
},

pieDescriptors:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:20,
    marginTop:280,
    marginLeft:10,
    marginRight:10,

},

singleChart: {
    margin: 27,
    width: 190,
},
chartMiddleText:{
    fontSize:30,
    color:'#D6DBDF',
},

chartTextCaricate:{
    fontSize:15,
    color:'grey',
},
chartTextDaApprovare:{
    fontSize:15,
    color:'#F4D03F',  
},
chartTextApprovato:{
    fontSize:15,
    color:'blue',
},
pieContainer:{
    flexDirection: 'column',
    flex: 1,
    height:430,
    backgroundColor:'white',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#808B96',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    margin:10,
    padding:10,
},

pieContainerScrollView:{
    flexDirection: 'row',
    position:'absolute',
    flex: 1,
    height: 250,
    backgroundColor:'transparent',
    borderRadius:15,
    marginTop:80
},


chartMiddle:{
    position:'absolute',
    marginLeft:80,
    marginTop:80,
},

taskThemeTag:{

    flexDirection: 'row',
    marginTop:5,
    marginLeft:10,
    padding:5,
},

taskTheme:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
},
tag1:{
    fontSize:17,
    fontWeight:'bold',
    color:'pink',
},
tag2:{
    fontSize:17,
    fontWeight:'bold',
    color:'#00FF00',
},
tag3:{
    fontSize:17,
    fontWeight:'bold',
    color:'#29B6F6',
},


});