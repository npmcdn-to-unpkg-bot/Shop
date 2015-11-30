                /*Рендер страницы Description*/
window.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(React.createElement(DescriptionPage), 
    document.getElementById('productDescription'));
          });				

					/*Рендер страницы категорий*/
window.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(
	  React.createElement(CategoryPage), 								  document.getElementById('page'));
	}
)

						/*Footer*/
window.addEventListener("DOMContentLoaded",	function() {
	ReactDOM.render(
 	  React.createElement(Footer), 										  document.getElementById('footer'));
	}
)
