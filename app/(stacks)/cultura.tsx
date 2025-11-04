import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '@/components/Header';
import CultureCard from '@/components/CultureCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CultureScreen() {
  const cultureData = [
    {
      id: 1,
      icon: 'school-outline' as const,
      title: 'Semana de Tecnologia',
      description: 'Evento anual com palestras, workshops e projetos inovadores. Ótima oportunidade para networking e aprendizado.',
      link: '',
    },
    {
      id: 2,
      icon: 'people-circle-outline' as const,
      title: 'Atléticas e Grupos',
      description: 'Conheça os times esportivos e os grupos de estudos. A vida universitária vai muito além da sala de aula!',
      link: '',
    },
    {
      id: 3,
      icon: 'book-outline' as const,
      title: 'Biblioteca e Acervo',
      description: 'Acesse o acervo digital e físico, espaços para estudo e recursos de pesquisa.',
      link: '',
    },
    {
      id: 4,
      icon: 'sparkles-outline' as const,
      title: 'Inovação e Empreendedorismo',
      description: 'Programas de aceleração e incubadoras para tirar sua ideia do papel. A Fatec como polo de inovação.',
      link: '',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.sectionTitle}>
          Cultura e Vida Universitária
        </Text>
        <Text style={styles.introText}>
          Descubra tudo o que faz a experiência Fatecana ser única: eventos, grupos de estudo e projetos que impulsionam seu crescimento.
        </Text>
        <View style={styles.cardList}>
          {cultureData.map((item) => (
            <CultureCard
              key={item.id}
              iconName={item.icon}
              title={item.title}
              description={item.description}
              onPress={() => { }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  introText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 20,
  },
  cardList: {
    marginTop: 10,
  }
});
