import React from 'react';
import { TouchableOpacity, Button, FlatList, TextInput, Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigateToScreen } from '../redux/actions';

export default function Screen02() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name); // Lấy tên từ Redux
  const tasks = useSelector((state) => state.tasks); // Lấy danh sách nhiệm vụ từ Redux

  const handleBack = () => {
    dispatch(navigateToScreen('Screen01'));
  };

  const handleNext = () => {
    dispatch(navigateToScreen('Screen03'));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            resizeMode="cover"
            source={require('../assets/tick.png')}
          />
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text> {/* Sử dụng item.name */}
        </View>
        <TouchableOpacity>
          <Image
          style={{ width: 20, height: 20 }}
          resizeMode="cover"
          source={require('../assets/book.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageTop}
        resizeMode="cover"
        source={require('../assets/status.png')}
      />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={{ fontSize: 30 }}>←</Text>
        </TouchableOpacity>
        <Image
          style={{ width: 40, height: 40, marginLeft: 100 }}
          resizeMode="cover"
          source={require('../assets/ava.png')}
        />
        <View>
          <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Hey {name}</Text>
          <Text>Have a great day ahead</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="cover"
          source={require('../assets/search.png')}
        />
        <TextInput
          placeholder="Search"
          style={{ marginLeft: 10, color: 'silver' }}
          underlineColorAndroid="transparent"
        />
      </View>
      
      <FlatList
        data={tasks} // Sử dụng danh sách nhiệm vụ từ Redux
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
      <View style={{ width: 30, alignSelf: 'center', marginTop: 10 ,marginBottom:10}}>
        <Button title="+" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTop: {
    marginBottom: 10,
    width: '100%',
    height: 30,
    paddingTop: 0,
  },
  inputContainer: {
    marginTop: 30,
    padding: 5,
    marginBottom: 30,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    width: '80%',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: 'silver',
    borderRadius: 5,
  },
});
