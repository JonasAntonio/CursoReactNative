import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

//componente baseado em classe
export default class App extends Component {
	render() {
    	return (
			<View style={styles.container}>
				<Simples texto='HELLO WORLD!!'/>
				<ParImpar numero={32}/>
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