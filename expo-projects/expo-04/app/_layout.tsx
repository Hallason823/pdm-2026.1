import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Professional Profile',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          title: 'More About Me',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
}