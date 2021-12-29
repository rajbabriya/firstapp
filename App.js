//  Excercise 6.========================================================================================================================================================================================================================================
//
//
//
//
//
//
//
//
//
// Display Entered Names with FlatList distribute in components much complexxxxx with touch remove item
//
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MyList from "./components/myList.js";
import Input from "./components/inputs.js";

export default function App() {
  let i = 1;
  const [list, current] = useState([]);
  const addName = (inputTitle) => {
    current([...list, { key: Math.random().toString(), value: inputTitle }]);
    console.log(list);
  };
  const removeName = (namekey) => {
    current((list) => {
      return list.filter((curname) => curname.key !== namekey);
    });
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          top: 20,
        }}
      >
        Add Your Name To List
      </Text>
      <Input onAddName={addName} />
      <MyList title={list} onDelete={removeName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "gray",
  },
});

//  Excercise 5. ========================================================================================================================================================================================================================================
//
//
//
//
//
//
//
//
//
// Display Entered Names with FlatList distribute in components much complexxxxx
//
// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// import MyList from "./components/myList.js";
// import Input from "./components/inputs.js";

// export default function App() {
//   let i = 1;
//   const [list, current] = useState([]);
//   const addName = (inputTitle) => {
//     current([...list, { key: Math.random().toString(), value: inputTitle }]);
//     console.log(list);
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           fontSize: 26,
//           fontWeight: "bold",
//           textAlign: "center",
//           top: 20,
//         }}
//       >
//         Add Your Name To List
//       </Text>
//       <Input onAddName={addName} />
//       <MyList title={list} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "gray",
//   },
// });

// Excercise 4.========================================================================================================================================================================================================================================
//
//
//
//
//
//
//
//
//
// Display Entered Names with FlatList
//
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   TextInput,
//   ScrollView,
//   FlatList,
// } from "react-native";

// export default function App() {
//   let [optext, setoptext] = useState("");
//   const [list, current] = useState([]);
//   let i = 1;
//   function setoptextHandler(enteredtxt) {
//     setoptext(enteredtxt);
//   }
//   const addName = () => {
//     current([...list, { key: Math.random().toString(), value: optext }]);
//     console.log(list);
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           fontSize: 26,
//           fontWeight: "bold",
//           textAlign: "center",
//           top: 20,
//         }}
//       >
//         Add Your Name To List
//       </Text>
//       <View style={styles.main}>
//         <TextInput
//           placeholder="Enter Your Name"
//           onChangeText={setoptextHandler}
//           value={optext}
//           style={styles.Inputtext}
//         />

//         <View style={{ flex: 1, marginLeft: 10 }}>
//           <Button title="Add" color="#068027" onPress={() => addName()} />
//         </View>
//       </View>
//       <FlatList
//         data={list}
//         renderItem={(curr) => (
//           <View style={styles.items}>
//             <Text style={{ fontSize: 23 }}>{curr.item.value}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flexDirection: "row",
//     marginTop: 50,
//     marginBottom: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   items: {
//     fontWeight: "bold",
//     marginVertical: 10,
//     backgroundColor: "whitesmoke",
//     borderRadius: 10,
//     padding: 10,
//     color: "blue",
//   },
//   Inputtext: {
//     borderRadius: 10,
//     backgroundColor: "lightgray",
//     borderBottomColor: "black",
//     borderBottomWidth: 3,
//     borderLeftWidth: 3,
//     padding: 10,
//     width: "70%",
//     color: "black",
//     fontSize: 20,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "gray",
//   },
// });

// Excercise 3.========================================================================================================================================================================================================================================
//
//
//
//
//
//
//
//
//
// Display Entered Names with scrollview
//
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   TextInput,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   let [optext, setoptext] = useState("");
//   const [list, current] = useState([]);
//   function setoptextHandler(enteredtxt) {
//     setoptext(enteredtxt);
//   }
//   const addName = () => {
//     current([...list, optext]);
//     console.log(list);
//     optext = "";
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           fontSize: 26,
//           fontWeight: "bold",
//           textAlign: "center",
//           top: 20,
//         }}
//       >
//         Add Your Name To List
//       </Text>
//       <View style={styles.main}>
//         <TextInput
//           placeholder="Enter Your Name"
//           onChangeText={setoptextHandler}
//           value={optext}
//           style={styles.Inputtext}
//         />

//         <View style={{ flex: 1, marginLeft: 10 }}>
//           <Button title="Add" color="#068027" onPress={() => addName()} />
//         </View>
//       </View>
//       <ScrollView>
//         {list.map((curr, i) => (
//           <View style={styles.items} key={curr + i}>
//             <Text style={{ fontSize: 23 }}>{i + 1 + ". " + curr}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flexDirection: "row",
//     marginTop: 50,
//     marginBottom: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   items: {
//     fontWeight: "bold",
//     marginVertical: 10,
//     backgroundColor: "whitesmoke",
//     borderRadius: 10,
//     padding: 10,
//     color: "blue",
//   },
//   Inputtext: {
//     borderRadius: 10,
//     backgroundColor: "lightgray",
//     borderBottomColor: "black",
//     borderBottomWidth: 3,
//     borderLeftWidth: 3,
//     padding: 10,
//     width: "70%",
//     color: "black",
//     fontSize: 20,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "gray",
//   },
// });

//  Excercise 2.========================================================================================================================================================================================================================================
//
//
//
//
//
//
//
//
//
/*FLEX DeMo*/

// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   TextInput,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.txt}>Images Gallary...</Text>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/F6INOOMSRRL5XOOQDRPZUWPWBA.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://st2.depositphotos.com/7641714/10640/i/600/depositphotos_106400180-stock-photo-heart-from-a-book-pages.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg",
//           }}
//         />
//       </View>
//       <View style={styles.boxes}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: "https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg",
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   txt: {
//     width: "100%",
//     textAlign: "center",
//     margin: 20,
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "darkred",
//   },
//   boxes: {
//     width: 100,
//     height: 100,
//     margin: 7,
//   },
//   img: {
//     width: "100%",
//     height: "100%",
//   },
//   container: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     height: "100%",
//     width: "100%",
//     justifyContent: "flex-start",
//     // justifyContent: "center",
//     padding: 30,
//     backgroundColor: "gray",
//   },
// });

//
//
//
//
//
//
//
//
// Excercise 1. ========================================================================================================================================================================================================================================
//
// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   TextInput,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   const [optext, setoptext] = useState("My Name is ?");
//   const [storedname, setname] = useState("");
//   const setnameHandler = function (nm) {
//     setname(nm);
//   };
//   const dispname = function () {
//     alert("HELLO " + storedname + " !! Welcome to Demo Project...");
//     // alert(
//     //   "HELLO User Welcome To My Application, Sorry But App Under Maintanance... !!"
//     // );
//   };
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 50,
//           marginBottom: 10,
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <TextInput
//           placeholder="Enter Your Name"
//           onChangeText={setnameHandler}
//           value={storedname}
//           style={{
//             borderRadius: 10,
//             backgroundColor: "lightgray",
//             borderBottomColor: "black",
//             borderBottomWidth: 3,
//             borderLeftWidth: 3,
//             padding: 10,
//             width: "65%",
//             color: "black",
//             fontSize: 20,
//           }}
//         />

//         <Button
//           title="Disp Message"
//           color="#068027"
//           onPress={() => dispname()}
//         />
//       </View>
//       <View style={{ alignItems: "center", top: 30 }}>
//         <Image
//           source={{
//             uri: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//           }}
//           style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
//         />
//         <Text style={styles.text}>{optext}</Text>

//         <Button
//           style={styles.button}
//           title="Click To Know My Name!!"
//           onPress={function () {
//             return setoptext("My Name is Raj.....");
//           }}
//         ></Button>
//       </View>
//       {/* <Button
//         style={styles.button}
//         title="Click Mee!!"z
//         onPress={() => setoptext("My Text Changed.....")}
//       ></Button> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     backgroundColor: "black",
//     padding: 10,
//     margin: 10,
//     color: "#fff",
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "gray",
//   },
// });
