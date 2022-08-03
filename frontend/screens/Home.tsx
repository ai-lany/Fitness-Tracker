import { StyleSheet , Button} from 'react-native';
import { useEffect, useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';





export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [calories, setCalories] = useState(0);
  function inc(){
    setCalories(calories+100);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calories</Text>
      <Text style={styles.title}>{calories}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={inc} title="Add Meal"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
