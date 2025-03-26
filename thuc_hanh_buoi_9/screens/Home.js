import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: 'https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: '2', name: 'Burgers', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
  { id: '3', name: 'Steak', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e' },
];

const popularItems = [
  { id: '1', name: 'Food 1 By Viet Nam', price: '1$', image: 'https://th.bing.com/th/id/OIP.Qqar1uV0OBxz6Yn4JVuTMwHaJ4?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: '2', name: 'Food 2 By', price: '3$', image: 'https://th.bing.com/th/id/OIP.WiXfweIs7aMmqobVmFCFgAHaJI?w=167&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
];

const saleOffItems = [
  { id: '1', image: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293', discount: '10% OFF' },
  { id: '2', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc' },
];

export default function HomeScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <Text style={styles.popularName}>{item.name}</Text>
      <Text style={styles.popularPrice}>{item.price}</Text>
    </View>
  );

  const renderSaleOffItem = ({ item }) => (
    <View style={styles.saleOffItem}>
      <Image source={{ uri: item.image }} style={styles.saleOffImage} />
      {item.discount && <Text style={styles.discountBadge}>{item.discount}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explorer</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
        />
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />

      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popularItems}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.popularList}
      />

      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={saleOffItems}
        renderItem={renderSaleOffItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.saleOffList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterText: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewAll: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
  popularList: {
    marginBottom: 20,
  },
  popularItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  popularName: {
    fontSize: 14,
    marginTop: 5,
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f39c12',
  },
  saleOffList: {
    marginBottom: 20,
  },
  saleOffItem: {
    marginRight: 15,
    position: 'relative',
  },
  saleOffImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
});