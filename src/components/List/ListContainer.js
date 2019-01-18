import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const listContainer = (props) => {

		return (
			<FlatList data={ props.places } 
					  renderItem={ (info) => (
							<ListItem key={ info.key }
									  name={ info.item.name }
									  image={ info.item.image }
					  				  onItemPressed={ () => props.onItemPressed(info.item.key) }/>
					  )} />
		);
};

const styles = StyleSheet.create({
	default: {
		width: '100%'
	}
});

export default listContainer;