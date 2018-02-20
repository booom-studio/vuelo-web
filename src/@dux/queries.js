import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PROJECTS_QUERY = gql`
  {
    allProjects {
      id
      title
      color
    }
  }
`;

export const projects = graphql(ALL_PROJECTS_QUERY, {
  props: ({ data: { allProjects: projects = [], loading, refetch } }) => ({
    projects,
    refetchProjects: refetch,
    loading
  })
});
