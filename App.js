import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import axios from 'axios';

const BookListScreen = () => {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const baseUrl = 'http://localhost:5000/api';

    try {
      const response = await axios.get(`${baseUrl}/books`);

      console.log(response);

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

  const renderBookCard = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.coverImage }} style={{ width: 100, height: 150 }} />
        <Text>{item.title}</Text>
        <Text>Discount rate: {item.discountRate}%</Text>
        <Text>Price: {item.price}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={books}
        renderItem={renderBookCard}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReachedThreshold={0.8}
        onEndReached={handleRefresh}
      />
    </View>
  );
};

export default BookListScreen;
