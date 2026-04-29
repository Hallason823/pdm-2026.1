import { View } from 'react-native';
import { Text, Badge } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

const Tag = ({ children }: { children: string }) => (
  <View
    style={{
      backgroundColor: '#1890ff',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
      marginRight: 8,
      marginBottom: 8,
    }}
  >
    <Text style={{ color: 'white', fontSize: 12 }}>{children}</Text>
  </View>
);

export function TagComponent() {
  const tags = ['JavaScript', 'Mobile', 'React', 'TypeScript', 'UI Kit', 'Design System'];

  return (
    <ComponentSection title="Tags & Badges">
      <View style={featuresStyles.tagContainer}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </View>

      <View style={[featuresStyles.tagContainer, { marginTop: 12 }]}>
        <Badge text="5" />
        <Badge text="New" />
        <Badge text="Hot" />
      </View>
    </ComponentSection>
  );
}
