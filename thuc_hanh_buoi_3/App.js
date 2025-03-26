import React from 'react';
import { Text, View } from 'react-native';
import Button from './components/Button';
import Cat from './components/Cat'

const onOK = () => {
  console.log("OK");
}

const App = () => {
  return (
    <View>
      <Button title="Hello world." onMyPress={onOK} />
      
    </View>
  );
}

export default App;
