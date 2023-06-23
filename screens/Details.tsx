import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, useTheme} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'


const Details = ({route}:any) => {

const theme = useTheme()

 const selectedItem = route.params.selectedItem

  return (
    <SafeAreaView style = {{backgroundColor: theme.colors.secondaryContainer, borderRadius:14,padding:8,margin:8}}>
      <Text style={{fontWeight:'bold'}} variant='displaySmall'>{selectedItem.name}</Text>
      <Text variant='headlineMedium'>Unit Price: {selectedItem.unitPrice}</Text>
      <Text variant='titleLarge'>Quantity Per Unit: {selectedItem.quantityPerUnit}</Text>
      <Text variant='titleLarge'>Units On Order: {selectedItem.unitsOnOrder}</Text> 
      <Text variant='titleLarge'>Units in stock: {selectedItem.unitsInStock}</Text>
    </SafeAreaView>
  )
}


export default Details