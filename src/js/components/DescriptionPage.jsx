var DescriptionPage = React.createClass({
    getInitialState: function(){
        return {
            currentPage: PageName.getPageName()
        }
    },
    getDefaultProps: function () {
    return {
        categories: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'elementspagelink__img--img1', price:'$ 555', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S3', img:'elementspagelink__img--img2', price:'$ 655', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S4', img:'elementspagelink__img--img3', price:'$ 700', link:'#GIGABYTE-GA-78LMT-S2'}, 
		{name:'GIGABYTE-GA-78LMT-S5', img:'elementspagelink__img--img4', price:'$ 900', link:'#GIGABYTE-GA-78LMT-S2'}     
      ],
        imgSlider: [
        {img: 'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg',
        minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
        minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
        minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
        minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',
        minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg',}
        ],
        description: [
        {name:'GIGABYTE-GA-78LMT-S2',
        description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        price: '$ 555', category: 'Motherboard'}
        ],      
        breadcrumb: [
        {name:'GIGABYTE-GA-78LMT-S2',
        description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
        price: '$ 555', category: 'Motherboard'}
        ],
        homePage: [
            {name: 'Motherboard', href: '#itemList'},
            {name: 'CPU', href: '#itemList'},
            {name: 'RAM', href: '#itemList'},
            {name: 'VideoAdapter', href: '#itemList'},
            {name: 'HDD', href: '#itemList'},
            {name: 'PowerSource', href: '#itemList'},
            {name: 'Cooling', href: '#itemList'}
        ]
    }
  },
    updatePage: function(e){
        window.location.assign(e.target.getAttribute('href'));
        this.setState({
            currentPage: PageName.getPageName()
        });
 
    },
      
render: function () {
    return (
        <div className="wrapper newv__page">
        <Header /> 
        <div className="page__menu">
                {this.state.currentPage == '#itemList' ? <Navigation /> : null 
        }
        </div>
        <article className="wrapper__product-section product-section" >       
            <div className="product-section__product-description product-description">
                {this.state.currentPage == '' ? <HomePage homePage={this.props.homePage} /> : null 
        }
                {this.state.currentPage == '#itemList' ? <ItemsList categories={this.props.categories}  /> : null 
        }        

                {this.state.currentPage == '#GIGABYTE-GA-78LMT-S2' ? <Breadcrumb breadcrumb={this.props.breadcrumb} /> : null 
        }
                {this.state.currentPage == '#GIGABYTE-GA-78LMT-S2' ? <Slider imgSlider={this.props.imgSlider} /> : null 
        }    
                {this.state.currentPage == '#GIGABYTE-GA-78LMT-S2' ? <DescriptionList description={this.props.description} /> : null 
        }               
            </div>
        </article>
        <Footer/>
        </div>
    );
  }
})