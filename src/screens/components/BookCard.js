import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BookCard = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: 'https://source.unsplash.com/user/c_v_r/1900x800' }} style={styles.image} resizeMode='cover' />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>

        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>{book.discountRate}%</Text>
          <Text style={styles.price}>{book.price}원</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 1,
  },

  image: {
    width: 200,
    height: 200,
    opacity: 0.6,
  },

  infoContainer: {
    padding: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  discountText: {
    flex: 1,
    marginRight: 10,
    color: 'red',
  },

  price: {
    fontWeight: 'bold',
  },
});

export default BookCard;
