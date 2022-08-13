import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import Home from './src/pages/Home';
import image from './src/assets/fundo.jpg';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
export default function App() {
  const [web,setWeb] = useState(false)
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
      <TouchableOpacity style={styles.button} onPress={()=>setWeb(true)}>
        <Text style={{
          fontSize: 25,
          color: 'white',
          marginLeft:20,
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
    marginTop:70 ,
  },
  button:{
    backgroundColor:'#944BBB',
    width: '80%',
    marginLeft:'10%',
    height: 50,
    borderRadius:10,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'120%'
  
  }

});


