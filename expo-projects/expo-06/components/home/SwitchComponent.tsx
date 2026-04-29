import { useState } from 'react';
import { View } from 'react-native';
import { Switch, Text } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onToggle?: (checked: boolean) => void;
}

export function SwitchComponent({ onToggle }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (value: boolean) => {
    setChecked(value);
    onToggle?.(value);
  };

  return (
    <ComponentSection title="Switch">
      <View style={homeStyles.switchRow}>
        <Text>Notifications enabled</Text>
        <Switch checked={checked} onChange={handleChange} />
      </View>
    </ComponentSection>
  );
}
