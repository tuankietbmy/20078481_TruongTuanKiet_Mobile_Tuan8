import React, { useState } from 'react';
import { TouchableOpacity, Button, TextInput, Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigateToScreen, addTask } from '../redux/actions';

export default function Screen03() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name); // Lấy tên từ Redux
  const [jobInput, setJobInput] = useState(''); // State để lưu giá trị ô input

  const handleBack = () => {
    dispatch(navigateToScreen('Screen02'));
  };

  const handleFinish = () => {
    if (jobInput) {
      dispatch(addTask(jobInput)); // Thêm nhiệm vụ vào Redux
      setJobInput(''); // Đặt lại giá trị ô input
      dispatch(navigateToScreen('Screen02')); // Chuyển về Screen02
    } else {
      alert('Please enter a job!'); // Cảnh báo nếu ô input trống
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageTop}
        resizeMode="cover"
        source={require('../assets/status.png')}
      />
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Image
          style={{ width: 40, height: 40, marginLeft: 50 }}
          resizeMode="cover"
          source={require('../assets/ava.png')}
        />
        <View style={{ marginRight: 50 }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Hey {name}</Text>
          <Text>Have a great day ahead</Text>
        </View>
        <TouchableOpacity onPress={handleBack}>
          <Text style={{ fontSize: 30 }}>←</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 30, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}>
        <Image
          style={{ width: 20, height: 20 }}
          resizeMode="cover"
          source={require('../assets/tick.png')}
        />
        <TextInput
          placeholder="Input your job"
          style={{ marginLeft: 10, color: 'silver' }}
          underlineColorAndroid="transparent"
          value={jobInput} // Liên kết giá trị ô input với state
          onChangeText={setJobInput} // Cập nhật state khi nhập
        />
      </View>
      
      <View style={{ width: 100, alignSelf: 'center', marginTop: 10 }}>
        <Button title="Finish →" onPress={handleFinish} />
      </View>
      <Image
        style={styles.imageCenter}
        resizeMode="cover"
        source={require('../assets/notebook.png')}
      />
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
  imageCenter: {
    marginTop:30,
    width: 200,
    height: 200,
    alignSelf: 'center',
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
});
