import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/css";

type ServiceProps = {
  program: string;
};

const Services = ({ program }: ServiceProps) => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 10,
        alignItems: "flex-start",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "800" }}>Serviços</Text>
      <View style={{width: "100%", alignItems: "center", gap: 20}}>
        <View style={{ gap: 20, width: "100%" }}>
          <View style={styles.table}>
            <Text> Programa </Text>
            <Text> {program} </Text>
          </View>
          <View style={styles.table}>
            <Text> Treino/Semana </Text>
            <Text> 3 </Text>
          </View>
          <View style={styles.table}>
            <Text> Reemboloso até</Text>
            <Text> 1 Mes </Text>
          </View>
        </View>
        <Pressable 
            style={({pressed}) => [
                {
                    opacity: pressed ? .6 : 1
                }
            ]}
        >
          <Text style={styles.button}> Começe hoje </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    color: Colors.textColor,
    backgroundColor: Colors.mainColor,
  },
});
