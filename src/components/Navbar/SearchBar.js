import React from 'react';
import './SearchBar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grow, ClickAwayListener } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1)
  },
  list: {
    width: '50%',
    zIndex: 1000,
    position: 'absolute',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    left: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: '12px',
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  productImage: {
    padding: theme.spacing(1),
    margin: theme.spacing(0),
    borderRadius: '10%',
    width: '30px',
    height: '30px',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
}));

const Dummy = props => {
  const classes = useStyles();
  let history = useHistory();
  const productList = useSelector(state => state.filter.productList);
  const [searchResult, setSearchResult] = React.useState([]);
  const [showList, setShowList] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleChange = e => {
    setValue(e.target.value);
    setSearchResult(
      productList.filter(function(item) {
        return (
          item.name.toLowerCase().match(String(e.target.value).toLowerCase()) ||
          item.manufacturer
            .toLowerCase()
            .match(String(e.target.value).toLowerCase()) ||
          String(item.price)
            .toLowerCase()
            .match(String(e.target.value).toLowerCase())
        );
      })
    );
    setShowList(e.target.value ? true : false);
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener
        onClickAway={() => {
          setShowList(false);
          setValue('');
        }}
      >
        <form>
          <input
            type='search'
            placeholder='Search'
            onChange={handleChange}
            value={value}
          />
          <Grow in={showList && searchResult.length > 0}>
            <TableContainer component={Paper} className={classes.list}>
              <Table
                className={classes.table}
                size='small'
                aria-label='a dense table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align='right'>Brand</TableCell>
                    <TableCell align='right'>Price CA$</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {searchResult.map((item, index) => (
                    <TableRow
                      key={index}
                      hover={true}
                      onClick={() => {
                        setShowList(false);
                        setValue('');
                        history.push('/products/' + item.id);
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        <div
                          className={classes.productImage}
                          style={{ backgroundImage: `${item.images[0]}` }}
                        />
                      </TableCell>
                      <TableCell component='th' scope='row'>
                        {item.name}
                      </TableCell>
                      <TableCell align='right'>{item.manufacturer}</TableCell>
                      <TableCell align='right'>{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grow>
        </form>
      </ClickAwayListener>
    </div>
  );
};

export default Dummy;
