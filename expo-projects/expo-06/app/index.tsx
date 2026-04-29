import { ScrollView } from 'react-native';
import { Space } from '@ant-design/react-native';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { InputComponent } from '@/components/home/InputComponent';
import { SwitchComponent } from '@/components/home/SwitchComponent';
import { StepperComponent } from '@/components/home/StepperComponent';
import { PickerComponent } from '@/components/home/PickerComponent';
import { ButtonGroup } from '@/components/home/ButtonGroup';
import { homeStyles } from '@/components/home/styles';

export default function HomeScreen() {
  return (
    <ScrollView style={homeStyles.container} contentContainerStyle={homeStyles.content}>
      <Space direction="vertical" size="lg" style={homeStyles.section}>
        <SectionHeader title="Form Components" subtitle="Ant Design Mobile showcase" />
        <InputComponent />
        <SwitchComponent />
        <StepperComponent />
        <PickerComponent />
        <ButtonGroup />
      </Space>
    </ScrollView>
  );
}
