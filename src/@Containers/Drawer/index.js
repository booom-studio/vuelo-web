import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { openDrawer, closeDrawer, selectProject } from '@dux/actions';
import { projects } from '@dux/queries';

import Drawer from './withStyles';

const createProject = graphql(
  gql`
    mutation($title: String!, $color: String) {
      createProject(title: $title, color: $color) {
        title
        color
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      createProject: (title, color) =>
        mutate({
          variables: { title, color }
        })
    })
  }
);

const mapStateToProps = ({ drawerOpen }) => ({
  open: drawerOpen
});

const mapDispatchToProps = {
  openDrawer,
  closeDrawer,
  selectProject
};

export default compose(
  projects,
  createProject,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer);
