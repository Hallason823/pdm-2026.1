import { useState } from 'react';
import { View } from 'react-native';
import { Stepper, Text } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onValueChange?: (value: number) => void;
}

export function StepperComponent({ onValueChange }: Props) {
  const [value, setValue] = useState(1);

  const handleChange = (val: number) => {
    setValue(val);
    onValueChange?.(val);
  };

  return (
    <ComponentSection title="Stepper">
      <View style={homeStyles.stepperRow}>
        <Text>Quantity: {value}</Text>
        <Stepper value={value} onChange={handleChange} min={0} max={10} />
      </View>
    </ComponentSection>
  );
}
