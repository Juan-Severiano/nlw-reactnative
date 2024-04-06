import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Roboto_700Bold, Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto'

import '@/styles/global.css'
import { Loading } from "@/components/loading";

export default function Layout() {
 const [fontsLoaded] = useFonts({
    Roboto_700Bold, Roboto_400Regular, Roboto_500Medium
  })
  
  return (
    <>
      <StatusBar style="light" />
      { fontsLoaded ? <Slot /> : <Loading />}
    </>
  )
}
