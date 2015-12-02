
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(React.createElement(DescriptionPage), 
    document.getElementById('productDescription'));
});

window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(React.createElement(CategoryPage), 
    document.getElementById('page'));
});

window.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
	React.createElement(Footer), 
    document.getElementById('downPage'));
});

