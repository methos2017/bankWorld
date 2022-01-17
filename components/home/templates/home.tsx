import {
  Text,
  View,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styles from "./home.scss";
import createResource from "../../universal/resource.js";
import { geckoDataObj } from "./interfaces";

const resource = createResource();

export default function Home({ navigation }: any) {
  const DATA = resource.markets.read();

  const Item = ({
    id,
    name,
    symbol,
    current_price: currentPrice,
    high_24h: high24h,
    low_24h: low24h,
  }: geckoDataObj) => (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { id })}>
      <View className={styles.itemContainer}>
        <View className={styles.item1}>
          <Text className={styles.title}>{name}</Text>
        </View>
        <View className={styles.item2}>
          <Text className={styles.title}>{symbol}</Text>
        </View>
        <View className={styles.item3}>
          <Text className={styles.title}>{currentPrice.toFixed(2)}</Text>
        </View>
        <View className={styles.item4}>
          <Text className={styles.title}>{high24h.toFixed(2)}</Text>
        </View>
        <View className={styles.item5}>
          <Text className={styles.title}>{low24h.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }: { item: geckoDataObj }) => <Item {...item} />;

  return (
    <View className={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: geckoDataObj) => item.id}
        style={{ width: Dimensions.get("window").width + 5, height: "100%" }}
      />
      <StatusBar />
    </View>
  );
}
