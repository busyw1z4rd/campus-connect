import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const events = [
  { id: '1', title: 'Boğaziçi Tech Summit', date: 'March 10', location: 'Albert Long Hall' },
  { id: '2', title: 'Music Fest', date: 'March 15', location: 'South Campus' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus Connect</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.date} - {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
