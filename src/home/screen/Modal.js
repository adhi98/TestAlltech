import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {
  Container,
  Header,
  Footer,
  Content,
  Form,
  Input,
  Item,
  Label,
  Toast,
  Button,
  Left,
  Body,
  Right,
  Title,
  Card,
  CardItem,
} from 'native-base';

// create a component
const ModalComponent = ({
  modal_status,
  action_filter_price,
  action_filter_date,
  action_reset_filter,
}) => {
  return (
    <Modal animationType="none" transparent={true} visible={modal_status}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            width: '80%',
          }}>
          <View>
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Basic Filter Modal
            </Text>
            <Text>1. Filter price more than 7.99</Text>
            <Text>2. Filter date more than 2021-06-18</Text>
          </View>

          <Button
            block
            style={{
              backgroundColor: '#318FC5',
              marginTop: 20,
              width: '80%',
              alignSelf: 'center',
            }}
            onPress={action_filter_price}>
            <Text style={{color: 'white'}}>Filter Price</Text>
          </Button>

          <Button
            block
            style={{
              backgroundColor: 'green',
              marginTop: 20,
              width: '80%',
              alignSelf: 'center',
            }}
            onPress={action_filter_date}>
            <Text style={{color: 'white'}}>Filter Date</Text>
          </Button>

          <Button
            block
            style={{
              backgroundColor: 'pink',
              marginTop: 20,
              width: '80%',
              alignSelf: 'center',
            }}
            onPress={action_reset_filter}>
            <Text style={{color: 'white'}}>Reset Filter</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  styleText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

//make this component available to the app
export default ModalComponent;
