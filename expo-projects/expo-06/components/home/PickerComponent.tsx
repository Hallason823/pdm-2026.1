import { useState } from 'react';
import { Picker, Button } from '@ant-design/react-native';
import { ComponentSection } from '../shared/ComponentSection';
import { homeStyles } from './styles';

interface Props {
  onSelect?: (value: any) => void;
}

export function PickerComponent({ onSelect }: Props) {
  const [selected, setSelected] = useState(undefined);

  const pickerData = [
    [
      { label: 'React Native', value: 'rn' },
      { label: 'Expo', value: 'expo' },
      { label: 'Flutter', value: 'flutter' },
    ],
  ];

  const handleChange = (val: any) => {
    setSelected(val);
    onSelect?.(val);
  };

  return (
    <ComponentSection title="Picker">
      <Picker data={pickerData} value={selected} onChange={handleChange} cols={1}>
        <Button style={homeStyles.pickerButton}>Select Framework</Button>
      </Picker>
    </ComponentSection>
  );
}
