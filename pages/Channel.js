import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import {
    Alert,
    TouchableOpacity
  } from "react-native";
import axios from "axios";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Channel({navigation}) {
    // const [data, setData] = useState( {lives: []});
    const [data, setData] = useState("");

    useEffect(() => {
        axios
               .get("https://holodex.net/api/v2/channels")
               .then((res) => setData(res.data))
               .catch((e) => Alert.alert("Gagal!", e));
   }
   );


   const ListItemNama = (dataPassing) => {
    return (
        <TouchableWithoutFeedback onPress={()=>{}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('ChannelDetail',{msg:dataPassing.dataNama.id})
            }
        >
            <View style={styles.evenItemListContainer}>
                <View style={styles.itemListContent}>
                    {/* <Image style={styles.headerImage}
                     source={{uri:dataPassing.dataNama.photo}}/> */}
                    <Text style={styles.itemListText}>
                        {dataPassing.dataNama.name}
                    </Text>
                    <Text >
                        {dataPassing.dataNama.english_name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        </TouchableWithoutFeedback>
        
    );
};


    return (
      <View style={styles.container}>
        <FlatList
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                renderItem={({ item }) => <ListItemNama dataNama={item} />}
                keyExtractor={(item) => item.id}
                style={styles.flatlist}
            />

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
    height: 50,
    width: 50
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

export default Channel;