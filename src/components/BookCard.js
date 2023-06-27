import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { imageMap } from '../data/images';

const BookCard = ({ book, onPress }) => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.5;
  const imageHeight = imageWidth * 1;

  // Get the corresponding image based on the book's coverImage value
  const imageSource = imageMap[book.coverImage];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={[styles.image, { width: imageWidth, height: imageHeight }]} resizeMode='cover' />

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
  },

  image: {
    opacity: 0.6,
  },

  infoContainer: {
    padding: 5,
  },

  title: {
    fontSize: 16,
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
