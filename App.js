import React, { useState } from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
// import Landing from './components/Landing';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: "001", text: 'Barako'},
    {id: "002", text: 'Arabica'},
    {id: "003", text: 'Exelsa'},
    {id: "004", text: 'Italian'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = textInput => {
    if(!textInput){
      Alert.alert('Error', "Please enter an item");
    }else{
      setItems(prevItems => {
        return [{id: "000"+textInput, textInput}, ...prevItems];
      });
    }
  }

  return (    
    <View style={styles.container}>
      <Header title="Jake App" name="Name of the Component"/>
      {/* <Landing /> */}
      <Text style={styles.text}>Jake App12 </Text> 
      <Text style={styles.text}>Jake App12 </Text> 
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;