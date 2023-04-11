import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Welcome = ({ navigation }) => {
  return (
    <>
    {/* <View> */}
      <View style={styles.main}>
        <Text style={styles.text} onPress={() => navigation.navigate("Home")}>Welcome</Text>
      </View>
      {/* </View> */}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontFamily: "Arial",
    fontSize: 36, // set your desired font size
    fontWeight: "bold",
    margin:10,
    borderRadius:5
  }
});
