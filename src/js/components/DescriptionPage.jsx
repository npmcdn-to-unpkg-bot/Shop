var Description = React.createClass({
    getInitialState: function () {
		return {
        id: this.props.params.id,
               };
  	},
    getItemDescription: function(id) {
        if (id =='GIGABYTE-GA-78LMT-S2')  {
          return this.props.items1;
        }      
        if (id =='GIGABYTE-GA-78LMT-S3')  {
          return this.props.items2;
        }        
        
    },
    
    getDefaultProps: function () {
        return {
            items1: [
            {name:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
            ], 
            items2: [
            {name:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА',
             price: '$ 32452345', category: 'Motherboard'}
            ], 
            items3: [
            {name:'GIGABYTE-GA-78LMT-S4',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
            ], 
            items4: [
            {name:'GIGABYTE-GA-78LMT-S5',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'}
			],   
        }  
    },
    render: function () {
        return (
        <div className="page">
            <div className="page__header"> 
                <Header />
            </div>
            <div className="page__content"> 
                <Breadcrumb breadcrumb = {this.getItemDescription(this.state.id)} />
                <ProductDescriptionTemplate description={this.getItemDescription(this.state.id)} />
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>
        </div>
        );
  	}
});

