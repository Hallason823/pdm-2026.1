import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  sectionHeader: {
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#1890ff',
    },
    subtitle: {
      fontSize: 14,
      color: '#999',
      marginTop: 4,
    },
  },
  componentSection: {
    container: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 8,
      gap: 8,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: '#333',
    },
  },
});
