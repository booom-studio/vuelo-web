import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card';
import * as colors from 'material-ui/colors';

const projects = [
  {
    title: 'Project I.',
    color: 'red'
  },
  {
    title: 'Project II.',
    color: 'blue'
  },
  {
    title: 'Project III.',
    color: 'lime'
  },
  {
    title: 'Project IV.',
    color: 'amber'
  }
];

const Projects = ({ user }) => (
  <Grid container spacing={16} alignContent="flex-start">
    {projects.map(({ title, color }, idx) => (
      <Grid item xs={12} md={4} key={idx}>
        <Card>
          <CardHeader
            title={title}
            avatar={<Avatar style={{ background: colors[color]['500'] }} />}
          />
          <CardContent>
            <Typography type="body2" align="left">
              Total hours tracked: {(Math.random() * 500).toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>More..</Button>
            <IconButton>
              <Icon>timer</Icon>
            </IconButton>
            <IconButton color="default">
              <Icon>delete</Icon>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

Projects.propTypes = {
  user: PropTypes.object.isRequired
};

export default Projects;
