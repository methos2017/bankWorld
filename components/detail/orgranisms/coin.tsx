import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import styles from "./coin.scss";
import { coinDataTypes } from "./interfaces";

const Coin = ({
  name,
  symbol,
  hashing_algorithm: hashAlgo,
  description: desc,
  market_cap_rank: capRank,
  links,
  genesis_date: genesisDate,
}: coinDataTypes) => (
  <SafeAreaView className={styles.container}>
    <ScrollView>
      <View className={styles.infoContainer}>
        <Text className={styles.info}>Name: {name}</Text>
      </View>
      <View className={styles.infoContainer}>
        <Text className={styles.info}>Symbol: {symbol}</Text>
      </View>
      {hashAlgo && (
        <View className={styles.infoContainer}>
          <Text className={styles.info}>Hashing algorithm: {hashAlgo}</Text>
        </View>
      )}
      {desc?.en !== "" && (
        <View className={styles.scrollContainer}>
          <ScrollView>
            <Text className={styles.info}>{desc?.en}</Text>
          </ScrollView>
        </View>
      )}
      <View className={styles.infoContainer}>
        <Text className={styles.info}>Market cap rating: {capRank}</Text>
      </View>
      <View className={styles.infoContainer}>
        <Text className={styles.info}>
          Homepage:{" "}
          <Text
            onPress={() =>
              Linking.openURL(links?.homepage ? links?.homepage[0] : "")
            }
            className={styles.info}
          >
            {links?.homepage && links?.homepage[0]}
          </Text>
        </Text>
      </View>
      {genesisDate && (
        <View className={styles.infoContainer}>
          <Text className={styles.info}>Genesis date: {genesisDate}</Text>
        </View>
      )}
    </ScrollView>
  </SafeAreaView>
);

export default Coin;
