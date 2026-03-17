import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
    backgroundColor: colors.white,
    margin: 20,
    marginTop: 40,
    borderRadius: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text.primary,
    marginBottom: 12,
  },
});
