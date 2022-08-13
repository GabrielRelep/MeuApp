import React from 'react';
import { View,StyleSheet,Text,Image,Linking,TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';
import volante from '../../assets/Vector.png';
import icon1 from '../../assets/icon1.png';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../assets/logo.png'
const Home = () => {

  async function redirectFn(tela){
    



    if(tela==='viagem'){
      await Linking.openURL('https://weptek.xyz/');
    }
    if(tela==='cadastro'){
      await Linking.openURL('https://weptek.xyz/cadastro');
    }
    if(tela==='contato'){
      await Linking.openURL('https://api.whatsapp.com/send?phone=5531985620561&text=Preciso%20de%20informa%C3%A7%C3%B5es');
    }
    if(tela==='insta'){
      await Linking.openURL('https://www.instagram.com/weptek.app/');
    }
    
  }
  return(
    <ScrollView style={styles.container}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:50}}>
    <Image source={logo} style={{marginBottom:20,width:60,height:60}} />
      <TouchableOpacity style={styles.button} onPress={()=>redirectFn('viagem')}>
      <Image source={volante} style={styles.icon}/>
        <Text style={styles.title}>Nova viagem</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color='#944BBB' />

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>redirectFn('cadastro')}>
      <AntDesign name="contacts" size={30} color='#944BBB' />

          <Text style={styles.title}>Cadastro</Text>
          <MaterialIcons name="arrow-forward-ios" size={30} color='#944BBB' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>redirectFn('contato')}>
      <FontAwesome5 name="whatsapp" size={30} color='#944BBB' />
          <Text style={styles.title}>Contato</Text>
          <MaterialIcons name="arrow-forward-ios" size={30} color='#944BBB' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>redirectFn('insta')}>
      <Ionicons name="logo-instagram" size={35} color='#944BBB' />
        <Text style={styles.title}>Instagram</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color='#944BBB' />
    </TouchableOpacity>
    </View>
     
      
    </ScrollView>
  );
}
const colorBackground = '#944BBB'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorBackground ,
  },
  title:{
    fontSize:28
  },
  button:{
    width:"90%",
    backgroundColor:'#FFFFFF',
    height: 140,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:20
  },
  title:{
    color: colorBackground,
    fontSize:24,
   padding: 20,

  },
  icon:{
   width: 35,
   height: 35,


  }
});
export default Home;