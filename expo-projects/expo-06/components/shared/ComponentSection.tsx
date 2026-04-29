import { View, ViewStyle } from 'react-native';
import { Text } from '@ant-design/react-native';
import { ReactNode } from 'react';
import { sharedStyles } from './styles';

interface Props {
  title: string;
  children: ReactNode;
  style?: ViewStyle;
}

export function ComponentSection({ title, children, style }: Props) {
  const { container, title: titleStyle } = sharedStyles.componentSection;

  return (
    <View style={[container, style]}>
      <Text style={titleStyle}>{title}</Text>
      {children}
    </View>
  );
}
