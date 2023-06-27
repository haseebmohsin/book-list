import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, StyleSheet } from 'react-native';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const baseUrl = 'https://booklist-2lpq.onrender.com/api';

    try {
      const response = await axios.get(`${baseUrl}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const handleBookPress = (book) => {
    navigation.navigate('BookDetails', { book });
  };

  const renderBookCard = ({ item }) => {
    return <BookCard book={item} onPress={() => handleBookPress(item)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>자유톡</Text>

      <FlatList
        data={books}
        renderItem={renderBookCard}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReachedThreshold={0.8}
        onEndReached={handleRefresh}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },

  header: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginBottom: 5,
  },
});

export default BookListScreen;
