var React = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview');

var {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;

var REQUEST_URL = 'http://mariomakely.meteor.com/api/levels/';

var RecentLevels = React.createClass({

   getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

   fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.splice(0,10)),
          loaded: true,
        });
      })
      .done();
  },

  fetchPromise: function(){
    return Promise.resolve(this.fetchData());
  },

  _onPressButton: function(level){
     this.props.navigator.push({
        component: require('./LevelDetail'),
        title: "level detail",
        passProps: {level: level}
     });
  },

 render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
        <RefreshableListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          loadData={this.fetchData}
          style={styles.listView}
        />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading levels...
        </Text>
      </View>
    );
  },

  renderMovie: function(movie) {
    return (
      <TouchableHighlight
      onPress={() => this._onPressButton(movie)}
      underlayColor="#C9EBFF">
      <View style={styles.container}>
        <Image
          source={{uri: movie.icon}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style = {styles.secondaryInfo}>
          <Image
          source={{uri: movie.user.icon}}
          style={styles.userThumbnail}
        />
          <Text style={styles.year}>Made by {movie.user.name}</Text>
          </View>
        </View>
      </View>
      </TouchableHighlight>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingBottom: 15
  },
  rightContainer: {
    flex: 1,
  },
  listView: {
    paddingTop: 60,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  thumbnail: {
    width: 80,
    height: 90,
    borderWidth: 5,
    borderColor: "#C9EBFF"
  },
  userThumbnail: {
    width: 25,
    height: 25,
    borderRadius: 15
  },
  secondaryInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
    marginTop: 25,
    textAlign: 'center',
    color: "#252E62"
  },
  year: {
    textAlign: 'center',
    lineHeight: 22,
    color: 'grey'
  },
});


module.exports = RecentLevels
