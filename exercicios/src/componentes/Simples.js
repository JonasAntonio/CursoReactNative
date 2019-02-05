import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

//componente com função
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }
//arrow function

// export default props => {
//     return [
//         <Text key={1}>ARROW 1: {props.texto}</Text>,
//         <Text key={2}>ARROW 2: {props.texto}</Text>
//     ]
// }

export default props => <Text style={[Padrao.ex]}>{props.texto}</Text>