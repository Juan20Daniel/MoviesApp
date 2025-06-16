import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { FullMovie, MovieCast } from "../../../core/entities/movie.entity"
import { Formatter } from "../../../config/helpers/formatter";

interface Props {
    movie:FullMovie;
    cast:MovieCast[];
}

export const MovieDetails = ({movie, cast}:Props) => {
    return (
        <View style={{marginHorizontal:20, marginBottom: 70,}}>
            <View style={{flexDirection:'row'}}>
                <Text>{movie.rating}</Text>

                <Text style={{marginLeft: 5}}>
                    - {movie.genres.map(genero => genero.name).join(', ')}
                </Text>
            </View>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>
                {movie.description}
            </Text>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize:18}}>
                {Formatter.currency(movie.budget)}
            </Text>
            <View style={{marginTop:10, marginBottom: 10}}>
                <Text style={{fontSize: 23, marginVertical: 10, fontWeight: 'bold',}}>
                    Actores
                </Text>
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.castContainter}>
                    {cast.map(cast => (
                        <View style={styles.castBox} key={cast.id}>
                            <View style={styles.avatarBox}>
                                <Image 
                                    source={{uri:cast.avatar}}
                                    style={styles.avatar}
                                />
                            </View>
                            <Text style={styles.castText}>{cast.name}</Text>
                            <Text style={styles.castCaracter}>{cast.caracter}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    castContainter: {
        flexDirection:'row',
        gap: 10,
        height: 'auto',
    },
    castBox: {
        width: 130,
        height: 'auto',
    },
    avatarBox: {
        width: 130,
        height: 160,
    },
    avatar: {
        width:'auto',
        height:'100%',
        borderRadius: 20,
    },
    castText: {
        marginTop:5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center'
    },
    castCaracter: {
        textAlign:'center',
        fontSize: 12,
    }
});
