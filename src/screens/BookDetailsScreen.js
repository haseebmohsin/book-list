import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { imageMap } from '../data/images';
const imageSource = require('../../assets/images/6.png');

const BookDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const screenWidth = Dimensions.get('window').width;
  navigation.setOptions({ title: book.title });

  // Get the corresponding image based on the book's coverImage value
  const imageSource = imageMap[book.coverImage];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.parentContainer}>
          <View style={styles.bookDetails}>
            <Image source={imageSource} style={[styles.image, { width: screenWidth }]} resizeMode='cover' />

            <View style={styles.descriptionArea}>
              <Text style={styles.title}>{book.title}</Text>
              <Text>Description of the book.....</Text>
              <Text>{`${book.description.substring(0, 400)}`}</Text>

              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>{book.discountRate}%</Text>
                <Text style={styles.price}>{book.price}원</Text>
              </View>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.commentArea}>
            {/* First Comment */}
            <View style={styles.commentNameContainer}>
              <View style={styles.commentNameContainerLeft}>
                <Svg width={34} height={34} viewBox='0 0 34 34' fill='none'>
                  <Circle cx={17.0007} cy={17} r={17} fill='#FFDCA9' />
                </Svg>

                <Text style={styles.name}>안녕 나 응애 </Text>

                <Svg width={14} height={14} viewBox='0 0 14 14' fill='none'>
                  <Circle cx={7} cy={7} r={7} fill='#01B99F' />
                  <Path
                    d='M5.59471 8.38068L9.73971 4.19506C9.8685 4.065 10.0324 3.99997 10.2315 3.99997C10.4305 3.99997 10.5945 4.065 10.7233 4.19506C10.8521 4.32512 10.9165 4.49066 10.9165 4.69166C10.9165 4.89266 10.8521 5.0582 10.7233 5.18826L6.08649 9.87047C5.94598 10.0124 5.78206 10.0833 5.59471 10.0833C5.40737 10.0833 5.24344 10.0124 5.10294 9.87047L3.27633 8.02597C3.14753 7.8959 3.08313 7.73037 3.08313 7.52937C3.08313 7.32836 3.14753 7.16283 3.27633 7.03277C3.40513 6.90271 3.56905 6.83768 3.76811 6.83768C3.96716 6.83768 4.13109 6.90271 4.25989 7.03277L5.59471 8.38068Z'
                    fill='white'
                  />
                </Svg>

                <Text style={styles.dateText}>1일전</Text>
              </View>

              <View>
                <Svg width='12' height='3' viewBox='0 0 12 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <Circle cx='6' cy='1.5' r='1.5' fill='#AFB9CA' />
                  <Circle cx='10.5' cy='1.5' r='1.5' fill='#AFB9CA' />
                  <Circle cx='1.5' cy='1.5' r='1.5' fill='#AFB9CA' />
                </Svg>
              </View>
            </View>

            <View style={styles.commentText}>
              <Text>
                어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
                봐주세용~!
              </Text>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <Path
                    d='M17.2407 14.5495L17.086 14.4095C18.4964 12.8514 19.1819 11.366 19.1819 9.99213C19.1819 8.2563 17.7151 6.82894 15.894 6.82894C14.7349 6.82894 13.6865 7.39861 13.0846 8.34809L17.2407 14.5495ZM17.2407 14.5495L17.086 14.4095C15.9476 15.6672 14.3689 16.9239 12.5003 18.0562C10.6317 16.9239 9.05317 15.6672 7.91451 14.4095C6.50392 12.8515 5.81864 11.366 5.81864 9.99213C5.81864 8.2563 7.28544 6.82894 9.10655 6.82894C10.2657 6.82894 11.3139 7.39868 11.9161 8.34836L11.9161 8.34839M17.2407 14.5495L11.9161 8.34839M11.9161 8.34839C12.0428 8.54813 12.265 8.66633 12.5003 8.66633M11.9161 8.34839L12.5003 8.66633M12.5003 6.89943C13.3725 6.00071 14.5872 5.48583 15.8934 5.4857L12.5003 6.89943ZM12.5003 6.89943C11.6279 6.00037 10.4132 5.4857 9.10655 5.4857C6.54389 5.4857 4.44404 7.49875 4.44404 9.99213C4.44404 12.2444 5.82703 14.274 7.45221 15.8871C9.08348 17.5064 10.9986 18.7457 12.1463 19.4185L12.5003 6.89943ZM12.5003 8.66633C12.7352 8.66633 12.9578 8.54839 13.0844 8.34833L12.5003 8.66633ZM12.1464 19.4186C12.2558 19.4828 12.3782 19.5143 12.5 19.5143C12.6218 19.5143 12.7442 19.4828 12.8535 19.4186C14.0013 18.7459 15.9166 17.5066 17.5479 15.8873C19.173 14.2742 20.556 12.2445 20.556 9.99213C20.556 7.49919 18.4567 5.48597 15.894 5.4857L12.1464 19.4186Z'
                    fill='#AFB9CA'
                    stroke='#AFB9CA'
                    strokeWidth='0.486919'
                  />
                </Svg>

                <Text style={{ fontSize: 12, color: '#767676' }}>5</Text>
              </View>
            </View>

            {/* Replies on the commnet */}
            <View style={styles.commentNameContainer}>
              <View style={[styles.commentNameContainerLeft, { marginLeft: 30 }]}>
                <Svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <Circle cx='17' cy='17' r='17' fill='#FBB0AE' />
                </Svg>

                <Text style={styles.name}>ㅇㅅㅇ </Text>

                <Text style={styles.dateText}>1일전</Text>
              </View>

              <View>
                <Svg width='12' height='3' viewBox='0 0 12 3' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <Circle cx='6' cy='1.5' r='1.5' fill='#AFB9CA' />
                  <Circle cx='10.5' cy='1.5' r='1.5' fill='#AFB9CA' />
                  <Circle cx='1.5' cy='1.5' r='1.5' fill='#AFB9CA' />
                </Svg>
              </View>
            </View>

            <View style={[styles.commentText, { marginLeft: 50 }]}>
              <Text>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</Text>

              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <Path
                    d='M17.2407 14.5495L17.086 14.4095C18.4964 12.8514 19.1819 11.366 19.1819 9.99213C19.1819 8.2563 17.7151 6.82894 15.894 6.82894C14.7349 6.82894 13.6865 7.39861 13.0846 8.34809L17.2407 14.5495ZM17.2407 14.5495L17.086 14.4095C15.9476 15.6672 14.3689 16.9239 12.5003 18.0562C10.6317 16.9239 9.05317 15.6672 7.91451 14.4095C6.50392 12.8515 5.81864 11.366 5.81864 9.99213C5.81864 8.2563 7.28544 6.82894 9.10655 6.82894C10.2657 6.82894 11.3139 7.39868 11.9161 8.34836L11.9161 8.34839M17.2407 14.5495L11.9161 8.34839M11.9161 8.34839C12.0428 8.54813 12.265 8.66633 12.5003 8.66633M11.9161 8.34839L12.5003 8.66633M12.5003 6.89943C13.3725 6.00071 14.5872 5.48583 15.8934 5.4857L12.5003 6.89943ZM12.5003 6.89943C11.6279 6.00037 10.4132 5.4857 9.10655 5.4857C6.54389 5.4857 4.44404 7.49875 4.44404 9.99213C4.44404 12.2444 5.82703 14.274 7.45221 15.8871C9.08348 17.5064 10.9986 18.7457 12.1463 19.4185L12.5003 6.89943ZM12.5003 8.66633C12.7352 8.66633 12.9578 8.54839 13.0844 8.34833L12.5003 8.66633ZM12.1464 19.4186C12.2558 19.4828 12.3782 19.5143 12.5 19.5143C12.6218 19.5143 12.7442 19.4828 12.8535 19.4186C14.0013 18.7459 15.9166 17.5066 17.5479 15.8873C19.173 14.2742 20.556 12.2445 20.556 9.99213C20.556 7.49919 18.4567 5.48597 15.894 5.4857L12.1464 19.4186Z'
                    fill='#AFB9CA'
                    stroke='#AFB9CA'
                    strokeWidth='0.486919'
                  />
                </Svg>

                <Text style={{ fontSize: 12, color: '#767676' }}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.addCommentContainer}>
        <View style={styles.column}>
          <Svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <Path
              d='M3.00165 19.9998C2.16831 19.9998 1.45998 19.7081 0.876648 19.1248C0.293315 18.5414 0.00164795 17.8331 0.00164795 16.9998V2.99976C0.00164795 2.16642 0.293315 1.45809 0.876648 0.874756C1.45998 0.291423 2.16831 -0.000244141 3.00165 -0.000244141H17.0016C17.835 -0.000244141 18.5433 0.291423 19.1266 0.874756C19.71 1.45809 20.0016 2.16642 20.0016 2.99976V16.9998C20.0016 17.8331 19.71 18.5414 19.1266 19.1248C18.5433 19.7081 17.835 19.9998 17.0016 19.9998H3.00165ZM3.00165 17.9998H17.0016C17.285 17.9998 17.5223 17.9038 17.7136 17.7118C17.9056 17.5204 18.0016 17.2831 18.0016 16.9998V2.99976C18.0016 2.71642 17.9056 2.47876 17.7136 2.28676C17.5223 2.09542 17.285 1.99976 17.0016 1.99976H3.00165C2.71831 1.99976 2.48065 2.09542 2.28865 2.28676C2.09732 2.47876 2.00165 2.71642 2.00165 2.99976V16.9998C2.00165 17.2831 2.09732 17.5204 2.28865 17.7118C2.48065 17.9038 2.71831 17.9998 3.00165 17.9998ZM4.00165 15.9998L8.00165 11.9998L9.80165 13.7748L12.0016 10.9998L16.0016 15.9998H4.00165ZM6.00165 7.99976C5.45165 7.99976 4.98098 7.80376 4.58965 7.41176C4.19765 7.02042 4.00165 6.54976 4.00165 5.99976C4.00165 5.44976 4.19765 4.97909 4.58965 4.58776C4.98098 4.19576 5.45165 3.99976 6.00165 3.99976C6.55165 3.99976 7.02265 4.19576 7.41465 4.58776C7.80598 4.97909 8.00165 5.44976 8.00165 5.99976C8.00165 6.54976 7.80598 7.02042 7.41465 7.41176C7.02265 7.80376 6.55165 7.99976 6.00165 7.99976Z'
              fill='#919EB6'
            />
          </Svg>
        </View>

        <View style={[styles.column, styles.inputContainer]}>
          <TextInput style={styles.input} placeholder='댓글을 남겨주세요.' placeholderTextColor='#BDBDBD' />
        </View>

        <View style={[styles.column, styles.submitContainer]}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>등록</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  parentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  descriptionArea: {
    padding: 10,
  },

  image: {
    height: 250,
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

  commentArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    paddingLeft: 10,
    paddingRight: 15,
  },

  commentNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  commentNameContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    marginLeft: 10,
  },

  dateText: {
    color: '#A5A5A5',
    marginLeft: 5,
  },

  commentText: {
    marginTop: 10,
    marginLeft: 35,
  },

  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  column: {
    flex: 1,
  },
  inputContainer: {
    marginRight: 8,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    fontSize: 14,
    color: '#333333',
  },
  submitContainer: {
    marginLeft: 8,
    alignItems: 'flex-end',
  },
  submitButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  submitText: {
    fontSize: 14,
    color: '#848484',
  },
});

export default BookDetailsScreen;
