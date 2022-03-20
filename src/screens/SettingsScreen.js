import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, TouchableOpacity,StatusBar } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://media.tenor.com/images/1c39f2d94b02d8c9366de265d0fba8a0/tenor.gif',
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

export default SettingsScreen;
