var React = require('react-native');


var { Icon, } = require('react-native-icons');

var menu = React.createClass({

 render: function() {
  var menu = <Menu navigator={navigator}/>;
    return (
     <Icon
        name='fontawesome|facebook-square'
        size={70}
        color='#3b5998'
      />
    )
  }
});

class Routes {
  static RecentLevels() {
    return {
      component: require('./components/RecentLevels'),
      title: 'recent levels',
      leftButtonTitle: 'menu'
    }
  }
}

module.exports = Routes
