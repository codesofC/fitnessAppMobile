import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Colors } from "../utils/css";
import { useSelector } from "react-redux";

const Liked = ({ navigation }) => {
  const { favorite } = useSelector((state) => state.favorite);

  const handleNavigate = (item) => {
    navigation.navigate("Treinador", item);
  };

  const renderFav = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.6 : 1,
          },
          styles.container,
        ]}
        onPress={() => handleNavigate(item)}
      >
        <View style={styles.profilView}>
          <Image
            source={item.profilImage}
            style={{
              width: 75,
              height: 75,
              borderRadius: 75 / 2,
            }}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, flexWrap: "wrap" }}>
              {" "}
              {item.name}{" "}
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 14, flexWrap: "wrap" }}>
              {" "}
              {item.title}{" "}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", gap: 5 }}>
          <Text style={{ fontWeight: "500" }}> Programa </Text>
          <Text style={styles.button}> {item.timeProgram} </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {favorite.length > 0 ? (
        <View style={{marginHorizontal: 10, marginVertical: 20}}>
          <FlatList
            data={favorite}
            renderItem={renderFav}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <Text>Não tem favoritos</Text>
      )}
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: Colors.textColor,
    marginBottom: 10,
  },
  profilView: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    maxWidth: "50%"
  },
  button: {
    color: Colors.textColor,
    backgroundColor: Colors.mainColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
