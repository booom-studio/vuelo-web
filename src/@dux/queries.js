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
    props: ({ data: { colors, loading } }) => ({
      colors: colors && JSON.parse(colors),
      loadingColors: loading
    })
  }
);

export const setCubeId = graphql(
  gql`
    mutation setCubeId($cubeId: String) {
      setCubeId(cubeId: $cubeId) {
        cubeId
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      setCubeId: cubeId =>
        mutate({ variables: { cubeId } }).then(({ data: { cubeId } }) => cubeId)
    })
  }
);

export const cubeInfo = graphql(
  gql`
    {
      cubeInfo {
        cubeId
        status
      }
    }
  `,
  {
    props: ({ data: { cubeInfo: { cubeId, status } = {}, loading } }) => ({
      cubeId,
      cubeStatus: status,
      loadingCubeInfo: loading
    }),
    options: { pollInterval: 1000 }
  }
);
