import React from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { peliculasEnCine, isLoading } = useMovies();
  const {top } = useSafeAreaInsets();

  if (isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignContent:'center'}} >
        <ActivityIndicator color="red" size={10} />
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={{marginTop:top + 20}}>

      <View style={{
        height: 440,
      }}>
        {/* Carousel principal */}
          <Carousel layout= {'default'}
            data={peliculasEnCine}
            renderItem={({item }: any) => <MoviePoster movie={item} /> }
            sliderWidth={windowWidth}
            itemWidth={300}
          />
      </View>

      {/* Peliculas principales */}
      <View style={{backgroundColor: 'red', height:260}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color:'black'}}>En cine</Text>
        <FlatList
         data={peliculasEnCine}
         renderItem={({item }: any) => 
         (
         <MoviePoster movie={item} width={140} height={200}/>
         )
         }
         keyExtractor={(item) => item.id.toString()}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         />
      </View>


    </View>
  </ScrollView>
  );
};
