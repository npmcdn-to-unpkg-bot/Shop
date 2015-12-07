
var productDescriptionTemp = React.createClass({
    getDefaultProps: function () {
        return {
            description: [
            {name:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'},
            {name:'GIGABYTE-GA-78LMT-S3',
            description:'Технические характеристики Процессор Intel I5 OEM, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1155, двухканальный режим памяти.',
             price: '$ 695', category: 'Motherboard'}
            ],   
        }  
    },
            
    render: function () {       
    var description = this.props.description.map(function(category, key) {
      return (
                <div className="layout-description"  key={key}> 
                    <h1 className="layout-description__header">{category.name}</h1>
                    <div className="layout-description__img-star img-star">
                        <div className="img-star__raiting"></div>
                    </div>
                    <p>{category.description}</p>
                    <p className="layout-description__label">
          <label htmlFor="quantiti">Quantity</label></p>
          <input className="layout-description__quantiti" id="quantiti" type="number" min="1" max="100" defaultValue="1"/>
                    <div className="layout-description__add-cart add-cart">
                        <div className="add-cart__price">Price: {category.price}</div>
                        <a className="add-cart__btn" href="CartPage.html">
                            Add to cart
                        </a>
                    </div>
                    <div className="layout-description__lineSocial lineSocial">
                        <a className="lineSocial__twitter lineSocial__line-social" href=""></a>
                        <a className="lineSocial__vkontakte lineSocial__line-social" href=""></a>
                        <a className="lineSocial__facebook lineSocial__line-social" href=""></a>
                        <a className="lineSocial__instagram lineSocial__line-social" href=""></a>
                    </div>
                </div>

      );
    });
    return (
      <div className="">
        {description}
      </div>
    );
  }
})