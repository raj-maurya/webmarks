import _ from 'lodash'
import React from 'react';
import ReactSelector from 'react-selector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions/search-sources-selector'

const mapStateToProps = state => state.searchSourcesSelector;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// TODO: get this list from back-end
const allSources = [
	{
		id: 0,
		name: 'Trustable Stuff',
	},
	{
		id: 1,
		name: 'Science Unleashed',
	},
	{
		id: 2,
		name: 'We-Say-So',
	},
	{
		id: 3,
		name: 'Mom knows better',
	},
	{
		id: 4,
		name: 'Grandma knows even better still',
	},
	{
		id: 5,
		name: 'Factual reporting',
	},
	{
		id: 6,
		name: 'Intergalactic whispers',
	},
	{
		id: 7,
		name: 'Written with toes',
	},
	{
		id: 8,
		name: 'The pedantic paper',
	},
]


class SearchSourcesSelector extends React.Component {
	constructor() {
		super();
	}

	render() {
		let { selectedSources, addSource, removeSource} = this.props;
		let toggleSelected = (id) => {
			if (_.find(selectedSources, {id})) {
				removeSource(id)
			}
			else {
				addSource(id)
			}
		}

		let allItems = allSources.map(source => ({
			id: source.id,
			renderer: props => <div>{props.name}</div>,
			props: {name: source.name},
			name: source.name,
			onToggle: toggleSelected,
		}));

		let selectedItems = selectedSources.map(source => _.find(allItems, {id: source.id}));

		let placeholder = (selectedItems.length > 0) ? "Add a source..." : "Choose sources to search..."

		return (
			<div className="search-sources-selector">
				<ReactSelector
					universe={allItems}
					selected={selectedItems}
					compare={(a,b)=>0}
					placeholder={placeholder}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSourcesSelector);
