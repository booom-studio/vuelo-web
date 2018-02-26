import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const projects = graphql(
  gql`
    {
      allProjects {
        id
        title
        color
      }
    }
  `,
  {
    props: ({ data: { allProjects: projects = [], loading, refetch } }) => ({
      projects,
      refetchProjects: refetch,
      loading
    })
  }
);

export const createProject = graphql(
  gql`
    mutation($title: String!) {
      createProject(title: $title) {
        id
        title
        color
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      createProject: ({ title }) =>
        mutate({
          variables: { title }
        }).then(({ data: { createProject } }) => createProject)
    })
  }
);

export const updateProject = graphql(
  gql`
    mutation($id: ID!, $title: String, $color: String) {
      updateProject(id: $id, title: $title, color: $color) {
        id
        title
        color
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      updateProject: ({ id, title, color }) =>
        mutate({
          variables: { id, title, color }
        })
    })
  }
);

export const toggleProject = graphql(
  gql`
    mutation($projectId: ID!) {
      toggle(projectId: $projectId) {
        id
        projectId
        startTime
        endTime
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      toggleProject: projectId =>
        mutate({
          variables: { projectId }
        }).then(({ data: { toggle } }) => toggle)
    })
  }
);

export const currentTimeEntry = graphql(
  gql`
    {
      currentTimeEntry {
        id
        projectId
        startTime
      }
    }
  `,
  {
    props: ({ data: { currentTimeEntry, startPolling, stopPolling } }) => ({
      currentTimeEntry,
      currentTimeEntryPolling: {
        start: startPolling,
        stop: stopPolling
      }
    })
  }
);

export const refreshToken = graphql(
  gql`
    mutation($oldToken: String!) {
      refreshToken(oldToken: $oldToken) {
        token
        user {
          id
          name
          email
          picture
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      refreshToken: oldToken =>
        mutate({ variables: { oldToken } }).then(
          ({ data: { refreshToken } }) => refreshToken
        )
    })
  }
);

export const colors = graphql(
  gql`
    {
      colors
    }
  `,
  {
    props: ({ data: { colors } }) => ({
      colors: colors && JSON.parse(colors)
    })
  }
);
