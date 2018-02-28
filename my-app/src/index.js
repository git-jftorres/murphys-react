import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Divider, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Menu.Item fitted><Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/></Menu.Item>
        <Menu.Item position="right">Home</Menu.Item>
        <Dropdown item text="About Us" icon="dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
            <Dropdown.Item>Catering/Private Events</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>St. Patrick's Day</Menu.Item>
        <Dropdown item text="Menus" icon="dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>Lunch Menu</Dropdown.Item>
            <Dropdown.Item>Dinner Menu</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Bar</Menu.Item>
        <Menu.Item><Icon name="search"/></Menu.Item>
    </Menu>
  )
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <Grid className="MiddleSection" verticalAlign='middle' columns={2}>
          <Grid.Column floated='right'>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
          </Grid.Column>
          <Grid.Column floated='left'>
            <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
          </Grid.Column>
        </Grid>
  )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
      <Grid className="FooterMenu" columns={3}>
        <Grid.Column>
          Lunch
          <hr/>
          <List>
            <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
            <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          Bar
          <hr/>
          <List>
            <List.Item>Monday- Friday from 11:00am</List.Item>
            <List.Item>Saturday- Sunday from 4:00pm</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          Dinner
          <hr/>
          <List>
            <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
            <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
          </List>
        </Grid.Column>
      </Grid>

  )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <MiddleSection/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));