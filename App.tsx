import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let text1 = "Бачка яко луд"
  let text2 = "Почна се!!!"
  const[outputText, setOutputText] = useState( text1)
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="бутончи" onPress={() => setOutputText(text2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
