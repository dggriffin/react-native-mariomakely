const React = require('react-native');
const Dimensions = require('Dimensions');
const {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#F06234',
    padding: 20
  },
  itemWrapper: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
    color: "#FFF"
  },
  item: {
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 45,
    color:"#FFF"
  },
});

module.exports = class Menu extends Component {
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Greyson Griffin</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.item}>Search</Text>
          <Text style={styles.item}>Playlists</Text>
          <Text style={styles.item}>Browse</Text>
          <Text style={styles.item}>Recent</Text>
        </View>
      </ScrollView>
    );
  }
}
