import React from 'react'
import { Appbar, Text} from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Header() {

return (
    <Appbar.Header style={styles.container} />
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor:'#2586c1',
    height:'2%',
  },
})

