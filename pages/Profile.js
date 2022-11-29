import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import axios from "axios";

function Profile() {
    const [data, setData] = useState("");
  var [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get("https://api.github.com/users/dIdisuhardi"
        )
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert("Gagal!", e));
      return request;
    }
    fetchData();
});
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: data.avatar_url
            }}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>
            Username: {data.login}
          </Text>
          <Text style={styles.headerText}>
            Name: {data.name}
          </Text>
            <Text style={styles.headerText}>
              Repositori: {data.public_repos}</Text>
  
        </View>
        <View style={styles.bodyTouchable}>
            <Text style={styles.headerText}>
                APLIKASI DARI SIMPER UNTUK SIMPER
            </Text>
            <Text style={styles.bodyText}>
                APLIKASI INI DIBUAT DENGAN SEPENUH HATI OLEH SIMPER VTUBER<br></br>
                DENGAN NIAT SEPENUH HATI UNTUK MENOLONG SESAMA SIMPER <br></br>
                MAUPUN MANUSIA NORMAL LAINNYA UNTUK MENDEKATKAN DIRI <br></br>
                KEPADA SOSOK VTUBER (VIRTUAL YOUTUBER) YANG HANGAT MENJADI BUAH BIBIR <br></br>
                DI KALANAGAN NETIZEN INDONESIA BELAKANGAN INI!! <br></br> <br></br> <br></br>

                <strong> FITUR:</strong>
            </Text>
            <ul style={styles.bodyText}>
                <li>DAFTAR LIVE STREAM SECARA REALTIME</li>
                <li>DAFTAR VTUBER YANG UPDATE SECARA BERKALA</li>
                <li>DETAIL AKUN TIAP VTUBER</li>
            </ul>
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
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center"
        },
        headerTextDesc: {
          color: "#fff"
        },
        bodyTouchable: {
          alignSelf: "center",
          backgroundColor: "#588061",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 10,
          margin: 20
        },
        bodyText: {
          color: "#efd",
          fontSize: 20,
          textAlign: "center"
        }
      });   

export default Profile;