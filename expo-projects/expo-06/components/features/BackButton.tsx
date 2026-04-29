import { Button } from '@ant-design/react-native';
import { useRouter } from 'expo-router';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function BackButton() {
  const router = useRouter();

  return (
    <ComponentSection title="Navigation">
      <Button onPress={() => router.back()} style={featuresStyles.backButton}>
        Back to Home
      </Button>
    </ComponentSection>
  );
}
