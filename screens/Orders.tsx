import {StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, Button, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context' 

const Orders = () => {


  const [form, setForm] = useState({
    name: '',
    detail: '',
  })

  const theme = useTheme()


  const onSubmit = async() => {

       const response = await fetch('https://northwind.vercel.app/api/categories', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: form.name,
    description: form.detail,
  }),
});
setForm({
  name: form.name,
  detail: form.detail,
})
return response.json()

  }
  return (

    <SafeAreaView style = {styles.container}>
      <Text style ={{ padding:10, backgroundColor:theme.colors.secondary, color:'white'}} variant='headlineMedium'>Add category</Text>
        <SafeAreaView style={styles.textInputs}>
          <TextInput label={'Category name'} placeholder='Category name' onChangeText={(text)=> setForm({...form, name : text })}/>
          <TextInput label={'Detail'} placeholder=' Category detail' onChangeText={(text) => setForm({...form, detail:text})}/>
        <SafeAreaView style={styles.button}>
          <Button theme={{colors: {primary: theme.colors.primary}}} mode='contained' onPress={() => onSubmit()}>Submit</Button>
        </SafeAreaView>
        </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    textInputs: {
      flex:2,
      marginTop: 10
    },
    button: {
      flex:1,
      alignItems: 'center',
      marginTop:10
    }
  });

export default Orders