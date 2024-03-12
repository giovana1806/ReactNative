import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
      source={{uri:'https://images.universohq.com/2008/12/PrincesasDoMar92.jpg'}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
