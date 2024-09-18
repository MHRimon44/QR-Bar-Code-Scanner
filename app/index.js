import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // For icons
import styles from "../style";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Enhanced Title */}
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Welcome to QR Scanner App!</Text>

      {/* Button with icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/ScannerScreen")}
      >
        <Ionicons name="qr-code-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Open Scanner</Text>
      </TouchableOpacity>
    </View>
  );
}
