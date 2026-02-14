import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Habits() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Habits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f6fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
});
