import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

interface User {
  id: string;
  name: string;
}
const MockingApiCall = () => {
  const [user, setUser] = useState<User[]>([]);
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <View>
      <Text>Users List:</Text>
      {user.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
};

export default MockingApiCall;

const styles = StyleSheet.create({});
