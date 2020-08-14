import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentSidebar from './ContentSidebar/ContentSidebar';
import ContentProducts from './ContentProducts';
import FilterSummary from './FilterSummary';
import SidebarToggle from './SidebarToggle';
import SortingWrapper from './SortingWrapper';
import ProductTopHeader from './ProductTopHeader';
import ContentTotalProduct from './ContentTotalProduct';
import * as firebase from 'firebase/app';
import { useParams } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/filterActions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  filterSummary: {
    gridArea: 'f'
  },
  filterSortWrapper: {
    display: 'grid',
    width: '100%',
    gridTemplateAreas: `"st sw" "f f"`,
    gridTemplateColumns: ' 1fr 1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateAreas: `"f sw"`,
      gridTemplateColumns: ' 1fr minmax(auto, 300px);'
    }
  }
}));

const ProductCollection = props => {
  const classes = useStyles();
  let { id } = useParams();

  const smDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [collectionHeader] = React.useState(id);
  const [isEmpthy, setIsEmpthy] = React.useState('');
  const [isLoading, setIsloading] = React.useState('');

  const dispatch = useDispatch();
  const productList = useSelector(state => state.filter.filteredProductList);

  React.useEffect(() => {
    /* const collectionsRef = firebase.database().ref('products/');
    collectionsRef.on('value', function(snapshot) {
      setCollections(snapshot.val());
      setIsloading(false);
    });*/

    /*.where('tag', 'array-contains', 'man') */
    setIsloading(true);
    let collectionRef = firebase.firestore().collection('products');
    collectionRef
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          setIsloading(false);
          setIsEmpthy(true);
          return;
        }

        const data = [];
        snapshot.forEach(doc => {
          let temp = { ...doc.data(), id: doc.id };
          data.push(temp);
        });

        dispatch({
          type: actionTypes.SET_PRODUCT_LIST,
          value: data
        });
        setIsEmpthy(false);
        setIsloading(false);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <ProductTopHeader header={collectionHeader} />
      {/*filter-sort*/}
      <Grid container alignItems='center'>
        <Grid item xs={12} md={3}>
          {!isLoading && (
            <ContentTotalProduct
              totalProductCount={Object.keys(productList).length}
            />
          )}
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={9}
          justify='space-between'
          className={classes.filterSortWrapper}
        >
          {/*hidden<lg  filter button*/}
          <SidebarToggle />
          <SortingWrapper />
          <FilterSummary className={classes.filterSummary} />
        </Grid>
      </Grid>

      {/*contentContainer*/}
      {smDown ? (
        isLoading ? (
          <div>Loading</div>
        ) : isEmpthy ? (
          <div>There is no product with that criteria</div>
        ) : (
          <ContentProducts productList={productList} />
        )
      ) : (
        <Grid container>
          <Grid item md={3}>
            <ContentSidebar />
          </Grid>
          <Grid item md={9}>
            {isLoading ? (
              <div>Loading</div>
            ) : isEmpthy ? (
              <div>There is no product with that criteria</div>
            ) : (
              <ContentProducts productList={productList} />
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductCollection;
