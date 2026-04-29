import { View } from 'react-native';
import { Text } from '@ant-design/react-native';
import { sharedStyles } from './styles';

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: Props) {
  const { title: titleStyle, subtitle: subtitleStyle } = sharedStyles.sectionHeader;

  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      {subtitle && <Text style={subtitleStyle}>{subtitle}</Text>}
    </View>
  );
}
