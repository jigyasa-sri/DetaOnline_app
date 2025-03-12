import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const statusBarHeight =
    Platform.OS === "android" ? (RNStatusBar.currentHeight || 0) + 3 : 0;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: statusBarHeight }]}>
      <StatusBar style="auto" />

      {isLoading ? (
        <View style={styles.splashContainer}>
          <Image
            source={require("./assets/asdol_flash.png")}
            style={styles.splashImage}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <WebView source={{ uri: "https://asdolens.com" }} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  splashImage: {
    resizeMode: "contain",
  },
  container: {
    flex: 1,
  },
});
