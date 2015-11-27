var HelloWorld = React.createClass({
  displayName: 'HelloWorld',


  getInitialState: function() {
    return {message: 'Hello World!'};
  },


hi: function(event) {
    this.setState({message: 'hi.'});
  },
goodbye: function(event) {
    this.setState({message: 'goodbye.'});
  },


  render: function() {
    return (
      React.DOM.h1({onClick:this.hi}, this.state.message),                ({onClick:this.goodbye}, this.state.message)
        
    );
  }
});

React.renderComponent(
  HelloWorld(null),
  document.getElementById('createProductDescription')
);
