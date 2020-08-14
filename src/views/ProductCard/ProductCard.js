import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../../components/Card/Card';
import CardMedia from '../../components/Card/CardMedia';
import CardContent from '../../components/Card/CardContent';
import CardActionArea from '../../components/Card/CardActionArea';
import Rating from '@material-ui/lab/Rating';
import { useHistory } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contentProducts: {
    width: '100%',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3)
  },
  media: {
    paddingTop: '120%',
    transition: 'all 0.3s',
    transform: 'scale(1)'
  },
  productBadgeNew: {
    position: 'absolute',
    color: '#0cf',
    textTransform: 'uppercase',
    fontWeight: '700',
    top: theme.spacing(1),
    left: theme.spacing(1),
    fontSize: '1.1em'
  },
  productBadgeDiscount: {
    position: 'absolute',
    color: '#d64615',
    textTransform: 'uppercase',
    fontWeight: '900',
    top: theme.spacing(1),
    right: theme.spacing(1),
    fontSize: '1.1em',
    lineHeight: '2'
  },
  prodcutInfo: {
    color: '#212529',
    display: 'block'
  },
  prodcutInfoManufacturer: {
    color: '#212529',
    fontFamily: 'Roboto',
    fontSize: '16.002px',
    fontWeight: '500'
  },
  prodcutInfoName: {
    fontWeight: '300'
  },
  productInfoPrice: { fontSize: '1.3em', lineHeight: '1.5', fontWeight: '400' },
  prodcutInfoDiscountedPrice: {
    fontSize: '1.3em',
    lineHeight: '1.5',
    fontWeight: '400',
    color: '#d64615'
  },
  prodcutInfoOldPrice: {
    fontSize: '1.3em',
    lineHeight: '1.5',
    fontWeight: '400',
    color: '#ccc',
    textDecoration: 'line-through'
  }
}));
const StyledRating = withStyles({
  iconFilled: {
    color: '#000'
  },
  iconEmpty: {
    color: '#c5ccd6'
  }
})(Rating);

const ProductCard = props => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card>
      <CardActionArea
        onClick={() => history.push('/products/' + props.product.id)}
      >
        <CardMedia image={props.product.images[0]}>
          {props.product.new ? (
            <div className={classes.productBadgeNew}>NEW</div>
          ) : null}
          {props.product.discount ? (
            <div className={classes.productBadgeDiscount}>
              {'-' + props.product.discount + '%'}
            </div>
          ) : null}
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <div className={classes.prodcutSwatches}></div>
        <div className={classes.prodcutInfo}>
          <p className={classes.prodcutInfoManufacturer}>
            {props.product.manufacturer}
          </p>
          <p className={classes.prodcutInfoName}>{props.product.name}</p>
          <StyledRating
            name='customized-color'
            size='small'
            readOnly
            value={4}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
          />

          {props.product.discount ? (
            <div>
              <span className={classes.prodcutInfoDiscountedPrice}>
                {'CA$ ' + (props.product.price * props.product.discount) / 100}
              </span>
              <span className={classes.prodcutInfoOldPrice}>
                {'CA$ ' + props.product.price}
              </span>
            </div>
          ) : (
            <div className={classes.productInfoPrice}>
              {'CA$ ' + props.product.price}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
