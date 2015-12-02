var DescriptionPage = React.createClass({
  getDefaultProps: function () {
    return {
        imgSlider: [{
        img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
        minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
        minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
        minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
        minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
        minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
            }],
      description: [{
        name:'GIGABYTE-GA-78LMT-S2',
        description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        price: '$ 555', category: 'Motherboard'
        }],      
        breadcrumb: [{
        name:'GIGABYTE-GA-78LMT-S2',
        description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        price: '$ 555', category: 'Motherboard'
        }],
    }
  },
render: function () {
    return (
        <div className="wrapper">
        <Header /> 
        <article className="wrapper__product-section product-section" >       
            <div className="product-section__product-description product-description">
                <Breadcrumb breadcrumb={this.props.breadcrumb} />
                <Slider imgSlider={this.props.imgSlider} />
                <DescriptionList description={this.props.description} />
            </div>
        </article>
        <Footer/>
        </div>
    );
  }
})