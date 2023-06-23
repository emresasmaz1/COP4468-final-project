import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {Text, Button, MD3LightTheme, useTheme, TextInput} from 'react-native-paper'
import { SafeAreaView } from "react-native-safe-area-context";

type ProductData = {
    id: number
    name: string
    unitPrice: number
    quantityPerUnit: string
    unitsOnOrder: number
    unitsInStock: number
}

type ItemProps = {
    item: ProductData;
    onPress: () => void;
    onDelete: () => void;
  };

const Products = ({navigation}:any) => {
    const [ProductList, setProductList] = useState([])
    const [error, setError] = useState('')
    
    const theme = useTheme()

      useEffect(() => {
        try {
            fetch(`https://northwind.vercel.app/api/products`)
            .then(res => res.json())
            .then(data =>setProductList(data))

        } catch (error) {
            setError('Could not load data')
        }
        
  }, [])

const HandleDelete = (item: ProductData) => {

    setProductList(ProductList.filter((a: ProductData) => a.id !== item.id))
}
    
  const Item = ({item, onPress, onDelete}: ItemProps) => (
    
    <SafeAreaView style = {{flex:1 ,flexDirection:"row",}}>
        <TouchableOpacity style = {{backgroundColor: theme.colors.secondaryContainer, margin:6, borderRadius:16}} onPress={onPress}>
            <Text variant='titleMedium' theme={MD3LightTheme} style={{margin:10,borderRadius:16}} >{item.name}</Text>
        </TouchableOpacity>
        <SafeAreaView style = {{flex:1, alignItems:'flex-end', margin:6}}>
            <Button theme={MD3LightTheme} mode='contained' onPress={onDelete}>Delete</Button>
        </SafeAreaView>
    </SafeAreaView>
            )

  const renderItem = ({item}: {item :ProductData}) => (

        <Item item={item} onPress={()=> navigation.navigate('Details', {selectedItem: item} )} onDelete={() => HandleDelete(item)}/>
  )
    return (
        <SafeAreaView>
            <FlatList
                keyExtractor = {(item) => item.id.toString()}
                data = {ProductList}
                renderItem = {renderItem}
                ItemSeparatorComponent={() => <SafeAreaView style={{ height: 1.5, backgroundColor: theme.colors.primaryContainer }} />}
            />         
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
    },

    container: {
        flex: 1,
        margin: 10,
        backgroundColor: "lightblue",
        padding: 10,
        marginHorizontal: 8,
        borderRadius: 7,

    },
    button: {
        flex: 1,
        alignItems: "flex-end",
        margin: 10,
        justifyContent:"space-evenly",
    }
})

export default Products;