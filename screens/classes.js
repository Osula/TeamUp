class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>

      </View>
    );
  }
}
class Report extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
      );
    }
  }
  const RootStack = StackNavigator(
    {
      Home: {
        screen: card,
      },
      Details: {
        screen: album,
      },
    },
    {
      initialRouteName: 'Home',
    }
  );
