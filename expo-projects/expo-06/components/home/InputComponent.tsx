import { useState } from 'react';
import { Input } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onValueChange?: (value: string) => void;
}

export function InputComponent({ onValueChange }: Props) {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    const text = e.nativeEvent.text;
    setValue(text);
    onValueChange?.(text);
  };

  return (
    <ComponentSection title="Input">
      <Input
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
        style={homeStyles.input}
      />
    </ComponentSection>
  );
}
