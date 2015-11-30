/*Описание товара*/
var DescriptionList = React.createClass({
  render: function () {    
    var description = this.props.description.map(function(category, key) {
      return (
          <div className="product-description" key={key}>
                <ol className="product-description__breadcrumb breadcrumb">
                    <li className="breadcrumb__list"><a href="index.html">Главная</a></li>
                    <li className="breadcrumb__list"><a href="Motherboard.html">Категория</a></li>
                    <li className="breadcrumb__list">Товар</li>
                </ol>
                <div className="product-description__slider-img slider-img" id="slider">
                    <div className="slider-img__big-img big-img">
                    <img className="big-img__positioner" src={category.img} id="slider-big-img"/>
                </div>
                    <div className="slider-img__min-img min-img" id="slider-min-img">
                        <div className="min-img__arrow min-img__arrow-left" onclick="sliderObj.leftSlide();"></div>

                            <img className="min-img--style" src={category.minImg1}/>
                            <img className="min-img--style" src={category.minImg2}/>
                            <img className="min-img--style" src={category.minImg3}/>
                            <img className="min-img--style" src={category.minImg4}/> 
                            <img className="min-img--style" src={category.minImg5}/>

                        <div className="min-img__arrow min-img__arrow-right" onclick="sliderObj.rightSlide();"></div>
                    </div>
                </div>
                <div className="product-description__layout-description layout-description"> 
                    <h1 className="layout-description__header"> Товар </h1>
                    <div className="layout-description__img-star img-star">
                        <div className="img-star__raiting"></div>
                    </div>
                    <p>{category.description}</p>
                    <p className="layout-description__label"><label for="quantiti">Quantity</label></p>
                    <input className="layout-description__quantiti" id="quantiti" type="number" min="1" max="100" value="1"/>
                    <div className="layout-description__add-cart add-cart">
                        <div className="add-cart__price">Price: $555</div>
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
          </div>
      );
    });
    return (
      <div className="category-list">
        {description}
      </div>
    );
  }
})