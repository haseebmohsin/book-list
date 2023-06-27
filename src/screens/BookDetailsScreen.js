import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params;
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://source.unsplash.com/user/c_v_r/1900x800' }}
        style={[styles.image, { width: screenWidth }]}
        resizeMode='cover'
      />

      <View style={styles.descriptionArea}>
        <Text style={styles.title}>{book.title}</Text>

        <Text>Description of the book.....</Text>
        <Text>{book.description}</Text>

        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>{book.discountRate}%</Text>
          <Text style={styles.price}>{book.price}원</Text>
        </View>
      </View>

      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  descriptionArea: {
    padding: 10,
  },

  image: {
    height: 300,
    opacity: 0.7,
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
    marginTop: 30,
  },

  discountText: {
    flex: 1,
    marginRight: 10,
    color: 'red',
  },

  price: {
    fontWeight: 'bold',
  },

  line: {
    height: 1,
    backgroundColor: '#C6C6C6',
    marginVertical: 10,
  },
});

export default BookDetailsScreen;
