import {
    View,
    Text,
    Image,
    StyleSheet,
    Touchable,
    TouchableOpacity, 
    ScrollView} from 'react-native'
  import React from 'react'
  import { container } from './../../../constants/Styles';
  import { styles } from '../../../constants/TienDatStyles';
  import Colors from '@/constants/Colors';
  
  export default function samplingPeriod() {
    return (
      <View style = {styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style = {StyleSheet.compose(styles.body,{gap: 10})}>
  
            <View style = {styles.subFrame}>
            <View style = {StyleSheet.compose(styles.RectangleShape,styles.MainShape)}>
              <View style= {styles.aboveInfor}>
                <Text style={styles.mainText}>Khảo sát đất đô thị khu vực 91B</Text>
                <Text style={styles.text}>Mã dự án #456431</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorMainVector)}></View>
              <Text style={StyleSheet.compose(styles.mainText,{alignSelf:'center'})}>Đợt 1 - 001</Text>
            </View>
          </View>
  
          <View style = {StyleSheet.compose(styles.subFrame,{gap: 20})}>
            <Text style = {styles.subTittle}>Chi tiết mẫu</Text>
  
            <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
              
              <View style = {styles.aboveInfor}>
                <Text style = {styles.destinationText}>Đường 19B - KCD 91B</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
              
              <View style = {styles.aboveInfor}>
                
                <View style = {styles.subItem}>
  
                  <View style = {styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                       style = {styles.smallIcon}>
                    </Image>
                    <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.primary})}>Start: 19/03/2024</Text>
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
            </View>
  
            <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
              
              <View style = {styles.aboveInfor}>
                <Text style = {styles.destinationText}>Chung cư B3 - KCD 91B</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
              
              <View style = {styles.aboveInfor}>
                
                <View style = {styles.subItem}>
  
                  <View style = {styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                       style = {styles.smallIcon}>
                    </Image>
                    <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.primary})}>Start: 19/03/2024</Text>
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
            </View>
  
            <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
              
              <View style = {styles.aboveInfor}>
                <Text style = {styles.destinationText}>Nhà Sách Y Khoa Cần Thơ</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
              
              <View style = {styles.aboveInfor}>
                
                <View style = {styles.subItem}>
  
                  <View style = {styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                       style = {styles.smallIcon}>
                    </Image>
                    <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.primary})}>Start: 19/03/2024</Text>
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
            </View>
  
            <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
              
              <View style = {styles.aboveInfor}>
                <Text style = {styles.destinationText}>Trường Mầm Non Rạng Đông</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
              
              <View style = {styles.aboveInfor}>
                
                <View style = {styles.subItem}>
  
                  <View style = {styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                       style = {styles.smallIcon}>
                    </Image>
                    <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.primary})}>Start: 19/03/2024</Text>
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
            </View>
  
            <View style = {StyleSheet.compose(styles.RectangleShape, styles.WhiteShape)}>
              
              <View style = {styles.aboveInfor}>
                <Text style = {styles.destinationText}>Nhà Sách YMB - THCD</Text>
              </View>
              <View style = {StyleSheet.compose(styles.vector, styles.colorVector)}></View>
              
              <View style = {styles.aboveInfor}>
                
                <View style = {styles.subItem}>
  
                  <View style = {styles.itemComponnent}>
                    <Image
                      source={require("@/assets/images/green-clock.png")}
                       style = {styles.smallIcon}>
                    </Image>
                    <Text style = {StyleSheet.compose(styles.itemText, {color: Colors.primary})}>Start: 19/03/2024</Text>
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
            </View>
          
          </View>

          <View style = {StyleSheet.compose(styles.subFrame,{paddingVertical:30})}>

          <View style = {StyleSheet.compose(styles.RectangleShape,styles.linkShape)}>
            <View style= {styles.itemComponnent}>
              <Text style={StyleSheet.compose(styles.mainText,{fontSize:20,marginVertical:7})}>Thêm biểu mẫu mới</Text>
              
              <View style = {StyleSheet.compose(styles.SmallRectangleShape,{backgroundColor: Colors.primary})}>
                <View style = {styles.itemComponnent}>
                <Image
                    source={require("@/assets/images/circle-plus-icon.png")}
                     style = {styles.MediumIcon}>
                  </Image>
                  <Text style={StyleSheet.compose(styles.text, {color: Colors.white})}>Add+</Text>
                </View>
              </View>

            </View>
          </View>


        </View>
  
  
          </View>
        </ScrollView>
      </View>
    )
  } 
  
  
  