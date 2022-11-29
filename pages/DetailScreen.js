import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import {
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";

function DetailScreen({ route }) {
    const [data, setData] = useState(route.params.msg);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{data.title}</Text>
            <Text style={styles.itemListText}>Streaming: {data.topic_id}</Text>
            <Text style={styles.itemListText}>by: {data.channel.name} of {data.channel.org}</Text>
            <Text style={styles.itemListText}>{data.live_viewers} people is currently watching</Text>
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

export default DetailScreen;