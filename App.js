
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Zadaj ulohu:"
        />
        <Button title="ADD" />
      </View>

      <View style={styles.taskContainer}>
        <Text>UDÁLOSTI......</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2c8c8',
    padding: 20,
    paddingTop: 60,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  input: {
    borderColor: '#000',
    flex: 1,
    borderWidth: 1.65,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },

  taskContainer: {
    flex: 4,
    padding: 24,
    borderTopWidth: 3,
  },
});
