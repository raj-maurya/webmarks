import React from 'react';
import ReactSelector from 'react-selector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions/search-sources-selector'

const mapStateToProps = state => state.searchSourcesSelector;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class SearchSourcesSelector extends React.Component {

	render() {
		let { allSources, selectedSources, addSource, removeSource} = this.props;

		let placeholder = (selectedSources.length > 0) ? "Add a source..." : "Choose sources to search..."

		// Reshape data for ReactSelector's interface
		let toggleSelected = (id) => {
			if (selectedSources.find(source => (source.id===id)))
				removeSource(id);
			else
				addSource(id);
		}
		let allItems = allSources.map(source => ({
			id: source.id,
			renderer: props => <div>{props.name}</div>,
			props: {name: source.name},
			name: source.name,
			onToggle: toggleSelected,
		}));
		let selectedItems = selectedSources.map(s => allItems.find(item => s.id===item.id));

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
