import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Keyboard from "./components/Keyboard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: "",
      temp: "",
      sign: ""
    };
    console.log("App");

    this.calculate = this.calculate.bind(this);
    this.changeClear = this.changeClear.bind(this);
  }

  changeClear() {
    if (this.state.calc.length == 0) {
      return true;
    }
  }

  calculate(e) {
    let char = e.props.text;
    if (/[0-9]/g.test(char)) {
      if (char == "0" && this.state.calc == "0") {
      } else if (char != "0" && this.state.calc == "0") {
        if (char == ".") {
          this.setState({
            calc: this.state.calc + char
          });
        } else {
          this.setState({
            calc: char
          });
        }
      } else {
        this.setState({
          calc: this.state.calc + char
        });
      }
    } else if (this.state.calc.length > 0 && char == ".") {
      if (/\./.test(this.state.calc)) {
      } else {
        this.setState({
          calc: this.state.calc + char
        });
      }
    } else if (char == "C") {
      this.setState({
        calc: this.state.calc.substr(0, this.state.calc.length - 1)
      });
    } else if (char == "AC") {
      this.setState({
        calc: "",
        temp: "",
        sign: ""
      });
    } else if (/(\+\/\-)/.test(char)) {
      this.setState({
        calc: (this.state.calc * -1).toString()
      });
    } else if (char == "%") {
      let decimalLen = 0;
      if (this.state.calc.split(".").length > 1) {
        decimalLen = this.state.calc.split(".")[1].length + 2;
      } else {
        decimalLen = 2;
      }

      if (this.state.calc.length == 1) {
        this.setState({
          calc: (this.state.calc / 100).toFixed(decimalLen).toString()
        });
      } else {
        this.setState({
          calc: (this.state.calc / 100).toFixed(decimalLen).toString()
        });
      }
    } else if (char == "+") {
      this.setState({
        temp: this.state.calc,
        calc: "",
        sign: "+"
      });
    } else if (char == "-") {
      this.setState({
        temp: this.state.calc,
        calc: "",
        sign: "-"
      });
    } else if (char == "÷") {
      this.setState({
        temp: this.state.calc,
        calc: "",
        sign: "/"
      });
    } else if (char == "×") {
      this.setState({
        temp: this.state.calc,
        calc: "",
        sign: "*"
      });
    } else if (char == "=") {
      switch (this.state.sign) {
        case "+":
          this.setState({
            calc: (
              parseFloat(this.state.temp) + parseFloat(this.state.calc)
            ).toString()
          });
          break;
        case "-":
          this.setState({
            calc: (
              parseFloat(this.state.temp) - parseFloat(this.state.calc)
            ).toString()
          });
          break;
        case "/":
          this.setState({
            calc: (
              parseFloat(this.state.temp) / parseFloat(this.state.calc)
            ).toString()
          });
          break;
        case "*":
          this.setState({
            calc: (
              parseFloat(this.state.temp) * parseFloat(this.state.calc)
            ).toString()
          });
          break;
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode={"head"}>
            {" "}
            {this.state.calc}{" "}
          </Text>
        </View>
        <Keyboard
          cc={this.changeClear}
          fn={this.calculate}
          style={styles.keyboard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00"
  },
  display: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  keyboard: {
    flex: 2,
    backgroundColor: "#000000"
  },
  text: {
    fontSize: 96,
    color: "white"
  }
});
