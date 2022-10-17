import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image, Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
 
var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;
 
export default class VerticalStackLayout extends Component {
  render() {
    return (
        <View style={styles.container}>       
            <View style={[styles.box, styles.box1]}>
                <Text style={styles.text1}>
                    Good morning 
                </Text>
                    <Image
                        style={styles.imagen}
                        source={require("./assets/profile.jpg")}/>

                        <Text style={styles.text2}>
                        Guinevere Ainsley
                        </Text>
                        <View>
                <Ionicons style={styles.campana} name="ios-notifications-circle-outline" size={30} color="black" />
                </View>
            </View>

            <View style={styles.box_search}>
                <View>              
                        <Text>
                        <Ionicons style={styles.icon} name="search" size={24} color="gray" />
                            Search for a job or company
                        </Text>
                    </View>
                </View>
            <View style={[styles.box, styles.box2]}>
                <Image
                        style={styles.banner}
                        source={require("./assets/profile.jpg")}/>
                        
            </View>

            <View style={styles.box_text}>
                <Text style={styles.text3}>
                    Recomendation
                </Text>
                    <Text style={styles.textBlue}>
                    See All
                    </Text>
            </View>
           
            
            <View style={[styles.box, styles.box3]}></View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    justifyContent: "center"
  },
  box2: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: "-30%",
  },
  box3: {

  },
  imagen:{
    height: "25%",
    width: "15%",
    top: 70,
    flex:1,
    borderRadius: 100,
    marginLeft: "2%",
    position: 'absolute',
  },
  text1: {
    color: "gray",
    flex:1,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 90,
    top: 70,
  },
  text2: {
    color: "black",
    flex:1,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 90,
    marginBottom: "10%",
  },
  text3: {
    color: "black",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold", 
    marginHorizontal: "20%",
  },
  textBlue: {
    color: "blue",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold", 
    marginHorizontal: "20%",
  },
  campana:{
    flexDirection: "row",
    paddingLeft: "90%",
    bottom: "38%",

  },
  box_search: {
    display: 'flex',
    flexdirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#DEDEDE",
    top:"20%",
    position: "absolute",
    height: "5%",
    width: "90%",
    marginHorizontal: 20,
  },
  banner:{
    height: "50%",
    width: "89%",
    top: 90,
    flex:1,
    marginBottom:"30%",
    borderRadius: 20,
    marginLeft: "2%",
    position: 'absolute',
  },
  box_text:{
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
  },
  icon:{
    paddingRight: 1,
  },
  backgraundTest: {
      backgroundColor: "red",
  }
});