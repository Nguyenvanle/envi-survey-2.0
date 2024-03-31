import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        contentContainer: {
          marginLeft: -10,
        },
        container: {
          flex: 1,
          padding: 20,
          backgroundColor: Colors.background,
          alignItems: "center",
          justifyContent: "center",
          gap:20,
        },
        header: {
        },
        body: {
          flex: 1,
          width: "auto",
          height: "auto",
          minWidth: 380,
          minHeight: 650,
          maxWidth: 380*3,
          maxHeight: 650*3,
          paddingVertical: 16,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 20, 
          flexShrink: 0,
      
        },
        subMainFrame: {
          display: 'flex',
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
        },
        subFrame: {
          display: 'flex',
          paddingVertical: 10,
          paddingHorizontal: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap:10,
        },
        RectangleShape: {
          minWidth: 300,
          width: "auto",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          flexDirection: "column",
          alignSelf: "stretch",
        },
        SmallRectangleShape: {
          minWidth:'auto',
          width: "auto",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          flexDirection: "column",
          alignSelf: 'stretch',
          paddingHorizontal:20,
        },
        vector: {
          minWidth: 250,
          width: "auto",
          height: 0,
          alignSelf: "stretch",
          borderWidth: 0.5,
        },
        colorMainVector: {
          borderColor: Colors.black,
        },
        colorVector: {
          borderColor: "#222831",
        },
        MainShape: {
          backgroundColor: Colors.green,
          paddingTop: 10, // Giá trị padding cho tất cả các hướng
          paddingRight: 20, // Giá trị padding bên phải
          paddingBottom: 20, // Giá trị padding bên dưới
          paddingLeft: 20, // Giá trị padding bên trái
        },
        WhiteShape: {
          backgroundColor: Colors.white,
          paddingTop: 10, // Giá trị padding cho tất cả các hướng
          paddingRight: 16, // Giá trị padding bên phải
          paddingBottom: 10, // Giá trị padding bên dưới
          paddingLeft: 16, // Giá trị padding bên trái
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        },
        linkShape: {
          backgroundColor: Colors.white,
          paddingHorizontal:7,
          paddingVertical:7,
        },
        memberShape: {
          display: 'flex',
          width: 'auto',
          paddingVertical: 'auto',
          paddingHorizontal: 15,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
          marginBottom: 'auto',
        },
        subTittle: {
          height: 18,
          alignSelf: "flex-start",
          color: '#00ADB5',
          fontFamily: 'Poppins',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 16 * 1.1,
        },
        aboveInfor: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch', 
        },
        mainText: {
          color: '#222831',
          fontFamily: 'Poppins',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 16 * 1.4,
          alignSelf: "flex-start",
        },
        text: {
            color: '#222831',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 14 * 1.4, // line height based on font size
            alignSelf: "flex-start",
            width: "auto",
        },
        subItem: {
          display: "flex",
          width: 270,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: 'stretch', 
          gap: 12,
        },
        itemText: {
          fontFamily: 'Poppins',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 12 * 1.4, // line height based on font size
        },
        smallIcon: {
          width: 15,
        height: 15,
        },
        MediumIcon: {
          width: 23,
          height: 23,
        },
        avatar: {
          width:45,
          height:45,
          marginBottom: 'auto',
        },
        itemComponnent: {
          display: "flex",
          width: "auto",
          alignItems: "center",
          gap: 6,
          flexDirection: "row",
        },
        InforMember: {
          display: 'flex',
          minWidth: 150,
          width: 'auto',
          height: 'auto',
          paddingVertical: 'auto',
          paddingHorizontal: 'auto',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginVertical: 10,
          flex: 1,
        },
        titleDescription: {
          fontFamily: 'Poppins',
          fontSize: 15,
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: 13 * 1.4,
        },
        contentDescription: {
          width: 270,
          height: 'auto',
          flexShrink: 0,
          color: '#4E4E4E',
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: 13,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 13 * 1.4,
        },
        destinationText: {
          color: '#0048B5',
          textAlign: 'center',
         fontFamily: 'Poppins',
         fontSize: 20,
         fontStyle: 'normal',
         fontWeight: '600',
         lineHeight: 24, // Height of the text line, adjust as needed
      },
})