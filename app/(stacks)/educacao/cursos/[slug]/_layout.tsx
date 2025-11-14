import { Tabs, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CourseProvider } from '@/context/CourseContext';

export default function CourseTabsLayout() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <CourseProvider slug={slug}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#BF2633',
          tabBarInactiveTintColor: '#666',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E5E5',
          },
          headerShown: true,
          headerStyle: {
            backgroundColor: '#BF2633',
          },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Tabs.Screen
          name="sobre"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="grade"
          options={{
            title: 'Grade',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="horario"
          options={{
            title: 'Horário',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </CourseProvider>
  );
}
