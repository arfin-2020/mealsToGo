import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts as useLato
} from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrasture/navigation";
import { theme } from "./src/infrasture/themes";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurant.context";



export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
