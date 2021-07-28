//import liraries
import React, {Component, useState, useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {
  getDataApi,
  filterDataPrice,
  filterDataDate,
  filterDataText,
} from '../action/homeAction';
import ModalComponent from './Modal';

// create a component
const HomeScreen = props => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);

  const entry = useSelector(state => state.Home.entry);
  const entryBackUp = useSelector(state => state.Home.entryBackUp);

  useEffect(() => {
    console.log('newEntry', entry);
  }, [entry]);

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (search != '') {
      dispatch(filterDataText(entry, search, entryBackUp));
    } else {
      dispatch(getDataApi());
    }
  }, [search]);

  return (
    <Container>
      <Header style={{height: 90, backgroundColor: 'white'}}>
        <Body style={{flex: 1}}>
          <View style={styles.viewInputStyle}>
            <TouchableOpacity
              style={{
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {}}>
              <View>
                <Icon
                  name="search"
                  style={{
                    width: 30,
                    height: 30,
                  }}></Icon>
              </View>
            </TouchableOpacity>

            <Input
              style={styles.inputStyle}
              value={search}
              placeholder="Search here"
              onChangeText={text => setSearch(text)}></Input>
          </View>
        </Body>
        <Right style={{flex: 0.15}}>
          <Button
            style={{backgroundColor: '#E5E5E5'}}
            onPress={() => {
              //filter price
              //dispatch(filterDataPrice(entry));
              //filter date
              // dispatch(filterDataDate(entry));

              setModalVisible(true);
            }}>
            <Text>Filter</Text>
          </Button>
        </Right>
      </Header>
      <View style={styles.containerStyle}>
        <ModalComponent
          modal_status={isModalVisible}
          action_filter_price={() => {
            dispatch(filterDataPrice(entry));
            setModalVisible(false);
          }}
          action_filter_date={() => {
            dispatch(filterDataDate(entry));
            setModalVisible(false);
          }}
          action_reset_filter={() => {
            dispatch(getDataApi());
            setModalVisible(false);
          }}
        />
        <FlatList
          data={entry}
          extraData={entry}
          keyExtractor={(item, index) => item.id.attributes['im:id']}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() => {
                props.navigation.navigate('Album', {
                  detail: item['im:image'],
                });
              }}>
              <Card style={styles.listCard}>
                <Text numberOfLines={1} style={styles.titleStyle}>
                  {item['im:name'].label}
                </Text>
                <Text style={styles.titleStyle}>
                  {item['im:price'].attributes.amount}
                </Text>
                <Text numberOfLines={1} style={{fontSize: 18}}>
                  {/* {item.rights.label} */}
                  {item['im:releaseDate'].attributes.label}
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
  inputStyle: {
    width: '80%',
    padding: 10,
    borderColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    right: 5,
  },
  viewInputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  listCard: {
    width: '99%',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#F4F8F9',
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

//make this component available to the app
export default HomeScreen;
