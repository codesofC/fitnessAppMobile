import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import { Colors } from "../utils/css";
import IconsComp from "../components/IconsComp";
import Services from "../components/Services";
import { useDispatch, useSelector } from "react-redux"

const User = ({ route }) => {
  const [liked, setLiked] = useState(false);

  const {
    name,
    thumbImage,
    title,
    description,
    profilImage,
    photos,
    timeProgram,
    id
  } = route.params;

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorite.favorite) 
  const inFav = favorites.findIndex(item => item.id === id)

  useEffect(() => {
    if(inFav !== -1){
      setLiked(true)
    }else{
      setLiked(false)
    }
  }, [inFav])

  const renderPhotos = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        {
          width: "100%",
          height: 150,
          flexGrow: 1,
          padding: 5,
          flexBasis: 0,
        },
      ]}
    >
      <Image
        source={item}
        style={{ width: "100%", height: "100%", borderRadius: 10 }}
      />
    </Pressable>
  );

  const HeaderFlatListComponent = () => {
    return (
      <>
        <ImageBackground
          source={thumbImage}
          style={styles.header}
          resizeMode="cover"
        >
          <View style={styles.profilContainer}>
            <View style={styles.profilImg}>
              <Image
                source={profilImage}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bioContainer}>
          <View style={styles.bioHeader}>
            <View style={{ gap: 5, maxWidth: "50%" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", flexWrap: "wrap" }}
              >
                {" "}
                {name}{" "}
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "300", flexWrap: "wrap" }}
              >
                {" "}
                {title}{" "}
              </Text>
            </View>
            <IconsComp
              name={liked ? "heart" : "heart-outline"}
              size={25}
              color={liked ? "red" : "black"}
              pressFn={handleDispatch}
            />
          </View>
          <View style={{ gap: 5 }}>
            <View>
              <Text style={{ fontSize: 16, textAlign: "justify" }}>
                {" "}
                {description}{" "}
              </Text>
            </View>
            <View style={styles.socialsNetwork}>
              <IconsComp
                name="logo-instagram"
                size={20}
                color={Colors.mainColor}
              />
              <IconsComp
                name="logo-tiktok"
                size={20}
                color={Colors.mainColor}
              />
              <IconsComp
                name="logo-twitter"
                size={20}
                color={Colors.mainColor}
              />
              <IconsComp
                name="logo-linkedin"
                size={20}
                color={Colors.mainColor}
              />
            </View>
          </View>
        </View>
        <Services program={timeProgram} />
        <View style={{marginTop: 30}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}> Atividades </Text>
        </View>
      </>
    );
  };

  const handleDispatch = useCallback(() => {
    setLiked(!liked)
    dispatch({
      type: "ADDFAV",
      payload: route.params
    })
  }, [dispatch, id])

  return (
    <FlatList
      ListHeaderComponent={HeaderFlatListComponent}
      data={photos}
      renderItem={renderPhotos}
      numColumns={2}
    />
  );
};

export default User;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  profilContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  profilImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: Colors.textColor,
  },
  bioContainer: {
    padding: 10,
    gap: 15,
  },
  bioHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonStyle: {
    padding: 5,
    backgroundColor: Colors.mainColor,
    borderRadius: 5,
    color: Colors.textColor,
  },
  socialsNetwork: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
    alignItems: "center",
  },
});
