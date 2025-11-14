import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { courses } from '@/constants/courses';
import { useCourseSlug } from '@/context/CourseContext';

export default function GradeScreen() {
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
  const gradeData = course.subjects;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {gradeData.map((subject, index) => (
          <View key={index} style={styles.subjectCard}>
            <Text style={styles.subjectName}>{subject.name}</Text>
            <Text style={styles.workload}>{subject.workload}</Text>
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
  subjectCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#262014',
    flex: 1,
  },
  workload: {
    fontSize: 14,
    color: '#666',
  },
});
