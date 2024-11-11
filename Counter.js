import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32 }}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default Counter;
