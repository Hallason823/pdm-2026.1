import { View } from 'react-native';
import { Divider, Text } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function DividerComponent() {
  return (
    <ComponentSection title="Divider">
      <Text>Section 1</Text>
      <Divider style={featuresStyles.divider} />
      <Text>Section 2</Text>
      <Divider style={featuresStyles.divider} />
      <Text>Section 3</Text>
    </ComponentSection>
  );
}
