import { ScrollView, Text, View } from 'react-native';
import { modalStyles } from '../styles/modalStyles';

export default function Modal() {
  return (
    <View style={modalStyles.container}>
      <ScrollView style={modalStyles.scrollView} contentContainerStyle={modalStyles.content}>
        <Text style={modalStyles.sectionTitle}>Education</Text>
        <Text style={modalStyles.text}>
          - Mechanical Engineering - UFPE (Universidade Federal de Pernambuco){'\n'}
          - Internet Systems - UNICAP (Universidade Católica de Pernambuco)
        </Text>

        <Text style={modalStyles.sectionTitle}>Professional Experience</Text>
        <Text style={modalStyles.text}>
          Currently working as a Junior Software Engineer at Cesar, where I focus on developing scalable software solutions and exploring innovative technologies.
        </Text>

        <Text style={modalStyles.sectionTitle}>Interests & Skills</Text>
        <Text style={modalStyles.text}>
          - Machine Learning & Natural Language Processing{'\n'}
          - Robotics and Automation{'\n'}
          - Scalable Software Architecture{'\n'}
          - Full-Stack Development{'\n'}
          - Mobile Development with React Native
        </Text>

        <Text style={modalStyles.sectionTitle}>Projects & Goals</Text>
        <Text style={modalStyles.text}>
          Passionate about combining engineering principles with cutting-edge software development.
          Always seeking to learn new technologies and contribute to innovative projects that make a difference.
        </Text>

        <Text style={modalStyles.sectionTitle}>Contact</Text>
        <Text style={modalStyles.text}>
          Feel free to connect with me on professional networks or reach out for collaboration opportunities!
        </Text>
      </ScrollView>
    </View>
  );
}