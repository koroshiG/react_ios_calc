import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Key from "./Key";

funTab = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];
colTab = [
  ["#aeaeb2", "#aeaeb2", "#aeaeb2", "#fc9300"],
  ["#2c2c2e", "#2c2c2e", "#2c2c2e", "#fc9300"],
  ["#2c2c2e", "#2c2c2e", "#2c2c2e", "#fc9300"],
  ["#2c2c2e", "#2c2c2e", "#2c2c2e", "#fc9300"],
  ["#2c2c2e", "#2c2c2e", "#fc9300"]
];

/* 
    FUNKCJE KALKULATORA
    C - usuwa jeden znak
    +/- - zmienia liczbę na przeciwną
    % - zmienia liczbę na 1% z niej
    ÷ - dzielenie
    × - mnożenie
    - - odejmowanie
    + - dodawanie
    = - wynik
    . - rozwinięcie dziesiętne
    0 - podwójnej długości klawisz
  */

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Keyboard");
  }

  render() {
    let kbtab = [];
    funTab.map((row, iindex) => {
      kbtab.push([]);
      rowtab = [];
      row.map((key, jindex) => {
        if (key == "C" && this.props.cc()) {
          rowtab.push(
            <Key
              key={"key" + (10 * iindex + jindex)}
              style={key != "0" ? styles.key : styles.doublekey}
              keystyle={key != "0" ? styles.keystyle : styles.doublekeystyle}
              color={colTab[iindex][jindex]}
              text={"AC"}
              fn={this.props.fn}
            />
          );
        } else {
          rowtab.push(
            <Key
              key={"key" + (10 * iindex + jindex)}
              style={key != "0" ? styles.key : styles.doublekey}
              keystyle={key != "0" ? styles.keystyle : styles.doublekeystyle}
              color={colTab[iindex][jindex]}
              text={key}
              fn={this.props.fn}
            />
          );
        }
      });
      kbtab.push(
        <View key={"row" + iindex} style={styles.row}>
          {rowtab}
        </View>
      );
    });
    return <View style={this.props.style}>{kbtab}</View>;
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48 },
  row: {
    flexDirection: "row",
    flex: 1
  },
  key: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  doublekey: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  keystyle: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 40,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  doublekeystyle: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 40,
    width: 170,
    height: 75,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
    backgroundColor: "gray"
  }
});

export default Keyboard;
