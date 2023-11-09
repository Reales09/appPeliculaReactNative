import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{

}

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  console.log(movie.original_title);
  
  return (
    <View>
        <Text style={{color: 'black'}}>Detail Screen</Text>
    </View>
  );
};
