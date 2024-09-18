import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "../style";

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
  };

  const handleOpenLink = () => {
    Linking.openURL(data).catch((err) => console.error("Failed to open URL:", err));
  };

  if (hasPermission === null) {
    return <Text style={styles.text}>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <View style={styles.ScannerContainer}>
      <StatusBar barStyle="dark-content" />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <View style={styles.ScannerresultContainer}>
          <Text style={styles.ScannerresultText}>Scanned Code:</Text>
          <TouchableOpacity onPress={handleOpenLink}>
            <Text style={styles.ScannercodeData}>{data}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Scannerbutton}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.ScannerbuttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}