import React from 'react';
import {
  View,
  Text,
  StyleSheet,
    Platform
} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
  return (
      <View>
        <Text>Place list here</Text>
      </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
          title='Add Place'
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace')
          }}
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({});

export default PlacesListScreen;