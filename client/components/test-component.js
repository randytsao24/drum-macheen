import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Button, Dropdown, Menu } from 'semantic-ui-react'

/**
 * COMPONENT
 */
class TestComponent extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size='mini'>
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
    )
  }
}

export default connect()(TestComponent);
