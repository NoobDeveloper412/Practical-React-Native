export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  render() {
    return (
      <Text onPress={() => setState({ name: "Delenn" })}>
        My name is
        {this.state.name}
      </Text>
    );
  }
}

export class MyComponent extends React.Component {
  render() {
    return <Person name="Delenn" />;
  }
}
