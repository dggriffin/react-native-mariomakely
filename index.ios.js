/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview');
var Routes = require('./Routes')
var SideMenu = require('react-native-side-menu');
var Menu = require('./Menu');

var {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
  ScrollView,
  NavigatorIOS
} = React;

var REQUEST_URL = 'http://mariomakely.meteor.com/api/levels/';

var test = React.createClass({

 render: function() {
  var menu = <Menu navigator={navigator}/>;
    return (
      <SideMenu menu={menu}>
      <NavigatorIOS
        style={styles.container}
        barTintColor="#F06234"
        titleTextColor="white"
        tintColor="white"
        initialRoute={Routes.RecentLevels()}
      />
      </SideMenu>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('test', () => test);
