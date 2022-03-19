import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';

const DetailScreen = ({ route }) => {
  const { 
    title, 
    artist,
    stars,
    price,
    url,
    image,
    descriptions
  } = route.params;
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.imgCon}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>



        
        <Text style={styles.priceStyle} >{artist}</Text>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={styles.rating}>
          <View style={styles.imgCon}>
            <Image
              style={styles.starStyle}
              source={{
                uri: stars
              }}
            />
          </View>
          <Text style={styles.score}>4.0/5.0</Text>
        </View>
        <Text style={styles.des}>{descriptions}</Text>
        
        <View style={styles.imgCon}>
        <Text >
        <TouchableOpacity onPress={() => {/* do this */}}>
          <View style={{
              backgroundColor: '#6200EE',
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 4,
              //width: 300,
              //height: 36,
              //flexWrap : 'wrap'
              paddingHorizontal: 10,
              paddingVertical: 5,
              //marginTop: 20
            }}
          >
            <Text style={styles.price }>Buy Now for $46.99</Text>
          </View>
        </TouchableOpacity>
        </Text>
        </View>

        
        
        
      </View>

        
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff'
  },
  imgCon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  imageStyle: {
    height: 300,
    width: 210
  },
  cardContainerStyle: {
    
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  discountStyle: {
    color: '#6099E4',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  priceStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 10,
  },
  titleStyle: {
    textAlign: 'center',
    color: "#666666"
  },
  starStyle: {
    height: 15,
    width: 100,
  },
  rating: {
    flexDirection: "row",
    alignSelf: "center",
    margin: 20
  },
  score: {
    textAlignVertical: 'center',
    marginTop: 20
  },
  des: {
    padding: 10,
    color: "#131313"
  },
  price: {
    color: "#fff",
    fontSize: 25,
    textAlign: 'center',
    
  }
  
});

export default DetailScreen;
