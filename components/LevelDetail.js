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

var LevelDetail = React.createClass({

  render : function() {
    var movie = this.props.level;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.icon}}
          style={styles.thumbnail}
        />
        <View>
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
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    width: 300,
    height: 300,
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


module.exports = LevelDetail
