import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CostumThemeProvider from '../Theme/costumThemeProvider';
import { Grid, Box } from '@material-ui/core';

import FeauteredPost from '../views/FeaturedPost/FeaturedPost';
import HeroContent from '../views/HeroContent/HeroContent';
import Footer from '../components/Footer/Footer';
import CheckOutModal from '../components/Modal/CheckOutModal';
import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar/Sidebar';

const heroContent = {
  h1: 'Winter Jackets',
  h2: 'Embrace cold-weather in the warmest styles.',
  routes: [
    { name: "MEN'S", route: 'collections/winterJeckets' },
    { name: "WOMEN'S", route: 'collections/winterJeckets' }
  ]
};
const featuredContent = [
  {
    h1: 'QUARTZ CO.',
    h2: 'Canadian-made Jackets & Parkas designed in Montreal.',
    routes: [
      { name: "MEN'S", route: 'collections/quartzco' },
      { name: "WOMEN'S", route: 'collections/quartzco' }
    ]
  },
  {
    h1: 'VALLIER',
    h2: 'All-weather apparel for better urban living',
    routes: [
      {
        name: "MEN'S",
        route: 'collections/vallier'
      },
      {
        name: "WOMEN'S",
        route: 'collections/vallier'
      }
    ]
  },
  {
    h1: 'UBR',
    h2: 'High-end urban outerwear designed in Oslo.',
    routes: [{ name: 'SHOP NOW', route: 'collections/ubr' }]
  },
  {
    h1: 'THE NORTH FACE',
    h2: 'Ready for Everest? The Summit Series has arrived.',
    routes: [{ name: 'SHOP NOW', route: 'collections/theNorthFace' }]
  }
];

const MainPageLayout = () => {
  const isOpen = useSelector(state => state.modal.checkOutModal);
  return (
    <React.Fragment>
      <CostumThemeProvider>
        <Navbar />
        <CheckOutModal open={isOpen} />
        <main>
          <SideBar />
          <HeroContent
            h1={heroContent.h1}
            h2={heroContent.h2}
            routes={heroContent.routes}
          />
          <Box m={2}>
            <Grid container spacing={1} justify='space-between'>
              {featuredContent.map((content, index) => (
                <Grid item key={index} xs={12} md={6}>
                  <FeauteredPost
                    h1={content.h1}
                    h2={content.h2}
                    routes={content.routes}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </main>
        <Footer />
      </CostumThemeProvider>
    </React.Fragment>
  );
};

export default MainPageLayout;
