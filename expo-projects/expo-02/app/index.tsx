import React from 'react';
import { Text, View } from "react-native";
import { StyleSheet, TextInput, Switch} from 'react-native';

const styles = StyleSheet.create(
  {mainStyle: {
      flex: 1,
      alignItems: "center",
  },
  titleText: {
      fontSize: 35,
      fontWeight: 'bold',
      margin: 12,
  },
  infoText: {
      fontSize: 20
  },
  outputText: {
      fontSize: 25,
      fontWeight: 'bold',
  },
  input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },})

export default function Index() {

  const [hasHadBirthday, setHasHadBirthday] = React.useState(false)
  const [number, onChangeNumber] = React.useState('');
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = number ? currentYear - parseInt(number) - (hasHadBirthday ? 0 : 1)  : '...'

  return (
    <View style={styles.mainStyle}>
      <Text style={styles.titleText}>Calculator of the year of birth</Text>
      <Text style={styles.infoText}>Type your age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ex: 25"
        keyboardType="numeric"
      />
      <Text style={styles.infoText}>Have you had a birthday this year?</Text>
      <Switch
          value={hasHadBirthday}
          onValueChange={setHasHadBirthday}
        />
      <Text style={styles.outputText}>
        {number !== '' ? birthYear : "Waiting for age..."}
      </Text>
    </View>
  );
}
