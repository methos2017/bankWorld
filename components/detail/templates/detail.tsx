import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { RouteProp } from "@react-navigation/native";

import styles from "./detail.scss";
import Coin from "../orgranisms/coin";

interface route {
  route: RouteProp<{ params: { id: number } }, "params">;
}

const Detail = ({ route }: route) => {
  const id = route.params.id;

  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) =>
      response.json().then((data) => (setCoinData(data), setLoading(true)))
    );
  }, [loading]);

  const getCoinData = useCallback(
    () =>
      loading ? (
        <Coin {...coinData} />
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
