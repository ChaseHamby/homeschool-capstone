
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
          <a className="bookProfile btn btn-danger" id="bookProfile" href={'/selectedProfile'}>View My Books</a>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Subject
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.subjectFilter} value="Math">Math</DropdownItem>
              <DropdownItem onClick={this.props.subjectFilter} value="Science">Science</DropdownItem>
              <DropdownItem onClick={this.props.subjectFilter} value="Language Arts"> Language Arts</DropdownItem>
              <DropdownItem onClick={this.props.subjectFilter} value="History">History</DropdownItem>
              <DropdownItem onClick={this.props.subjectFilter} value="Art">Art</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Grade
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.gradeFilter} value="Pre-K">Pre-K</DropdownItem>
              <DropdownItem onClick={this.props.gradeFilter} value="Kindergarten">Kindergarten</DropdownItem>
              <DropdownItem onClick={this.props.gradeFilter} value="Grades 1-3">Grades 1-3</DropdownItem>
              <DropdownItem onClick={this.props.gradeFilter} value="Grades 4-6">Grades 4-6</DropdownItem>
              <DropdownItem onClick={this.props.gradeFilter} value="Grades 7-8">Grades 7-8</DropdownItem>
              <DropdownItem onClick={this.props.gradeFilter} value="High School">High School</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle caret>
            Shop By Brand
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.brandFilter} value="Saxon">Saxon</DropdownItem>
              <DropdownItem onClick={this.props.brandFilter} value="Bookshark">Bookshark</DropdownItem>
              <DropdownItem onClick={this.props.brandFilter} value="Horizons">Horizons</DropdownItem>
              <DropdownItem onClick={this.props.brandFilter} value="Alpha & Omega">Alpha & Omega</DropdownItem>
              <DropdownItem onClick={this.props.brandFilter} value="Kumon">Kumon</DropdownItem>
              <DropdownItem onClick={this.props.brandFilter} value="Horrible Histories">Horrible Histories</DropdownItem>
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
          <NavbarBrand href="/" className="homeLogo">Custom Curriculum</NavbarBrand>
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
