import React from 'react';
import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
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
        <Link href="/modal" asChild>
          <TouchableOpacity style={indexStyles.button}>
            <Text style={indexStyles.buttonText}>Learn More About Me</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}