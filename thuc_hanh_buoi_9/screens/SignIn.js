import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

export default function SignInScreen({ navigation }) {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        label="EMAIL ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => setIsLoggedIn(true)}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <IconButton
        iconSource="https://www.google.com/favicon.ico"
        text="Google"
        backgroundColor="#fff"
        onPress={() => console.log('Google Sign In')}
      />
      <IconButton
        iconSource="https://www.facebook.com/favicon.ico"
        text="Facebook"
        backgroundColor="#3b5998"
        onPress={() => console.log('Facebook Sign In')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  forgotPassword: {
    color: '#f39c12',
    textAlign: 'right',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
  },
  signUpLink: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
});