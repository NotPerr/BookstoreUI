import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, TouchableOpacity,StatusBar } from 'react-native';

const BooksScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media2.giphy.com/media/SajdfSNg6f8rK/giphy.gif',
            }}
          />
    
          
          <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DAF7A6',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text: {
      color: '#006600',
      fontSize: 40,
      fontFamily: 'Verdana'
    },
    image: {
      width: 200,
      height: 200  
    }
  });

export default BooksScreen;