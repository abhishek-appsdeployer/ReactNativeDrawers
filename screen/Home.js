import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Calculator</Text>
      <View style={{margin:20}} >
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={()=>navigation.navigate("Add")}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.subtractButton]} onPress={()=>navigation.navigate("Subtract")}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.multiplyButton]} onPress={()=>navigation.navigate("Multiply")}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.divideButton]} onPress={()=>navigation.navigate("Divide")}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.squareButton]}>
          <Text style={styles.buttonText}>Square</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 32,
    textAlign:"center"
  },
 
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 4,
    marginHorizontal: 0,
   textAlign:"center",
   marginTop:20,
  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center"
  },
  addButton: {
    backgroundColor: '#2196F3',
    marginVertical: 5,
  },
  subtractButton: {
    backgroundColor: '#FF9800',
  },
  multiplyButton: {
    backgroundColor: '#4CAF50',
  },
  divideButton: {
    backgroundColor: '#E91E63',
  },
  squareButton: {
    backgroundColor: '#9C27B0',
  },
});

export default Home;
