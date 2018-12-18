import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'

//componente baseado em classe
export default class App extends Component {
	render() {
    	return (
			<View style={styles.container}>
				<Simples texto='HELLO WORLD!!'/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})