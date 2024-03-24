import { Pressable, StyleSheet, Text, View, Image, Button } from "react-native";
import { Colors } from "../utils/css";
import { ProfilProps } from "../utils/types";

const Profil = (props: ProfilProps) => {
  const { img, description, name, pressFn, title } = props;

  const truncateStr = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? .5 : 1,
        },
        styles.container,
      ]}

      onPress={pressFn}
    >
      <View>
        <Image source={img} style={styles.img} />
      </View>
      <View style={styles.bioContainer}>
        <View style={{ gap: 5 }}>
          <Text style={styles.name}> {name} </Text>
          <Text style={styles.title}> {title} </Text>
        </View>
        <View>
          <Text> {truncateStr(description, 100)} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  img: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: 15
  },
  bioContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
  },
  title: {
    fontSize: 13,
    fontWeight: "300",
  },
});
