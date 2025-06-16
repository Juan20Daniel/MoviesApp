import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  poster: string;
  originalTitle:string;
  title:string;
}

export const MovieHeader = ({poster, originalTitle, title}:Props) => {
  const { height:screenHight } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <> 
      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Regresar</Text>
        </Pressable>
      </View>
      <View style={{...styles.imageContainer, height:screenHight * 0.7}}>
        <View style={styles.imageBorder}>
          <Image 
            source={{uri:poster}}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{originalTitle}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});