import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { courses } from '@/constants/courses';

export default function SobreScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  console.log(slug)

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

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>{course.title}</Text>
        {course.duration && (
          <Text style={styles.duration}>Duração: {course.duration}</Text>
        )}
        <Text style={styles.description}>{course.description}</Text>
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
    fontSize: 18,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#262014',
    marginBottom: 12,
  },
  instructor: {
    fontSize: 14,
    color: '#BF2633',
    marginBottom: 4,
    fontWeight: '500',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#262014',
    lineHeight: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262014',
    marginTop: 16,
    marginBottom: 8,
  },
  prerequisite: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
});
