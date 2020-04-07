import React, { Component } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { connect } from 'react-redux'
import { showEpisodes } from '../redux/actions/showEpisodes'


class EpisodesList extends Component {
  componentWillMount() {
    this.props.showEpisodes()
  }
  
  renderEpisodesList() {
    return this.props.episodes.map((episode, i) => {
      return (
        <TableRow key={i}>
          <TableCell >
          {episode.episode}
          </TableCell>
          <TableCell>
            {episode.name}
          </TableCell>
          <TableCell align="center">
            <IconButton aria-label="upload picture" component="span">
              <VisibilityIcon style={{ color: "#00b1c9" }}/>
            </IconButton>
          </TableCell>
        </TableRow>
      )
    })
  }

render() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow bgcolor="#00b1c9">
            <TableCell>
            <Typography variant="h5" style={{ color: "white" }}>
              Episode
            </Typography>
            </TableCell>
            <TableCell>
            <Typography variant="h5" style={{ color: "white" }}>
              Name
            </Typography>
            </TableCell>
            <TableCell align="center">
            <Typography variant="h5" style={{ color: "white" }}>
              View
            </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { this.renderEpisodesList() }
        </TableBody>
      </Table>
    </TableContainer>
  );
}}


function mapStateToProps(state) {
  return {
    episodes: state.episode.list
  }
}

export default connect(mapStateToProps, {showEpisodes})(EpisodesList)