import { View } from 'react-native';
import { Tag, Badge } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { featuresStyles } from './styles';

export function TagComponent() {
  const tags = ['JavaScript', 'Mobile', 'React', 'TypeScript', 'UI Kit', 'Design System'];

  return (
    <ComponentSection title="Tags & Badges">
      <View style={featuresStyles.tagContainer}>
        {tags.map((tag) => (
          <Tag key={tag} selected={false} style={{ marginBottom: 8 }}>
            {tag}
          </Tag>
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
