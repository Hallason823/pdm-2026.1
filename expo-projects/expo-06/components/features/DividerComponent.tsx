import { View } from 'react-native';
import { Text } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

const Divider = () => (
  <View style={{ height: 1, backgroundColor: '#f0f0f0', marginVertical: 12 }} />
);

export function DividerComponent() {
  return (
    <ComponentSection title="Divider">
      <Text>Section 1</Text>
      <Divider />
      <Text>Section 2</Text>
      <Divider />
      <Text>Section 3</Text>
    </ComponentSection>
  );
}
