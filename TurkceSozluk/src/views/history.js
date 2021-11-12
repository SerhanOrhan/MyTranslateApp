import { StatusBar, Text } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import React from "react";
import Box from "../components/box";
import {useFocusEffect} from "@react-navigation/native";

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )
  return (
    <Box  as ={SafeAreaView} flex={1}>
      <Text>Arama Geçmişi</Text>
    </Box>
  );
}
export  default  HistoryView;
