import { Stack } from 'expo-router';
import React from 'react';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="cultura"
        options={{
          headerShown: false,
          title: 'Cultura Fatec',
        }}
      />
    </Stack>
  );
}
