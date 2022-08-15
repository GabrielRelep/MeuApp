import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,Image, Text, View, TouchableOpacity } from 'react-native';
import Home from './src/pages/Home';
import image from './src/assets/fundo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
import { useFonts, Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import seta from './src/assets/seta.png'
export default function App() {
  const [web,setWeb] = useState(false)
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
     <View style={styles.container}>
     
     {
      web?(
        <WebView source={{ uri: 'https://weptek.xyz/' }} />
      ):(
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text  style={styles.text}>
      Inicie sua{`\n`}viagem{`\n`}com estilo!
      </Text>
      <MaterialIcons style={{
        marginLeft:'45%',
        marginTop:'100%',
        marginBottom:20
      }} name="keyboard-arrow-down" size={45} color="white" />
      <TouchableOpacity style={styles.button} onPress={()=>setWeb(true)}>
        <Text style={{
          fontSize: 25,
          color: 'white',
          marginLeft:20,
          fontFamily:'Comfortaa_400Regular'

        }}>Iniciar</Text>
      <MaterialIcons style={{marginRight:30}} name="arrow-forward-ios" size={30} color='white' />

      </TouchableOpacity>
     </ImageBackground>
      )
     }
     </View>
     
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
  },
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft:20,
    marginTop:120 ,
    fontFamily:'Comfortaa_400Regular'
  },
  button:{
    backgroundColor:'transparent',
    width: '80%',
    marginLeft:'10%',
    height: 50,
    borderRadius:10,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderWidth:1,
    borderColor:"white",
  
  }

});


