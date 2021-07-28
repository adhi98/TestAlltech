import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Input,
  Card,
} from 'native-base';
import Icon from 'react-native-ionicons';
// create a component
const AlbumScreen = props => {
  const dummy = [
    {
      img: 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/00/f6/64/00f66459-9fb2-de35-7172-4a31ff6da8d9/Digital_Cover_D.O._Empathy_-_The_1st_Mini_Album.jpg/55x55bb.png',
      popularity: 90,
    },
    {
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/00/f6/64/00f66459-9fb2-de35-7172-4a31ff6da8d9/Digital_Cover_D.O._Empathy_-_The_1st_Mini_Album.jpg/60x60bb.png',
      popularity: 50,
    },
  ];

  const detail = props.navigation.getParam('detail');

  return (
    <Container>
      <Header style={{height: 90, backgroundColor: 'white'}}>
        <Body style={{flex: 1, justifyContent: 'center'}}>
          <Text>Album Dee Gees</Text>
        </Body>
      </Header>
      <View style={styles.containerStyle}>
        <FlatList
          data={detail}
          keyExtractor={(item, index) => item.attributes.height}
          renderItem={({item}) => (
            <TouchableNativeFeedback onPress={() => {}}>
              <Card style={styles.listDetailCard}>
                <Image source={{uri: item.label}} style={styles.imgStyle} />
                <Text style={styles.txtPopularityStyle}>
                  Popularity: {item.attributes.height}
                </Text>
              </Card>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  listDetailCard: {
    width: '99%',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#F4F8F9',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  txtPopularityStyle: {
    alignSelf: 'center',
    fontSize: 18,
  },
});

//make this component available to the app
export default AlbumScreen;
