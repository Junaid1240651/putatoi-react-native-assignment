import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import {
  Input,
  NativeBaseProvider,
  View,
  Image,
  StatusBar,
  Text,
} from "native-base";

import { Dimensions, SafeAreaView, ScrollView } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const images = [
  "http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg",
  "https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
  "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
];

export default function App() {
  const [image, setImage] = useState(0);
const  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != image) {
        setImage(slide);
      }
    }
  };
  return (
    <NativeBaseProvider>
     <StatusBar color="green" />
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.locationIcon}
            source={{
              uri: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-location-modern-business-and-business-essentials-flatart-icons-outline-flatarticons.png",
            }}
            alt="Alternate Tex"
          />
          <Input
            color="white"
            fontSize="12"
            borderRadius="10"
            marginTop="2"
            placeholderTextColor="white"
            placeholder="Search"
            flex="4"
            width="55%"
            height="65%"
          ></Input>
          <Image
            style={styles.bellIcon}
            source={{
              uri: "https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/FFFFFF/external-notification-time-and-date-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png",
            }}
            alt="Alternate Tex"
          />
          <Image
            style={styles.cartIcon}
            source={{
              uri: "https://img.icons8.com/material-outlined/24/FFFFFF/add-shopping-cart.png",
            }}
            alt="Alternate Tex"
          />
        </View>

          <View style={{ flexDirection: "row", height: "60%" }}>
           <View style={styles.searchView}>
            <Image
              style={styles.searchIcon}
              source={require("./icons/search2.png")}
              alt="Alternate Tex"
            />
         <Input
              // borderStyle="none"
              paddingRight="2"
              color="#419ea6"
              fontSize="15"
              backgroundColor="white"
              placeholderTextColor="#419ea6"
              placeholder="Search For Products..."
              flex="4"
              paddingBottom="2"
            ></Input> 
          </View>
          <Image
            style={styles.micIcon}
            source={require("./icons/mic.png")}
            alt="Alternate Tex"
          /> 
        </View>
      </View>
      <View style={styles.sliderview}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {images.map((e) => (
              <Image
              alt=""
                style={styles.sliderImage}
                key={e}
                resizeMethod="resize"
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.dotView}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={setImage == index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.itemsView}>
        <View style={styles.itemsViewInsiderView}>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/mobile.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Recharge</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/dth.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>DTH Recharge</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/loan.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Loans</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/promotion.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Promotion</Text>
          </View>
        </View>
        <View style={styles.itemsViewInsiderView}>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/news.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>News</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/blog.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Blog</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/jobs.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Jobs</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/feedback.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Feedback</Text>
          </View>
        </View>

        <View style={styles.itemsViewInsiderView}>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/gas.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Gas Booking</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/bill.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Electricty Bill</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              color={"white"}
              source={require("./icons/water.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>Water Bill</Text>
          </View>
          <View width="20%" alignItems="center">
            <Image
              style={styles.IconItems}
              source={require("./icons/more.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.IconItemsText}>See More</Text>
          </View>
        </View>
      </View>
      <View
        style={styles.populaService}
      >
        <Text style={styles.service}>Popular Service Products</Text>
      </View>

      <View
       style={styles.dailyneedsView}
      >
        <Text style={styles.dailyneeds}>Daily Needs</Text>
      </View>
      <View style={styles.bottombar} >
        <View style={styles.bottombar1}>
          <View width="15%" alignItems="center" marginTop="3">
            <Image
              style={styles.bottombarIconItems}
              source={require("./icons/home.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.bottombarTextItems}>Home</Text>
          </View>
          <View width="15%" alignItems="center" marginTop="3">
            <Image
              style={styles.bottombarIconItems}
              source={require("./icons/profile.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.bottombarTextItems}>Profile</Text>
          </View>
          <View style={styles.bottombarcenterView}>
            <Image
              style={styles.bottombarcenterImage}
              source={require("./icons/logo.png")}
              alt="Alternate Tex"
            />
          </View>

          <View width="15%" alignItems="center"  marginTop="3">
            <Image
              style={styles.bottombarIconItems}
              source={require("./icons/list.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.bottombarTextItems}>List</Text>
          </View>
          <View width="15%" alignItems="center"  marginTop="3">
            <Image
              style={styles.bottombarIconItems}
              source={require("./icons/chat.png")}
              alt="Alternate Tex"
            />
            <Text style={styles.bottombarTextItems}>Chat</Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#419ea6",
    height: "14%",
  },
  locationIcon: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 8,
    width: 35,
    height: 35,
  },
  bellIcon: {
    marginLeft: 10,
    marginTop: 10,
    width: 30,
    height: 30,
  },
  cartIcon: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    width: 30,
    height: 32,
  },
  
  searchView: {
    fontSize:5,
    flexDirection: "row",
    flex: 2,
    width: 45,
    marginTop: 5,
    backgroundColor: "white",
    marginLeft: 30,
    borderRadius: 3,
    height: 40,
  },
  searchIcon: {
    marginTop: 2,
    marginLeft: 5,
    width: 30,
    height: 35,
  },
  micIcon: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    width: 35,
    height: 35,
  },
  sliderview: {
    borderRadius: 5,
    height: 20,
    margin: 8,
    marginTop: 10,
    height: 190,
  },
  sliderImage: {
    width: width,
    height: height * 0.3,
  },
  dotView: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 6,
    color: "black",
  },
  dot: {
    margin: 6,
    color: "white",
  },
  itemsView: {
    backgroundColor: "#f0f8fa",
    height: 280,
    marginBottom: 20,
    margin: 8,
    marginTop: 10,
    borderRadius: 20,
  },
  itemsViewInsiderView: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 85,
    flexDirection: "row",
  },
  itemsViewInsiderView1: {
    width: 20,
    alignItems: "center",
    marginTop: 6,
  },
  IconItems: {
    width: 40,
    height: 40,
    marginTop: 3,
  },
  IconItemsText: {
    textAlign: "center",
    color: "#419ea6",
    fontSize: 10,
    fontWeight: "bold",
  },
  service: {
    color: "#0a7c83",
    fontSize: 20,
    fontWeight: "bold",
  },
  populaService:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbedef",
    height: 50,
    margin: 8,
    marginTop: 0,
    marginBottom:0

  },
  dailyneedsView: {
  justifyContent: "center",
          alignItems: "center",
          height: 30,
          marginTop: 4,
  },
  dailyneeds: {
    color: "#0a7c83",
    fontSize: 15,
    fontWeight: "bold",
  },
  bottombar: {
    height:40, marginTop: 4
  },
  bottombar1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#dbedef",
    height: 70,
    marginTop: 10,
  },
  bottombarIconItems: {
    width: 35,
    height: 35,
   
  },
  bottombarTextItems: {
    textAlign: "center",
    color: "#419ea6",
    fontSize: 12,
    fontWeight: "bold",
  },
  bottombarcenterView: {
    width: 70,
    height: 65,
    borderRadius: 15,
    backgroundColor: "#419ea6",
    alignItems: "center",
  },
  bottombarcenterImage: {
    width: 40,
    height: 40,
    marginTop: 12,
  },
});

