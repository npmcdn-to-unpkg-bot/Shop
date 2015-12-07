var Description = React.createClass({
    getDefaultProps: function () {
        return {
            description: [
            {name:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'Motherboard'},
            {name:'GIGABYTE-GA-78LMT-S3',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
             price: '$ 555', category: 'CPU'}
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
                <ProductDescriptionTemplate description={this.props.description} />
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>
        </div>
        );
  }
})