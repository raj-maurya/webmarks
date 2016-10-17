import React from 'react';
import ReactSelector from 'react-selector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-s-alert';

import * as actions from '../redux/actions/search-sources-selector'

const mapStateToProps = state => state.searchSourcesSelector;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class SearchSourcesSelector extends React.Component {
    constructor(props) {
        super(props);

        this.alertOptions = {
            position: 'bottom-right',
            effect: 'slide',
            timeout: 5000,
            html: true
        };

        this.domainRegex = /^[\w\-]+\.\w[\w\-\.]*((\/\w+)*|\/)$/i;

        this.onItemNotInUniverse = this.onItemNotInUniverse.bind(this);
        this.toggleSelectedItem = this.toggleSelectedItem.bind(this);
    }

    onItemNotInUniverse(sourceName) {
        if(!sourceName.length) {
            return;
        }

        if(!this.domainRegex.test(sourceName)) {
            Alert.error(`Sorry, <strong>${sourceName}</strong> doesn't look like a valid domain, please try again.`, this.alertOptions);
            return;
        }

        Alert.warning(`Unfortunately, we haven't indexed <strong>${sourceName}</strong> yet. We'll be sure to get to it soon!`, this.alertOptions);

        this.props.addSource(sourceName);
    }

    toggleSelectedItem(id) {
        let { allSources, selectedSources, unselectSource, removeSource, selectSource } = this.props;
        let selectedSource = selectedSources.find(source => { return source.id === id; });

        if(!selectedSource) {
            selectSource(id);
            return;
        }

        if(selectedSource.indexed) {
            unselectSource(id);
        } else {
            removeSource(id);
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
