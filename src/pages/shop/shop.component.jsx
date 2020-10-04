// General
import React from 'react';

// Router
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

// Firebase
import { firestore, convertCollectionsSnapshotsToMap } from '../../firebase/firebase.utils';

// Our Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* Make new component for the spinner(the component includes spinner) */
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/* Component for shop page */
class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        });
    };

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={ loading } { ...props }/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={ loading } { ...props }/>}/>
            </div>
        )
    };
};

// Redux Functions
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);



