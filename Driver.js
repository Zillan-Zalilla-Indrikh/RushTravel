import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Button} from 'react-native-paper';
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',color:'black'}}>DRIVER REVIEW</Text>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/images/driver.png')}/>

                <Text style={styles.name}>Intern </Text>
                <Text style={styles.userInfo}>7Y2AD90 </Text>
                <Text style={{color:'black'}}>______________________________________________________</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <IconButton style={{alignSelf:'center'}} icon={Platform.OS === "android" ? "phone" : "ios-phone"}/>
                <Text style={styles.userInfo}>0898866755734 </Text>
                </View>
                <View style={{paddingTop:20}}>
                <Button onPress={()=> this.props.navigation.navigate('Home')}
                style={
                    {backgroundColor:"rgba(240, 240, 50,1)", 
                    width:width/2.5, 
                    alignSelf:'center'}
                    }>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Track This Bus</Text>
                </Button>
                </View>
            </View>
          </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"black",
    fontWeight:'bold',
  },
  userInfo:{
    fontSize:22,
    color:"black",
    fontWeight:'bold',
    paddingTop:8
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  }
});