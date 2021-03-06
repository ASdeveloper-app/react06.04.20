import React, { Component } from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { Flex } from '@chakra-ui/core'

export default class Navbar extends Component {
    state= {
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
          <Flex top={0}
          zIndex="99"
          w="100vw"
          h="7vh"
          align="center">
            <nav className="navbar">
              <div className="nav-center">
                <div className="nav-header">
                  <Link to="/">
                    <img className="nav-img" src="../logorm.png" alt="Rick & Morty"/>
                  </Link>
                  <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignJustify className="nav-icon"/>
                  </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                  <li>
                  <Link to="/news">
                    News
                  </Link>
                  </li>
                  <li>
                  <Link to="/characters">
                    Characters
                  </Link>
                  </li>
                  <li>
                  <Link to="/episodes">
                    Episodes
                  </Link>
                  </li>
                  <li>
                  <Link to="/locations">
                    Locations
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </Flex>
        )
    }
}


