import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 'auto',
    textAlign: 'left',
    fontSize: '1rem',
    padding: theme.spacing(4)
  },
  p: {
    fontSize: '.92857em'
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%'
    }
  },
  link: {
    cursor: 'pointer'
  }
}));

const text = {
  help: ['Shipping', 'Returns', 'Price Policy', 'Sales Tax', 'Warranty'],
  faq: [
    'Where can I get my tracking number?',
    'How do I use my store credit?',
    'Why won’t my discount code work?',
    'Where do I use my discount code?'
  ],
  aboutUs: ['Become a lifetime member & save', 'Our story', 'Careers'],
  partnerSites: ['sample-blog.com']
};

const Footer = props => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container spacing={1} justify='space-around'>
        <Grid item classes={{ root: classes.grid }}>
          <span style={{ margin: '0', lineHeight: '2rem', fontSize: '1rem' }}>
            <Link
              to={'/#'}
              variant='inherit'
              color='inherit'
              className={classes.link}
            >
              {'HELP'}
            </Link>
          </span>
          {text.help.map((value, index) => (
            <p key={index} style={{ margin: '0', fontSize: '.8em' }}>
              <Link
                to={'/#'}
                variant='inherit'
                color='inherit'
                className={classes.link}
              >
                {value}
              </Link>
            </p>
          ))}
        </Grid>

        <Grid item classes={{ root: classes.grid }}>
          <span style={{ margin: '0', lineHeight: '2rem', fontSize: '1rem' }}>
            <Link
              to={'/#'}
              variant='inherit'
              color='inherit'
              className={classes.link}
            >
              {'FAQ'}
            </Link>
          </span>
          {text.faq.map((value, index) => (
            <p key={index} style={{ margin: '0', fontSize: '.8em' }}>
              <Link
                to={'/#'}
                variant='inherit'
                color='inherit'
                className={classes.link}
              >
                {value}
              </Link>
            </p>
          ))}
        </Grid>
        <Grid item classes={{ root: classes.grid }}>
          <span style={{ margin: '0', lineHeight: '2rem', fontSize: '1rem' }}>
            <Link
              to={'/#'}
              variant='inherit'
              color='inherit'
              className={classes.link}
            >
              {'ABOUT US'}
            </Link>
          </span>
          {text.aboutUs.map((value, index) => (
            <p key={index} style={{ margin: '0', fontSize: '.8em' }}>
              <Link
                to={'/#'}
                variant='inherit'
                color='inherit'
                className={classes.link}
              >
                {value}
              </Link>
            </p>
          ))}
        </Grid>

        <Grid item classes={{ root: classes.grid }}>
          <span style={{ margin: '0', lineHeight: '2rem', fontSize: '1rem' }}>
            <Link
              to={'/#'}
              variant='inherit'
              color='inherit'
              className={classes.link}
            >
              {'PARTNER SITES'}
            </Link>
          </span>
          {text.partnerSites.map((value, index) => (
            <p key={index} style={{ margin: '0', fontSize: '.8em' }}>
              <Link
                to={'/#'}
                variant='inherit'
                color='inherit'
                className={classes.link}
              >
                {value}
              </Link>
            </p>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
