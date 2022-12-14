import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>Todo List App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0099ff",
    width: "100%",
    height: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    color: "#f9f9f9",
    fontWeight: "600",
    letterSpacing: 0.8,
    fontStyle: "italic",
  },
});

export default Header;
