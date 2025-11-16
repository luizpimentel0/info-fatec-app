import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Href, Link } from 'expo-router';
import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const homeCategories = [
  { name: 'Cultura', icon: 'color-palette-outline' as const, href: '/(stacks)/cultura' },
  { name: 'Educação', icon: 'book-outline' as const, href: '/(stacks)/educacao' },
  { name: 'Empregos', icon: 'business-outline' as const, href: '/(stacks)/empregos' },
  { name: 'Segurança', icon: 'shield-checkmark-outline' as const, href: '/(stacks)/seguranca' },
  { name: 'Nosso time', icon: 'sparkles-outline' as const, href: '/(stacks)/time' },
];

type CategoryButtonProps = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  href: Href;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, href }) => (
  <Link href={href} asChild>
    <TouchableOpacity style={styles.button}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={28} color="#BF2633" />
      </View>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  </Link>
);

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.greetingText}>
          Seja bem-vindo ao Info<Text style={styles.highlight}>Fatec</Text>!
        </Text>
        <Text style={styles.instructionText}>
          Selecione uma categoria para começar a explorar:
        </Text>

        <View style={styles.buttonContainer}>
          {homeCategories.map(category => (
            <CategoryButton
              key={category.name}
              name={category.name}
              icon={category.icon}
              href={category.href as CategoryButtonProps['href']}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#262014',
    marginBottom: 8,
  },
  highlight: {
    fontWeight: '700',
    color: '#BF2633',
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#BF2633',
  },
  iconContainer: {
    marginRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#262014',
    flex: 1,
  },
});
