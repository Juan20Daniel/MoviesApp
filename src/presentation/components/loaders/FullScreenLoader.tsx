import { ActivityIndicator, Text, View } from 'react-native';

export const FullScreenLoader = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
            <ActivityIndicator size={100} color={'indigo'} />
            <Text style={{textAlign:'center', marginTop:10, fontSize: 18}}>Cargando...</Text>
        </View>
    );
}
