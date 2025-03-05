import React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const events = [
  { id: '1', title: 'Şu bu zirvesi', organizer: 'BUIK', date: '02.03.2025', location: 'Boğaziçi Üniversitesi, Albert Long Hall', color: '#8B5D5D' },
  { id: '2', title: 'Duman Konser', organizer: 'Duman', date: '20.03.2025', location: 'Beşiktaş', color: '#556B2F' },
  { id: '3', title: 'Seramik Galerisi', organizer: 'İBB', date: '04.03.2025', location: 'İBB Taksim', color: '#6B4226' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search events..." placeholderTextColor="white" />
      </View>

      {/* Location Info */}
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={18} color="white" />
        <Text style={styles.locationText}>Sarıtepe Kampüsü, Kilyos, Sarıyer, İstanbul</Text>
      </View>

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: item.color }]}>
            <FontAwesome5 name="calendar-alt" size={16} color="white" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.organizer} - {item.date}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001F3F', padding: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#40516F', borderRadius: 15, padding: 10, marginBottom: 10 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: 'white' },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  locationText: { color: 'white', marginLeft: 5 },
  card: { padding: 15, borderRadius: 10, marginVertical: 8 },
  title: { fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 5 },
  subtitle: { color: 'white' },
  location: { color: 'white', fontSize: 12, marginTop: 2 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#0074D9', padding: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, position: 'absolute', bottom: 0, width: '100%' },
});
