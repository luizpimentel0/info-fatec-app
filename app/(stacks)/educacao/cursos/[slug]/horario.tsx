import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { courses } from '@/constants/courses';
import { useCourseSlug } from '@/context/CourseContext';

export default function HorarioScreen() {
  const slug = useCourseSlug();

  if (!slug || !courses[slug]) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Curso não encontrado</Text>
        </View>
      </SafeAreaView>
    );
  }

  const course = courses[slug];
  const scheduleData = course.schedule;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {scheduleData.map((schedule, index) => (
          <View key={index} style={styles.scheduleCard}>
            <Text style={styles.day}>{schedule.day}</Text>
            <Text style={styles.time}>{schedule.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#BF2633',
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262014',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});
