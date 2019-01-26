
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
} from 'reactstrap';
import './mainNavbar.scss';

class MainNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
    logoutClickEvent: PropTypes.func,
  }

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
          <Button className="viewProfiles" color="warning" id="childProfile" onClick={this.changeView}>View Profiles</Button>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            Shop By Subject
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Math</DropdownItem>
              <DropdownItem>Science</DropdownItem>
              <DropdownItem>Language Arts</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Art</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
          </Dropdown>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
            </DropdownMenu>
          </Dropdown>
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
        <Navbar color="dark" dark expand="lg">
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
