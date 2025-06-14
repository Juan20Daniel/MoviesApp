import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ movies, height=270 }:Props) => {
    return (
        <View style={{height}}>
            <Text style={styles.title}>Posters</Text>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.boxMovies}>
                    {movies.map((movie, index) => (
                        <MoviePoster
                            marginLeft={!index}
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 10, 
        fontSize: 16
    },
    boxMovies: {
        flexDirection:'row', 
    }
})