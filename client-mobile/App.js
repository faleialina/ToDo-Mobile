import { useState } from 'react'
import { FlatList, View } from 'react-native'
import Form from './components/Form'
import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {
	const [listOfItems, setListOfItems] = useState([
		{ text: 'task 1', key: '1' },
		{ text: 'task 2', key: '2' },
		{ text: 'task 3', key: '3' },
		{ text: 'task 4', key: '4' },
	])

	const addHandler = text => {
		setListOfItems(list => {
			return [
				{ text: text, key: Math.random().toString(36).substring(7) },
				...list,
			]
		})
	}

	const deleteHandler = key => {
		setListOfItems(list => {
			return list.filter(listOfItems => listOfItems.key != key)
		})
	}

	return (
		<View>
			<Header />
			<Form addHandler={addHandler} />
			<View>
				<FlatList
					data={listOfItems}
					renderItem={({ item }) => (
						<ListItem el={item} deleteHandler={deleteHandler} />
					)}
				/>
			</View>
		</View>
	)
}
