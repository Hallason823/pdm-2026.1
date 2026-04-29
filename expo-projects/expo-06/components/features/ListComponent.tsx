import { View } from 'react-native';
import { List, Text } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function ListComponent() {
  const items = [
    { id: 1, title: 'React Native', description: 'JavaScript framework for mobile apps' },
    { id: 2, title: 'Expo', description: 'Open-source platform for universal React apps' },
    { id: 3, title: 'Ant Design', description: 'Enterprise-class UI design system' },
  ];

  return (
    <ComponentSection title="List">
      <View>
        {items.map((item) => (
          <View key={item.id} style={featuresStyles.listItem}>
            <Text style={{ fontWeight: '600' }}>{item.title}</Text>
            <Text style={{ color: '#999', marginTop: 4 }}>{item.description}</Text>
          </View>
        ))}
      </View>
    </ComponentSection>
  );
}
