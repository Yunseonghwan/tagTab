import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const listTab = [
  {
    id: 1,
    status: "All",
  },
  {
    id: 2,
    status: "Purple",
  },
  {
    id: 3,
    status: "Green",
  },
];

const data = [
  {
    name: "Ronaldo",
    status: "Green",
  },
  {
    name: "asfgsg",
    status: "Purple",
  },
  {
    name: "daghe",
    status: "Green",
  },
  {
    name: "sdawgf",
    status: "Green",
  },
  {
    name: "sdgasdd",
    status: "Purple",
  },
];

const App = () => {
  const [status, setStatus] = useState("All");
  const [datalist, setDatalist] = useState(data);
  const setStatusFilter = (status) => {
    if (status !== "All") {
      setDatalist([...data.filter((e) => e.status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Text>G</Text>
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View
          style={[
            styles.itemStatus,
            {
              backgroundColor: item.status === "Purple" ? "#e5848e" : "#69c080",
            },
          ]}
        >
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.btnTab,
              status === item.status && styles.btnTabActive,
            ]}
            onPress={() => setStatusFilter(item.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === item.status && styles.textTabActive,
              ]}
            >
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },

  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#E6838D",
  },
  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemLogo: {
    padding: 10,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});

export default App;
