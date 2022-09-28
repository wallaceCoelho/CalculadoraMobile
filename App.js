import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Use, TextInput, Button } from 'react-native';

export default function App() {
  // REACT JS

  // ARRAY PARA FAZER TECLADO
  const btnTeclado = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '='];
  
  //VARIÁVEIS PARA GUARDAR O PRIMEIRO E ÚLTIMO NÚMERO
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
  
  // INTERAÇÃO DO TECLADO
  function handleInput(buttonPressed)
  {
    if (buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "+" | buttonPressed === "-")
    {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    if (buttonPressed === "DEL")
    {
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length - 1)))
      return
    }
    if (buttonPressed === ".")
    {
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    if (buttonPressed === "+/-")
    {
      return
    }
    if (buttonPressed === "AC"){
      setCurrentNumber("")
      setLastNumber("")
      return
    }
    if (buttonPressed === "=")
    {
      setLastNumber(currentNumber + " = ")
      Calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  function Calculator()
  {
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)

    if (operator === "*")
    {
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
    }
    if (operator === "/")
    {
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }
    if (operator === "+")
    {
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
    }
    if (operator === "-")
    {
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
    }
    if (operator === "%")
    {
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }
  }

  return (
    <View style={styles.container}>
      {/* CAMPO RESPOSTA */}
      <View style={styles.boxRes}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      {/* VIEW TECLADO NUMÉRICO */}
      <View style={styles.teclado}>
        {btnTeclado.map((button) => 
            <TouchableOpacity 
              key={button}
              style={styles.btn}
              onPress={() => handleInput(button)}>
              <Text style={styles.btnText}>{button}</Text>
            </TouchableOpacity>
          )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526'
  },

  boxRes: {
    backgroundColor: '#252526',
    height: '50%',
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#585859",
    margin: 20,
    paddingRight: 10,
    paddingBottom: 10
  },

  resultText: {
    fontSize: 50,
    color: "#BFBFBF"
  },

  historyText: {
      marginBottom: 20
  },

  teclado: {
    flex: 0.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 20,
    marginLeft: 20,
  },

  btn: {
    width: "25%"
  },

  btnText: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    color: "#BFBFBF"
  },
});
