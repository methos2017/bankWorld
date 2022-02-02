import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";

import styles from "./detail.scss";
import Coin from "../orgranisms/coin";

import createResource from "../../universal/resource.js";


// const id = navigation.getParam('id');

const fetchCurrency = (id: any) => {
  // alert(id);
  return fetch("https://api.coingecko.com/api/v3/coins/" + id).then((r) =>
    r.json()
  );
};
// .then((data) => console.log("the data is " + JSON.stringify(data)));

const resource = createResource(fetchCurrency);

interface route {
  route: RouteProp<{ params: { id: number } }, "params">;
}



const Detail = ({ route }: route) => {

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

	    const [value, setValue] = useState(0); 

	// const forceUpdate = useForceUpdate();



  const [DATA, setData] = useState(resource.read(route.params.id));

   useEffect(()=>{
	   setData(resource.read(route.params.id))}, []);


  // const [data, setData] = useState({});

	// useEffect(()=>{
// // const data = resource.read(id);	}, []);
 // setData(resource.read(id)); }, []);	

  // const [coinData, setCoinData] = useState({});
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const DATA = resource.read(i);
  //   // alert(JSON.stringify(DATA));

  //   setLoading(true);
  //   setCoinData(DATA);
  //   // fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) =>
  //   //   response.json().then((data) => (setCoinData(data), setLoading(true)))
  //   // );
  // }, [loading]);

  // const getCoinData = useCallback(
  //   () =>
  //     loading ? (
  //       <Coin {...coinData} />
  //     ) : (
  //       <View className={styles.spinnerContainer}>
  //         <ActivityIndicator />
  //       </View>
  //     ),
  //   [coinData]
  // );

  // return getCoinData();
	return <View><ScrollView><View><Text>hello, world! + {DATA.id}</Text></View><View><TouchableHighlight onPress={()=>(setValue(7), alert(DATA.id), resource.read(route.params.id), alert(DATA.id))}><Text>hail</Text></TouchableHighlight></View></ScrollView></View>;
};

export default Detail;
