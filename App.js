import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FlipCard from "react-native-flip-card";


const NavBar = () => {
  return (
      <Text style={ styles.navText }>
          Recipe Box
      </Text>
  )
}
const Recipe = () => {
  return (
    <>
    <FlipCard>
      <View>
      <Text style={ styles.recipeHeader }>
        Recipe Name
      </Text>
      {/* Ingredients*/}
      <Text style={ styles.recipeLine }>Ingredients and Serving Size to go here</Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }>Tap to Flip me over =></Text>
      </View>
      <View>
        <Text>Steps to complete</Text>
      </View>

      {/* Recipe Name
      <Text style={ styles.recipeHeader }>
        Recipe Name
      </Text>
      {/* Ingredients*/}
      {/*<Text style={ styles.recipeLine }>Ingredients and Serving Size to go here</Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }></Text>
      <Text style={ styles.recipeLine }>Tap to Flip me over =></Text> */}
    </FlipCard>
    </>
  )
}
  class App extends Component {
    render() { 
      return (
        <View style= { styles.mainBackground }>
          <View style= { styles.navBackground }>
            <NavBar></NavBar>
          </View>
          <View style= { styles.recipeBackground }>
            <Recipe></Recipe>
          </View>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    mainBackground: {
      backgroundColor: "grey",
      height: "100%"
    },
    navBackground: {
      backgroundColor: "#869c95",
      height: "20%",
    },
    navText: {
      color: "#F0F7EE",
      fontSize: 40,
      textAlign: "center",
      marginTop: 50
    },
    recipeBackground: {
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      margin: "2%",
      height: "50%"
    }, 
    recipeHeader: {
      textAlign: "center",
      fontSize: 25,
      borderBottomColor: "#f6a3a7",
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      borderWidth: 1,
      height: "15%"
    },
    recipeLine: {
      fontSize: 20,
      borderBottomColor: "#9dc5e4",
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      borderWidth: 1,
      lineHeight: 25
    }
    
  });


export default App;
