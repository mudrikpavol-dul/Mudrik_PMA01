import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Pocitadlo objednavok</Text>

      <Text style={[styles.Number, { color: number === 5 ? 'red' : 'black' }]}>
        {number}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', width: 100 }}>

      <Pressable style={[styles.Pressable, {width: 50, backgroundColor: number === 0 ? 'gray' : '#2f93db' }]} onPress={() => setNumber(number - 1)} disabled={number === 0}>
        <Text style={styles.Text}>-</Text>
      </Pressable>

      <Pressable style={[styles.Pressable, {width: 50, backgroundColor: number === 5 ? 'gray' : '#2f93db' }]} onPress={() => setNumber(number + 1)} disabled={number === 5}>
        <Text style={styles.Text}>+</Text>
      </Pressable>

      </View>

      <Pressable style={[styles.Pressable, { width: 110 }]} onPress={() => setNumber(0)}>
        <Text style={styles.Text}>Vynulovat</Text>
      </Pressable>
      {number === 5 && <Text style={[styles.Text, { color: 'red' }]}> Dosiahnuty limit. </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pressable: {
    backgroundColor: '#2f93db',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    margin: 5,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Number  : {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
