import { View, Text, ScrollView } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ movies, height=240 }:Props) => {
  return (
    <View style={{height}}>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={{flexDirection:'row', gap: 10, marginHorizontal: 10}}>
                {movies.map(movie => (
                    <MoviePoster 
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </View>
        </ScrollView>
    </View>
  )
}
