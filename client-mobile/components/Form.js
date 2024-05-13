import { useState } from 'react'
import { Button, StyleSheet, TextInput, View,Alert } from 'react-native'

export default function Form({ addHandler }) {
	const [text, setText] = useState('')
	const onChange = textInput => {
		setText(textInput)
	}

	const pressButton = () => {
		if (text) {
			addHandler(text)
			setText('')
		} else {
			Alert.alert('Ошибка ввода','Впишите задачу')
		}
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				onChangeText={onChange}
				placeholder='Впишите задачу ...'
				value={text}
			/>
			<Button color='green' onPress={pressButton} title='Добавить задачу' />
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 10,
		marginVertical: 30,
		marginHorizontal: '20%',
		width: '60%',
	},
})
