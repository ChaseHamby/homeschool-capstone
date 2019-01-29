
import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  UncontrolledDropdown,
} from 'reactstrap';
import './mainNavbar.scss';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      authed: true,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    const { logoutClickEvent } = this.props; // equivalent of isAuthed = this.props.isAuthed
    const buildNavbar = () => {
      if (this.state.authed) {
        return (
          <Nav className="ml-auto" navbar>
          <a className="viewProfiles btn btn-warning" id="childProfile" href={'/childProfile'}>View Profiles</a>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Subject
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.clickFunction}>Math</DropdownItem>
              <DropdownItem>Science</DropdownItem>
              <DropdownItem>Language Arts</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Art</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Grade
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Pre-K</DropdownItem>
              <DropdownItem>Kindergarten</DropdownItem>
              <DropdownItem>Grades 1-3</DropdownItem>
              <DropdownItem>Grades 4-6</DropdownItem>
              <DropdownItem>Grades 7-8</DropdownItem>
              <DropdownItem>High School</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Brand
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Saxon</DropdownItem>
              <DropdownItem>Bookshark</DropdownItem>
              <DropdownItem>Horizons</DropdownItem>
              <DropdownItem>Alpha & Omega</DropdownItem>
              <DropdownItem>Scholastic</DropdownItem>
              <DropdownItem>Kumon</DropdownItem>
              <DropdownItem>Horrible Histories</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
            <NavItem>
              <NavLink className='logoutButton' onClick={logoutClickEvent}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
      <div className="my-navbar">
        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">Homeschool App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
