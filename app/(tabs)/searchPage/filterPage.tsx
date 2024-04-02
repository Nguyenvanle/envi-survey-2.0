import Colors from "@/constants/Colors";
import { container, text } from "@/constants/Styles";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function filterPage() {
  const [ischoose1, setIschoose1] = useState(true);
  const Click1 = () => {
    setIschoose1(!ischoose1);
  };
  const [ischoose2, setIschoose2] = useState(true);
  const Click2 = () => {
    setIschoose2(!ischoose2);
  };
  const [ischoose3, setIschoose3] = useState(true);
  const Click3 = () => {
    setIschoose3(!ischoose3);
  };
  const [ischoose4, setIschoose4] = useState(true);
  const Click4 = () => {
    setIschoose4(!ischoose4);
  };
  const [ischoose5, setIschoose5] = useState(true);
  const Click5 = () => {
    setIschoose5(!ischoose5);
  };
  const [ischoose6, setIschoose6] = useState(true);
  const Click6 = () => {
    setIschoose6(!ischoose6);
  };
  const [ischoose7, setIschoose7] = useState(true);
  const Click7 = () => {
    setIschoose7(!ischoose7);
  };
  const [ischoose8, setIschoose8] = useState(true);
  const Click8 = () => {
    setIschoose8(!ischoose8);
  };
  const [ischoose9, setIschoose9] = useState(true);
  const Click9 = () => {
    setIschoose9(!ischoose9);
  };
  const [ischoose10, setIschoose10] = useState(true);
  const Click10 = () => {
    setIschoose10(!ischoose10);
  };
  const [ischoose11, setIschoose11] = useState(true);
  const Click11 = () => {
    setIschoose11(!ischoose11);
  };

  return (
    <View style={container.root}>
      <View style={container.boxFilter}>
        <View style={container.headerFilter}>
          <Text style={text.headerFilter}>Filter Selection</Text>
        </View>
        <View>
          <View>
            <View style={container.TypeFilter}>
              <Text style={text.headerFilter}>Thể loại</Text>
            </View>
            <View style={container.selectsContainer}>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose1
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click1}
                >
                  <Text style={text.select}>Thành phần hạt</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose2
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click2}
                >
                  <Text style={text.select}>Độ ẩm</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose3
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click3}
                >
                  <Text style={text.select}>Tính nén lún</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose4
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click4}
                >
                  <Text style={text.select}>Lực dính</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose5
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click5}
                >
                  <Text style={text.select}>Góc ma sát</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose6
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click6}
                >
                  <Text style={text.select}>Dung trọng</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose7
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click7}
                >
                  <Text style={text.select}>Khối lượng riêng</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={container.TypeFilter}>
              <Text style={text.headerFilter}>Thời gian</Text>
            </View>
            <View style={container.selectsContainer}>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose8
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click8}
                >
                  <Text style={text.select}>1 tiếng trước</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose9
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click9}
                >
                  <Text style={text.select}>1 tuần trước</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose10
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click10}
                >
                  <Text style={text.select}>1 tháng trước</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={[
                    container.select,
                    {
                      backgroundColor: ischoose11
                        ? Colors.selector
                        : Colors.primary,
                    },
                  ]}
                  onPress={Click11}
                >
                  <Text style={text.select}>1 năm trước</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View></View>
        </View>
        <View style={container.selectsContainerButton}>
          <View>
            <Link href={"/searchPage/filterPage"} asChild>
              <TouchableOpacity style={container.selectedApply}>
                <Text style={text.select}>Áp dụng</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
