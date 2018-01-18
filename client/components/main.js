import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';

import { Button, Menu, Grid } from 'semantic-ui-react';
import { createPadRow } from '../utils';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the appbar
 *  and our drum pads.
 */
class Main extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    let padRow = createPadRow(4, 1, 'blue');

    return (
      <div className="main-div">
        <Menu tabular>
          <Menu.Item header>Randy's Drum Padzzz</Menu.Item>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='configurations' active={activeItem === 'configurations'} onClick={this.handleItemClick} />

          <Menu.Menu position='right'>
            <Menu.Item>
                <Button primary>Login</Button>
            </Menu.Item>
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Row columns={4}>
            {padRow}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
