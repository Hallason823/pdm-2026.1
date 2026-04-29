import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from '@ant-design/react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="features" options={{ title: 'Features' }} />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}
