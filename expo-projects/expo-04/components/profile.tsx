import React from 'react';
import { View, Text, Image } from 'react-native';
import { profileStyles } from '../styles/profileStyles';

export default function Profile() {
  return (
    <View style={profileStyles.container}>
      <Image
        source={require('../assets/images/profile.jpg')}
        style={profileStyles.photo}
        accessibilityLabel="Profile photo of Hallason Matias"
      />
      <Text style={profileStyles.name}>Hallason Matias</Text>
      <Text style={profileStyles.bio}>
        Junior Software Engineer at Cesar.{'\n'}
        Student - Mechanical Engineering (UFPE) and Internet Systems (UNICAP).{'\n'}
        Passionate about Machine Learning, NLP, robotics and scalable software development.
      </Text>
    </View>
  );
}