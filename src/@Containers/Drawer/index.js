import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { openDrawer, closeDrawer } from 'dux/actions';

import Drawer from './withStyles';

const ALL_PROJECTS_QUERY = gql`
  {
    allProjects {
      id
      title
      color
    }
  }
`;

const allProjects = graphql(ALL_PROJECTS_QUERY, {
  props: ({ data: { allProjects: projects = [], loading, refetch } }) => ({
    projects,
    refetchProjects: refetch,
    loading
  })
});

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
  closeDrawer
};

export default compose(
  allProjects,
  createProject,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer);
