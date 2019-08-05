import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';
import Grid from '@material-ui/core/Grid';
import classes from './Home.module.css';

const Home = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.get('/products.json').then(result => setData(result.data));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const generateProductImages = () => {
    if (isLoading) return <div>Loading ...</div>;
    else
      return Object.keys(data).map(key => {
        return (
          <Grid item key={key} xs={12} sm={4} md={3}>
            <div
              className={'card align-items-center ' + classes.imageContainer}
            >
              <Link to={'/product/' + key}>
                <div className={'view overlay'} style={{ cursor: 'pointer' }}>
                  <img
                    src={data[key].productImage}
                    className={'card-img-top ' + classes._img}
                    alt=''
                  />
                </div>
              </Link>
              <div className={'card-body text-center'}>
                <Link to={'/product/' + key} className={'grey-text'}>
                  <h5>Shirt</h5>
                </Link>
                <h5>
                  <strong>
                    <Link to={'/product/' + key} className={'dark-grey-text'}>
                      {data[key].productName + ' '}
                      <span className={'badge badge-pill danger-color'}>
                        NEW
                      </span>
                    </Link>
                  </strong>
                </h5>
                <h4 className={'font-weight-bold blue-text'}>
                  <strong>{data[key].productPrice}$</strong>
                </h4>
              </div>
            </div>
          </Grid>
        );
      });
  };

  return (
    <section className={'text-center my-5'} style={{ margin: '15px' }}>
      <h2 className={'h1-responsive font-weight-bold text-center my-5'}>
        Our bestsellers
      </h2>

      <p className={'grey-text text-center w-responsive mx-auto mb-5'}>
        HERO CONTENT GOES HERE...
      </p>

      <Grid container spacing={4}>
        {generateProductImages()}
      </Grid>
    </section>
  );
};

export default Home;
