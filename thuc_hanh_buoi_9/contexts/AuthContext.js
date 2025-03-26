import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load login state from AsyncStorage when the app starts
  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const storedLoginState = await AsyncStorage.getItem('isLoggedIn');
        if (storedLoginState !== null) {
          setIsLoggedIn(JSON.parse(storedLoginState));
        }
      } catch (error) {
        console.error('Error loading login state:', error);
      }
    };
    loadLoginState();
  }, []);

  // Save login state to AsyncStorage whenever it changes
  useEffect(() => {
    const saveLoginState = async () => {
      try {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      } catch (error) {
        console.error('Error saving login state:', error);
      }
    };
    saveLoginState();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};