import { Button } from '@ant-design/react-native';
import { useRouter } from 'expo-router';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onSubmit?: () => void;
}

export function ButtonGroup({ onSubmit }: Props) {
  const router = useRouter();

  const handleSubmit = () => {
    onSubmit?.();
    alert('Form submitted!');
  };

  const goToFeatures = () => {
    router.push('/features');
  };

  return (
    <ComponentSection title="Actions">
      <Button type="primary" onPress={handleSubmit} style={homeStyles.button}>
        Submit
      </Button>
      <Button onPress={goToFeatures} style={homeStyles.button}>
        Go to Features
      </Button>
    </ComponentSection>
  );
}
