import { View } from 'react-native'
import React, { useState } from 'react'
import { useTheme, Text, TextInput, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const UpdateScreen = ({route}:any) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
  })

  const onUpdate = async (id: any) => {

    const response = await fetch(`https://northwind.vercel.app/api/categories/${id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: form.id,
    name: form.name,
    description: form.description,
  }),
});
setForm({...form,
  id: selectedCategory.id,
  name: form.name,
  description: form.description,
})
  return response.json()
}
  const theme = useTheme()

  const selectedCategory = route.params.selectedCategory

  return (
    <SafeAreaView style = {{backgroundColor: theme.colors.secondaryContainer, borderRadius:16,padding:8,margin:8}}>
      <Text style={{fontWeight:'bold'}} variant='displaySmall'>{selectedCategory.name}</Text>
      <Text variant='headlineMedium'>{selectedCategory.description}</Text>
      <Text variant='titleLarge'>id: {selectedCategory.id}</Text>
      <SafeAreaView>
      <TextInput label="Name" onChangeText={(text) => setForm({...form, name: text})}></TextInput>
      <TextInput label="Description"  onChangeText={(text) => setForm({...form, description: text})}></TextInput>
      </SafeAreaView>
      <Button theme={{colors: {primary: theme.colors.primary}}} mode='contained' onPress={() => onUpdate(selectedCategory.id)}>Submit</Button>
    
    </SafeAreaView>

    
  )
}

export default UpdateScreen