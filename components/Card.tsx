import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CardProps = {
  title: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  description?: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function Card({ title, onPress, iconName, description, style }: CardProps) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {iconName && (
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={30} color="#BF2633" />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && (
          <Text style={styles.description} numberOfLines={3}>{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 15,
    padding: 8,
    backgroundColor: '#FFE5E7',
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 400,
    color: '#262014',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
