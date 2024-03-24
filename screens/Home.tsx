import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import { data } from '../constants'
import Profil from '../components/Profil'

const Home = ({ navigation }) => {

    const [profils, setProfils] = useState([])

    useEffect(() => {
        setProfils(data)
    }, [])

    const handlePress = (item) => {
      navigation.navigate('Treinador', item)
    }

    const renderItem = ({ item }) => {
        return <Profil 
            img={item.profilImage}
            name={item.name}
            description={item.description}
            program={item.timeProgram}
            title={item.title}
            pressFn={() => handlePress(item)}
        />
    }

  return (
    <View style={styles.container}>
      <FlatList 
        data={profils}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
})