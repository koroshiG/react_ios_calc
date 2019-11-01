import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (      
      <View style={this.props.style}>
        <TouchableOpacity onPress={() => this.props.fn(this)}>
          <View style={[this.props.keystyle, {backgroundColor: this.props.color, borderColor: this.props.color}]}>
            <Text style={[styles.text, {color: this.props.color == "#aeaeb2"?"black":"white"}]}> {this.props.text} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "white"
  }
});

export default Key;
