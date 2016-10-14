import React from 'react';
import ReactSelector from 'react-selector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions/search-sources-selector'

const mapStateToProps = state => state.searchSourcesSelector;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class SearchSourcesSelector extends React.Component {
    constructor(props) {
        super(props);
        this.onItemNotInUniverse = this.onItemNotInUniverse.bind(this);
        this.toggleSelectedItem = this.toggleSelectedItem.bind(this);
    }

    onItemNotInUniverse(sourceName) {
        if(sourceName.length > 1) {
            this.props.addSource(sourceName);
        }
    }

    toggleSelectedItem(id) {
        let { allSources, selectedSources, unselectSource, removeSource, selectSource } = this.props;
        let selectedSource = selectedSources.find(source => { return source.id === id; });

        if(selectedSource) {
            if(selectedSource.indexed) {
                unselectSource(id);
                return;
            }

            removeSource(id);
        } else {
            selectSource(id);
        }
    }

	render() {
		let { allSources, selectedSources, selectSource, unselectSource, addSource, removeSource} = this.props;

		let placeholder = (selectedSources.length > 0) ? "Add a source..." : "Choose sources to search..."

		// Reshape data for ReactSelector's interface
		let allItems = allSources.map(source => ({
			id: source.id,
			renderer: props => <div className={props.isIndexed ? 'indexed' : 'unindexed'}>{props.name}</div>,
            props: {name: source.name, isIndexed: source.indexed},
			name: source.name,
			onToggle: this.toggleSelectedItem,
		}));

		const selectedItems = selectedSources.map(s => allItems.find(item => s.id===item.id));

		return (
			<div className="search-sources-selector">
				<ReactSelector
					universe={allItems}
					selected={selectedItems}
					compare={(a,b)=>0}
					placeholder={placeholder}
                    onItemNotInUniverse={this.onItemNotInUniverse}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSourcesSelector);
