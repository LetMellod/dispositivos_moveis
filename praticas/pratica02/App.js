import { StyleSheet, Text, View } from "react-native";

function AppBar(props) {
  return (
    <View style={styles.AppBar}>
      <Text style= {styles.title}>{props.titulo}</Text>
    </View>
  );
}

function App () {
return (
  <View style={{ flex:1 }}>
 <AppBar titulo="Minha Aplicação React Native" />
 <View style={styles.container}></View>
 </View>
 );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#808080", justifyContent:"center", alignItems: "center"},
  AppBar: {height: 150, backgroundColor: "#708090", justifyContent: "center", paddingLeft: 16},
  title: {fontSize: 50, fontWeight: "bold", color: "#191970"},
  });

export default App;