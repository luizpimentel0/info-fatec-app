import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone de seta para voltar
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter();

  const goHome = () => {
    router.replace('/');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goHome} style={styles.titleContainer}>
        <Text style={styles.title}>
          Info
          <Text style={styles.highlight}>
            Fatec
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    paddingVertical: 5,
    paddingRight: 10,
  },
  title: {
    color: '#262014',
    fontSize: 24,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#BF2633',
  },
});
