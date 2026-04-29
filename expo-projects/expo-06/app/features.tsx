import { ScrollView, View } from 'react-native';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CardComponent } from '@/components/features/CardComponent';
import { ListComponent } from '@/components/features/ListComponent';
import { TagComponent } from '@/components/features/TagComponent';
import { DividerComponent } from '@/components/features/DividerComponent';
import { BackButton } from '@/components/features/BackButton';
import { featuresStyles } from '@/components/features/styles';

export default function FeaturesScreen() {
  return (
    <ScrollView style={featuresStyles.container} contentContainerStyle={featuresStyles.content}>
      <View style={featuresStyles.section}>
        <SectionHeader title="Data Display" subtitle="Cards, lists, badges, and more" />
        <CardComponent />
        <ListComponent />
        <TagComponent />
        <DividerComponent />
        <BackButton />
      </View>
    </ScrollView>
  );
}
