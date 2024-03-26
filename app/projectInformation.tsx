import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity } from 'react-native'//press world "rnf" to create form quickly
import React from 'react'
import Colors from '@/constants/Colors';
import { description } from '@/constants/Styles';
import { Link } from 'expo-router';
import samplingPeriod from './samplingPeriod';
import { FlipInEasyX } from 'react-native-reanimated';
export default function projectInformation() {
  return (
    <View style ={styles.container}>
      <View style = {styles.body}>

        <View style = {styles.subMainFrame}>
          <View style = {StyleSheet.compose(styles.RectangleShape,styles.MainShape)}>
            <View style= {styles.aboveInfor}>
              <Text style={styles.mainText}>Khảo sát đất đô thị khu vực 91B</Text>
              <Text style={styles.text}>Mã dự án #456431</Text>
            </View>
            <View style = {StyleSheet.compose(styles.vector, styles.colorMainVector)}></View>
          </View>
        </View>

        <View style = {styles.subFrame}>
          <Text style = {styles.subTittle}>Thời gian thực hiện</Text>
          <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
            
            <View style = {styles.aboveInfor}>
              
              <View style = {styles.subItem}>

                <View style = {styles.itemComponnent}>
                  <Image
                    source={require("@/assets/images/green-clock.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.green})}>Start: 19/03/2024</Text>
                </View>

                <View style = {styles.itemComponnent}>
                <Image
                 source={require("@/assets/images/red-clock.png")}
                  style = {styles.smallIcon}>
                </Image>
                <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.red})}>Start: 25/04/2024</Text>
                </View>      
              </View>
            </View>
            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
              <View style={[styles.itemComponnent, {width: 'auto'}]}>
              <Image
                    source={require("@/assets/images/blue-clock.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.blue})}>Còn 1 tháng 7 ngày 24' 12' 45'</Text>
              </View>
          </View>
        </View>

        <View style = {styles.subFrame}>
          <Text style = {styles.subTittle}>Tiến độ dự án</Text>
          <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>

            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Image
                    source={require("@/assets/images/green-paper.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.green})}>Tổng biểu mẫu hoàn thành: 40/160</Text>
                </View> 
            </View>

            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Image
                    source={require("@/assets/images/red-paper.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.red})}>Số lượng biểu mẫu còn lại: 120</Text>
                </View> 
            </View>


            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
              <View style={[styles.itemComponnent, {width: 'auto'}]}>
              <Image
                    source={require("@/assets/images/progress.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.gray})}>Tiến độ: 25.0%</Text>
              </View>
          </View>
        </View>

        <View style = {styles.subFrame}>
          <Text style = {styles.subTittle}>Nhân sự đảm nhiệm</Text>
          <View style = {StyleSheet.compose(styles.RectangleShape, styles.memberShape)}>
            <View style = {styles.aboveInfor}>
                <View style = {styles.subItem}>

                  <View style = {styles.itemComponnent}>
                    <Image
                    source={require("@/assets/images/avatar.png")}
                     style = {styles.avatar}>
                    </Image>
                  </View>

                  <View style = {styles.itemComponnent}>
                    <View style = {styles.mainText}>Lê Dương Anh Tú</View>
                  </View>
                </View> 
            </View>
            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
              <View style={[styles.itemComponnent, {width: 'auto'}]}>
              <Image
                    source={require("@/assets/images/progress.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.gray})}>Tiến độ: 25.0%</Text>
              </View>
          </View>
        </View>


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
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
    paddingHorizontal: 36,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // To mimic gap between elements, since React Native doesn't support gap directly
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
  },
  vector: {
    minWidth: 250,
    width: "auto",
    height: 0,
    alignSelf: "stretch",
    borderWidth: 0.5,
  },
  colorMainVector: {
    borderColor: '#EEE',
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
    fontSize: 16,
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
  avatar: {
    width:45,
    height:45,
    marginBottom: 10,
  },
  itemComponnent: {
    display: "flex",
    width: "auto",
    alignItems: "center",
    gap: 6,
    flexDirection: "row",
  },
  memberShape: {
    display: 'flex',
    width: 312.99,
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
  }
})