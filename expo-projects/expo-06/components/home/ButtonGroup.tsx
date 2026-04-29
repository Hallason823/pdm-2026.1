import { Button } from '@ant-design/react-native';
import { Link } from 'expo-router';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onSubmit?: () => void;
}

export function ButtonGroup({ onSubmit }: Props) {
  const handleSubmit = () => {
    onSubmit?.();
    alert('Form submitted!');
  };

  return (
    <ComponentSection title="Actions">
      <Button type="primary" onPress={handleSubmit} style={homeStyles.button}>
        Submit
      </Button>
      <Link href="/features" asChild>
        <Button style={homeStyles.button}>Go to Features</Button>
      </Link>
    </ComponentSection>
  );
}
