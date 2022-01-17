import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useEffect, useState, useCallback } from "react";

import styles from "./detail.scss";

const Detail = ({ route }: any) => {
  const id = route.params.id;

  const initialValue = {
    name: "",
    symbol: "",
    hashing_algorithm: "",
    description: { en: "" },
    market_cap_rank: 0,
    links: { homepage: [] },
    genesis_date: "",
  };

  const [coinData, setCoinData] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) =>
      response.json().then((data) => (setCoinData(data), setLoading(true)))
    );
  }, [loading]);

  const getCoinData = useCallback(
    () =>
      loading ? (
        <SafeAreaView className={styles.container}>
          <ScrollView>
            <View className={styles.infoContainer}>
              <Text className={styles.info}>
                Name: {coinData?.name} {alert("main")}
              </Text>
            </View>
            <View className={styles.infoContainer}>
              <Text className={styles.info}>Symbol: {coinData?.symbol}</Text>
            </View>
            {coinData?.hashing_algorithm && (
              <View className={styles.infoContainer}>
                <Text className={styles.info}>
                  Hashing algorithm: {coinData?.hashing_algorithm}
                </Text>
              </View>
            )}
            {coinData?.description.en !== "" && (
              <View className={styles.scrollContainer}>
                <ScrollView>
                  <Text className={styles.info}>
                    {coinData?.description.en}
                  </Text>
                </ScrollView>
              </View>
            )}
            <View className={styles.infoContainer}>
              <Text className={styles.info}>
                Market cap rating: {coinData?.market_cap_rank}
              </Text>
            </View>
            <View className={styles.infoContainer}>
              <Text className={styles.info}>
                Homepage:{" "}
                <Text
                  onPress={() => Linking.openURL(coinData?.links.homepage[0])}
                  className={styles.info}
                >
                  {coinData?.links.homepage[0]}
                </Text>
              </Text>
            </View>
            {coinData?.genesis_date && (
              <View className={styles.infoContainer}>
                <Text className={styles.info}>
                  Genesis date: {coinData?.genesis_date}
                </Text>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      ) : (
        <View className={styles.spinnerContainer}>
          <ActivityIndicator />
        </View>
      ),
    [coinData]
  );

  return getCoinData();
};

export default Detail;
