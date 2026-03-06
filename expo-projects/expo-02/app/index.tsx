import React from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const styles = StyleSheet.create(
  {mainStyle: {
      flex: 1,
      alignItems: "center",
  },
  titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      marginHorizontal: 20,
      marginTop: 30,
      textAlign: 'center',
  },
  infoText: {
      fontSize: 20,
      marginHorizontal: 20,
      marginTop: 20,
      textAlign: 'center',
  },
  outputText: {
      fontSize: 25,
      marginHorizontal: 20,
      marginTop: 20,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
  line: {
      borderBottomColor: '#CCC',
      borderBottomWidth: 1,
      marginVertical: 10,
      width: '100%',
  },})

function checkIfBirthdayPassed(today, birthMonth, birthDay) {
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const bMonth = parseInt(birthMonth);
  const bDay = parseInt(birthDay);
  if (isNaN(bMonth) || (currentMonth === bMonth && isNaN(bDay))) return false;
  if (currentMonth > bMonth) return true;
  if (currentMonth === bMonth && currentDay >= bDay) return true;
  return false;
}

export default function Index() {

  const [age, onChangeAge] = React.useState('');
  const [birthMonth, onChangeBirthMonth] = React.useState('');
  const [birthDay, onChangeBirthDay] = React.useState('');
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthdayPassed = checkIfBirthdayPassed(today, birthMonth, birthDay);
  const birthYear = age ? currentYear - parseInt(age) - (birthdayPassed ? 0 : 1)  : '...'

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.mainStyle}>
          <Text style={styles.titleText}>Calculator of the year of birth</Text>
          <View style={styles.line}></View>
          <Text style={styles.infoText}>Type your age:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Ex: 25"
            keyboardType="numeric"
          />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoText}>Month (1-12):</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeBirthMonth}
                value={birthMonth}
                placeholder="MM"
                keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoText}>Day (1-31):</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeBirthDay}
                value={birthDay}
                placeholder="DD"
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={styles.outputText}>
            {age !== '' ? birthYear : "Waiting for age..."}
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
