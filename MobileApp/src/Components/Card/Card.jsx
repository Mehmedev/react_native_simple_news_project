import React from 'react'
import { allstyles } from './Card.style';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

const Card = ({title}) => {
  return (
    <View style={allstyles.card_container}>
      <Text style={allstyles.card_title}>kişi: {title}</Text>
      <Text style={allstyles.card_text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        eaque!
      </Text>
      <TouchableOpacity style={allstyles.button_container} onPress={()=>Alert.alert("Hello alien!")}>
        <Text style={allstyles.button_text}>Liked</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card