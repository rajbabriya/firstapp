//  Excercise 6. ================================================================================================================================================================
//
//
//
//
//
// flatlist with touchable and delete touched item
//
//
//
//
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

// const MyList = (props) => {
export default function MyList(props) {
  return (
    <FlatList
      data={props.title}
      renderItem={(curr) => (
        <TouchableOpacity onPress={() => props.onDelete(curr.item.key)}>
          <View style={styles.items}>
            <Text style={{ fontSize: 23 }}>{curr.item.value}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
const styles = StyleSheet.create({
  items: {
    fontWeight: "bold",
    marginVertical: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 10,
    padding: 10,
    color: "blue",
  },
});
// export default MyList;

//  Excercise 5.=================================================================================================================================================
//
//
//
//
// Flatelist items view
//
//
// import React from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";

// // const MyList = (props) => {
// export default function MyList(props) {
//   return (
//     <FlatList
//       data={props.title}
//       renderItem={(curr) => (
//         <View style={styles.items}>
//           <Text style={{ fontSize: 23 }}>{curr.item.value}</Text>
//         </View>
//       )}
//     />
//   );
// }
// const styles = StyleSheet.create({
//   items: {
//     fontWeight: "bold",
//     marginVertical: 10,
//     backgroundColor: "whitesmoke",
//     borderRadius: 10,
//     padding: 10,
//     color: "blue",
//   },
// });
// //export default MyList;
