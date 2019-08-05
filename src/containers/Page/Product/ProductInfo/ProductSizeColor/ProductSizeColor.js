import React from 'react';
import classes from './ProductSizeColor.module.css';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../../../store/actions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useSelector } from 'react-redux';
import {
  setProductQuantity,
  increaseProductQuantity,
  decreaseProductQuantity
} from '../../../../../store/actions';

const ProductSizeColor = props => {
  const dispatch = useDispatch();

  const [colorIndex, setcolorIndex] = React.useState(0);
  const showError = useSelector(state => state.productInfo.showError);

  return (
    <Grid container spacing={1} alignItems='center'>
      <Grid item xs={12}>
        <label style={{ display: 'block' }}>COLORS</label>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.container}>
          {props.colorOptions
            ? props.colorOptions.map((color, index) => (
                <label
                  className={classes._label}
                  key={color}
                  onClick={() => {
                    setcolorIndex(index);
                    dispatch({
                      type: actionTypes.SET_PRODUCT_COLOR,
                      value: color
                    });
                  }}
                  style={{
                    cursor: 'pointer',
                    borderBottom: [
                      '2px',
                      'solid',
                      colorIndex === index ? '#bd1e2e' : 'transparent'
                    ].join(' ')
                  }}
                >
                  <span
                    className={classes.round}
                    style={{ backgroundColor: color }}
                  />
                </label>
              ))
            : null}
        </div>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={6}>
        <label htmlFor='isize' style={{ display: 'block' }}>
          SIZE <span style={{ color: '#bd1e2e' }}>*</span>
        </label>
      </Grid>
      <Grid item xs={6}>
        <label htmlFor='iquantity' style={{ display: 'block' }}>
          QUANTITY:
        </label>
      </Grid>
      <Grid item xs={5}>
        <Select
          required
          id='isize'
          style={{ width: '100%' }}
          onChange={e => {
            dispatch({
              type: actionTypes.SET_PRODUCT_SIZE,
              value: e.target.value
            });
          }}
          value={props.productSize}
          input={<OutlinedInput />}
        >
          <MenuItem disabled value='1'>
            Choose options
          </MenuItem>
          {props.sizeOptions
            ? props.sizeOptions.map(size => (
                <MenuItem value={size} key={size}>
                  {size}
                </MenuItem>
              ))
            : null}
        </Select>
        {showError && <FormHelperText>This is required!</FormHelperText>}
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => dispatch(decreaseProductQuantity())}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M19 13H5v-2h14v2z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <OutlinedInput
          style={{ width: '100%' }}
          id='iquantity'
          name='iquantity'
          value={props.productQuantity}
          onChange={e => dispatch(setProductQuantity(e.target.value))}
          min='1'
        />
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => dispatch(increaseProductQuantity())}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
    </Grid>
  );
};

export default ProductSizeColor;
