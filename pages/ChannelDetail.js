import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import {
    Alert,
  } from "react-native";
import axios from "axios";

function ChannelDetail({route}) {
    const [data, setData] = useState("");

    useEffect(() => {
        axios
               .get("https://holodex.net/api/v2/channels/"+route.params.msg)
               .then((res) => setData(res.data))
               .catch((e) => Alert.alert("Gagal!", e));
   }
   );


    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Image source={{uri:data.photo}} style={styles.headerImage}></Image>
        <Text style={styles.headerText}> Name: {data.name}</Text>
        <Text style={styles.headerText}>{data.english_name}</Text>
        <Text style={styles.headerText}>Current Subscirber Count: {data.subscriber_count}</Text>
        <Text style={styles.headerText}>Twitter: {data.twitter}</Text>
        <Text style={styles.itemListText}>{data.description}<br></br></Text>

            </View>
            </View>
    )
    }

 

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#69bf64",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: "center",
    paddingBottom: 10
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginVertical: 10
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold"
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10
  },
  oddItemListContainer: {
    height: 100,
    backgroundColor: "#588061",
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  evenItemListContainer: {
    height: 100,
    backgroundColor: "#FDE9EA",
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  itemListContent: {
    marginLeft: 10
  },
  odditemListLine: {
    backgroundColor: "#F186AC",
    width: 5,
    height: "80%"
  },
  evenitemListLine: {
    backgroundColor: "#869F77",
    width: 5,
    height: "80%"
  },
  itemListText: {
    color: "#06283D",
    marginVertical: 2,
    fontWeight: "bold",
    fontSize: 17
  }
});

export default ChannelDetail;