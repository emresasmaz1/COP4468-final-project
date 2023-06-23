import { FlatList } from 'react-native'
import React, {useEffect,useState} from 'react'
import {Text, Button, MD3LightTheme, useTheme} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

type CategoryData = {
    id: string
    name: string
    description: string
}

type CategoryModel = {
    item: CategoryData;
    onPress: () => void;
    deleteOnPress: () => void;
}

    const Categories = ({navigation}:any) => {

    const [CategoryList, setCategoryList] = useState([])
    const theme = useTheme()
        
   useEffect(() => {
        fetch(`https://northwind.vercel.app/api/categories`)
        .then(res => res.json())
        .then(data =>setCategoryList(data))
    },[])

    const HandleDelete = (item: CategoryData) => {

        setCategoryList(CategoryList.filter((a: CategoryData) => a.id !== item.id))
    }
    
    const Update = (item: CategoryData) => {

        setCategoryList(CategoryList)
    }

    const Category = ({item, onPress, deleteOnPress} : CategoryModel) => (

        <SafeAreaView style ={{ flexDirection: 'row' }}>
                <SafeAreaView style ={{flex:2, margin:14, borderRadius:16}}>
                <Text theme={MD3LightTheme} variant='headlineLarge'>{item.name}</Text>
                <Text style={{fontStyle:'italic'}} theme={MD3LightTheme} variant='titleLarge'>{item.description}</Text>
                </SafeAreaView>
                <SafeAreaView style = {{flex:1, margin:14}}>
            <Button theme={MD3LightTheme} mode='contained' onPress={deleteOnPress}>Delete</Button>
            <Button theme={MD3LightTheme} mode='elevated' onPress={onPress}>Update</Button>
                </SafeAreaView>
        </SafeAreaView>
    )

    const renderItem = ({item}: {item :CategoryData}) => (
            <Category item={item} onPress={()=> navigation.navigate('Update',{ selectedCategory: item})} deleteOnPress={()=> HandleDelete(item)}/>
)
        return (
            <SafeAreaView>
                <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={CategoryList}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <SafeAreaView style={{ height: 1.5, backgroundColor: theme.colors.primaryContainer }} />}
                />
                
            </SafeAreaView>
  )
}

export default Categories