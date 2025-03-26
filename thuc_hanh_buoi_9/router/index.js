import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../contexts/AuthContext';

// Screens
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FoodDetailScreen from '../screens/FoodDetail';
import EditProfileScreen from '../screens/EditProfile';

// Create Navigators
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const MainStack = createStackNavigator();

// Auth Stack Navigator (SignIn, SignUp, ForgotPassword)
const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Main Tab Navigator (Home and Profile)
const MainTabNavigator = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Main Stack Navigator (MainTabNavigator, FoodDetail, EditProfile)
const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
  </MainStack.Navigator>
);

// Root Router (Decides between AuthStack and MainStack based on isLoggedIn)
export default function RootRouter() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}