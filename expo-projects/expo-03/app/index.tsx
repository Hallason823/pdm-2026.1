import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import Profile from '../components/profile';
import { indexStyles } from '../styles/indexStyles';

export default function Index() {
  return (
    <ScrollView style={indexStyles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={indexStyles.content}>
        <Text style={indexStyles.title}>
          Professional Profile
        </Text>
        <Profile />
      </View>
    </ScrollView>
  );
}