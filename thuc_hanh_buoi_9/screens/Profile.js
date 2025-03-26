import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://ts2.mm.bing.net/th?id=OIP.X8_tUOKkO3gkV1WfmGNhuAHaIi&pid=15.1' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.title}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
      </View>

      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Changed to white to match the screenshot
  },
  header: {
    backgroundColor: '#3498db', // Blue background
    padding: 20,
    alignItems: 'center',
    // Removed borderBottomLeftRadius and borderBottomRightRadius to match the flat bottom edge
  },
  avatar: {
    width: 80, // Slightly smaller to match the screenshot
    height: 80,
    borderRadius: 40, // Circular avatar
    marginBottom: 10,
    borderWidth: 2, // Added a white border to match the screenshot
    borderColor: '#fff',
  },
  name: {
    fontSize: 18, // Slightly smaller font size
    fontWeight: 'bold',
    color: '#000', // Black text to match the screenshot
    marginBottom: 5,
  },
  title: {
    fontSize: 14, // Smaller font size
    color: '#000', // Black text
    marginBottom: 5,
  },
  description: {
    fontSize: 12, // Smaller font size
    color: '#666', // Gray text to match the screenshot
    textAlign: 'center',
    paddingHorizontal: 20, // Added padding to prevent text from touching edges
  },
  signOutButton: {
    backgroundColor: '#f39c12', // Orange background
    paddingVertical: 10,
    paddingHorizontal: 30, // Adjusted padding for a more compact button
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center', // Center the button horizontally
    marginTop: 20, // Space between header and button
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 14, // Smaller font size to match the screenshot
    fontWeight: 'bold',
  },
});