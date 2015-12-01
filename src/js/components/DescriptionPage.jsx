var DescriptionPage = React.createClass({
  getDefaultProps: function () {
    return {
      description: [
        {name:'GIGABYTE-GA-78LMT-S2', img:'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg', description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.', minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg', minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg', minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg', minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg', minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg'},
          {name:'GIGABYTE-GA-78LMT-S2', img:'img/CPU/Intel/Intel%20Celeron%20G1620%20OEM.jpg', description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.', minImg1: 'img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg', minImg2:'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg', minImg3: 'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg', minImg4: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg', minImg5: 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg'},

      ],
    }
   
  },
render: function () {
    return (
        <div className="product-section__product-description">
          <DescriptionList description={this.props.description}/>
        </div>
    );
  }
})