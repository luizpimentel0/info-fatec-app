import { Tabs } from 'expo-router';

export default function TabsLayout() {
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ title: 'Início' }} />
  </Tabs>
}
