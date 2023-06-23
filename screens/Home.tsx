import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { MD3LightTheme, Text, useTheme } from 'react-native-paper'




const Home = () => {
  const theme = useTheme()
  return (
    <SafeAreaView style ={styles.container}>
      <Text style={{margin:1, padding:12, backgroundColor:theme.colors.primary, borderRadius:8, color:'white',alignItems:'center', justifyContent:'center'}} variant='headlineSmall' theme={MD3LightTheme}>Welcome to COP4468 final project!</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
    });

export default Home