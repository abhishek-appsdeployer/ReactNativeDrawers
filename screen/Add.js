
import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Add = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    if (num1 === '' || num2 === '') {
      Alert.alert('Error', 'Please enter both numbers');
    } else {
      const sum = parseInt(num1) + parseInt(num2);
      setResult(`Result: ${sum}`);
      Alert.alert('Result', `Sum: ${sum}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Addition</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddition}>
        <Text style={styles.buttonText}>Result</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
  },
});

export default Add;
