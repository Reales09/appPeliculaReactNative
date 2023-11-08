import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPLaying,topRated, popular,upcoming, isLoading } = useMovies();
  const {top } = useSafeAreaInsets();

  if (isLoading) {
    return (
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
            data={nowPLaying}
            renderItem={({item }: any) => <MoviePoster movie={item} /> }
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
      </View>

      {/* Peliculas principales */}
      <HorizontalSlider title="Popular" movies={popular} />
      <HorizontalSlider title="Top Rated" movies={topRated} />
      <HorizontalSlider title="Upcoming" movies={upcoming} />


    </View>
  </ScrollView>
  );
};
