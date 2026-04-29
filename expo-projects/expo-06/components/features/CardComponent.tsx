import { View } from 'react-native';
import { Text, Badge } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function CardComponent() {
  return (
    <ComponentSection title="Cards">
      <View style={featuresStyles.card}>
        <Badge text="New" />
        <Text style={{ fontWeight: '600', marginTop: 8 }}>Card Title</Text>
        <Text style={{ color: '#666', marginTop: 8 }}>
          This card displays information in a structured way with content and styling.
        </Text>
      </View>

      <View style={featuresStyles.card}>
        <Badge text="Featured" style={featuresStyles.badge} />
        <Text style={{ fontWeight: '600', marginTop: 8 }}>Another Card</Text>
        <Text style={{ color: '#666', marginTop: 8 }}>Cards are useful for grouping related content.</Text>
      </View>
    </ComponentSection>
  );
}
