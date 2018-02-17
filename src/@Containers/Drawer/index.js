import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { openDrawer, closeDrawer } from 'dux/actions';

import Drawer from './Drawer';

const getProjects = graphql(
  gql`
    query getProjects {
      allProjects {
        id
        title
        color
      }
    }
  `
);

const mapStateToProps = ({ drawerOpen }) => ({
  open: drawerOpen
});

const mapDispatchToProps = {
  openDrawer,
  closeDrawer
};

export default compose(
  getProjects,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer);
