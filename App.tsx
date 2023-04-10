import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is profile</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const CustomDrawer = ({ navigation }) => {
  return (
    <View>
      {/* Add your custom drawer content here */}
      {/* <Text onPress={()=>navigation.navigate("Home")}>Custom Drawer Content</Text> */}
      <Text>Custom Drawer Content</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')} // Update the navigation to 'Home'
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }} // Hide the header for the ProfileScreen
        >
          {() => (
            <Drawer.Navigator drawerContent={() => <CustomDrawer  />}>
              <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
