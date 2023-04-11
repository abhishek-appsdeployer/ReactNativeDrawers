import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screen/Welcome';
import Home from './screen/Home';
import Add from './screen/Add';
import Subtract from './screen/Subtract';
import Multiply from './screen/Multiply';
import Divide from './screen/Divide';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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
      <Text>Custom Drawer Content</Text>
      <View style={{ padding: 10 }}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Add" onPress={() => navigation.navigate('Add')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Subtract" onPress={() => navigation.navigate('Subtract')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Multiply" onPress={() => navigation.navigate('Multiply')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Divide" onPress={() => navigation.navigate('Divide')} />
      </View>
    </View>
  );
};
const CustomDrawerAdd = ({ navigation }) => {
  return (
    <View>
      {/* Add your custom drawer content here */}
      <Text>Custom Drawer Content</Text>
      <View style={{ padding: 10 }}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    
      <View style={{ padding: 10 }}>
        <Button title="Subtract" onPress={() => navigation.navigate('Subtract')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Multiply" onPress={() => navigation.navigate('Multiply')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Divide" onPress={() => navigation.navigate('Divide')} />
      </View>
    </View>
  );
};
const CustomDrawerSub = ({ navigation }) => {
  return (
    <View>
      {/* Add your custom drawer content here */}
      <Text>Custom Drawer Content</Text>
      <View style={{ padding: 10 }}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    
      <View style={{ padding: 10 }}>
        <Button title="Add" onPress={() => navigation.navigate('Add')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Multiply" onPress={() => navigation.navigate('Multiply')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Divide" onPress={() => navigation.navigate('Divide')} />
      </View>
    </View>
  );
};
const CustomDrawerMul = ({ navigation }) => {
  return (
    <View>
      {/* Add your custom drawer content here */}
      <Text>Custom Drawer Content</Text>
      <View style={{ padding: 10 }}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    
      <View style={{ padding: 10 }}>
        <Button title="Add" onPress={() => navigation.navigate('Add')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Subtract" onPress={() => navigation.navigate('Subtract')} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title="Divide" onPress={() => navigation.navigate('Divide')} />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome',headerShown: false  }}
        />
        <Stack.Screen name="Add" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerAdd navigation={navigation} />}>
              <Drawer.Screen
                name="a"
                component={Add}
                options={{ headerShown: false }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Subtract" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerSub navigation={navigation} />}>
              <Drawer.Screen
                name="a"
                component={Subtract}
                options={{ headerShown: false }}
              />
              <Drawer.Screen
                name="BottomTab"
                options={{ headerShown: false }}
              >
                {() => (
                  <Tab.Navigator>
                    <Tab.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{ tabBarLabel: 'Home' }}
                    />
                    <Tab.Screen
                      name="Profile"
                      component={ProfileScreen}
                      options={{ tabBarLabel: 'Profile' }}
                    />
                    <Tab.Screen
                      name="Settings"
                      component={SettingsScreen}
                      options={{ tabBarLabel: 'Settings' }}
                    />
                  </Tab.Navigator>
                )}
              </Drawer.Screen>
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Multiply" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerMul navigation={navigation} />}>
              <Drawer.Screen
                name="a"
                component={Multiply}
                options={{ headerShown: false }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
       
        <Stack.Screen name="Divide" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawer navigation={navigation} />}>
              <Drawer.Screen
                name="a"
                component={Divide}
                options={{ headerShown: false }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {() => (
            <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawer navigation={navigation} />}>
              <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
