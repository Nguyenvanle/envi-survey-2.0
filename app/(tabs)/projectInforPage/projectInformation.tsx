import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity, 
  ScrollView} from 'react-native'//press world "rnf" to create form quickly
import React from 'react'
import Colors from '@/constants/Colors';
import { description } from '@/constants/Styles';
import { Link } from 'expo-router';
import { FlipInEasyX } from 'react-native-reanimated';
import { Tabs } from 'expo-router';
import samplingPeriod from './samplingPeriod';
import {styles} from './myStyles';
export default function projectInformation() {
  return (
    <View style ={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
                  <View style ={styles.InforMember}>
                      <Text style = {styles.mainText}>Lê Dương Anh Tú</Text>
                      <Text style = {StyleSheet.compose(styles.text,{color: Colors.blur_ray})}>B2103572</Text>
                  </View>
                  <View style = {styles.itemComponnent}>
                    <Text style = {StyleSheet.compose(styles.mainText,{color: Colors.dark_orange})}>[Manager]</Text>
                  </View>
                </View> 
            </View>
          </View>

          <View style = {StyleSheet.compose(styles.RectangleShape,styles.linkShape)}>
            <View style= {styles.itemComponnent}>
              <Text style={StyleSheet.compose(styles.mainText,{fontSize:15,marginVertical:0})}>Các thành viên khác</Text>
              
              <View style = {StyleSheet.compose(styles.SmallRectangleShape,{backgroundColor: Colors.green})}>
                <View style = {styles.itemComponnent}>
                <Image
                    source={require("@/assets/images/upload.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style={StyleSheet.compose(styles.text, {color: Colors.white})}>Chi tiết</Text>
                </View>
              </View>

            </View>
          </View>

        </View>

        <View style = {styles.subFrame}>
          <Text style = {styles.subTittle}>Mô tả dự án</Text>

          <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {StyleSheet.compose(styles.titleDescription, {color: Colors.purple})}>Đơn vị tài trợ</Text>
                </View> 
            </View>

            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {StyleSheet.compose(styles.titleDescription, {color: Colors.black})}>Viện Nghiên Cứu Biến Đổi Khí Hậu KLD</Text>
                </View> 
            </View>
          </View>

          <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {StyleSheet.compose(styles.titleDescription, {color: Colors.success})}>Nhiệm Vụ</Text>
                </View> 
            </View>

            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {styles.contentDescription}>Thu thập mẫu đất canh tác và đất phù sa,  phân tích mối liên hệ giữa đa dạng sinh học của đất và sự biến đổi khí hậu.</Text>
                </View> 
            </View>
          </View>

          <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {StyleSheet.compose(styles.titleDescription, {color: Colors.red})}>Mục Tiêu</Text>
                </View> 
            </View>

            <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
            
            <View style = {styles.aboveInfor}>
                <View style = {styles.itemComponnent}>
                  <Text style = {styles.contentDescription}>Xác định tác động của biến đổi khí hậu đối với đa dạng sinh học của đất trong khu vực 91B.</Text>
                </View> 
            </View>
          </View>


        </View>

        <View style = {StyleSheet.compose(styles.subMainFrame,{paddingVertical:30})}>

          <View style = {StyleSheet.compose(styles.RectangleShape,styles.linkShape)}>
            <View style= {styles.itemComponnent}>
              <Text style={StyleSheet.compose(styles.mainText,{fontSize:20,marginVertical:7})}>Thông Tin Chi Tiết</Text>
              
              <View style = {StyleSheet.compose(styles.SmallRectangleShape,{backgroundColor: Colors.green})}>
                <View style = {styles.itemComponnent}>
                <Image
                    source={require("@/assets/images/upload.png")}
                     style = {styles.smallIcon}>
                  </Image>
                  <Text style={StyleSheet.compose(styles.text, {color: Colors.white})}>Tiếp tục</Text>
                </View>
              </View>

            </View>
          </View>


        </View>
      </View>
      </ScrollView >
    </View>
  )
}