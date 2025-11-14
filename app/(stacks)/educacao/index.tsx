import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AppHeader from '@/components/Header';
import { Card } from '@/components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EducationScreen() {
  const router = useRouter();

  const educationData = [
    {
      title: 'Ciência de Dados',
      slug: 'ciencia-dados',
    },
    {
      title: 'Comércio Exterior',
      slug: 'comercio-exterior',
    },
    {
      title: 'Desenvolvimento de Software Multiplataforma',
      slug: 'dsm',
    },
    {
      title: 'Design de Produto',
      slug: 'design-produto',
    },
    {
      title: 'Gestão da Produção Industrial',
      slug: 'gestao-producao',
    },
    {
      title: 'Gestão Empresarial',
      slug: 'gestao-empresarial',
    },
  ];

  const handleCoursePress = (slug: string) => {
    router.push(`educacao/cursos/${slug}/sobre`)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>
          Conheça nossos cursos
        </Text>
        <View style={styles.cardList}>
          {educationData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              onPress={() => handleCoursePress(item.slug)}
              style={styles.card}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 5,
    borderLeftColor: '#BF2633',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#262014',
    marginBottom: 8,
  },
  cardList: {
    marginTop: 10,
  }
});
