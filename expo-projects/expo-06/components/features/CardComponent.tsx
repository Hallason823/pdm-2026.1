import { View } from 'react-native';
import { Card, Text, Badge } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function CardComponent() {
  return (
    <ComponentSection title="Cards">
      <View style={featuresStyles.card}>
        <Badge text="New" />
        <Card>
          <Card.Header title="Card Title" thumbImageUrl="https://via.placeholder.com/300x200" />
          <Card.Body>
            <Text>
              This card displays information in a structured way with a header and body content.
            </Text>
          </Card.Body>
        </Card>
      </View>

      <View style={featuresStyles.card}>
        <Badge text="Featured" style={featuresStyles.badge} />
        <Card>
          <Card.Header title="Another Card" />
          <Card.Body>
            <Text>Cards are useful for grouping related content together.</Text>
          </Card.Body>
        </Card>
      </View>
    </ComponentSection>
  );
}
