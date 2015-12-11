import {ProductDescriptionTemplate} from 'Description.jsx'
import {Header} from 'Header.jsx'
import {Footer} from 'Footer.jsx'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import {Breadcrumb} from 'Breadcrumb.jsx'
import {cart} from 'cart.jsx'
var Description = React.createClass({
    getInitialState: function () {
		return {
        id: this.props.params.id,
               };
  	},
    getItemDescription: function(id) {
        var arrid = [
            {id:'GIGABYTE-GA-78LMT-S2', items: 'items1'},
            {id:'GIGABYTE-GA-78LMT-S3', items: 'items2'},
            {id:'GIGABYTE-GA-78LMT-S4', items: 'items3'},
            {id:'GIGABYTE-GA-78LMT-S5', items: 'items4'},
            {id:'AMD-A10-7870K-OEM', items: 'items5'},

        ];
		for (var i = 0; i <arrid.length; i++) {
            if (id == arrid[i].id) {				
				return this.props[arrid[i].items];
      		}					
		}
    },
    getDefaultProps: function () {
        return {
			items1: [
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S2', 
                img:     'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',  
                minImg1: 'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',
                minImg2: 'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',
                minImg3: 'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',
                minImg4: 'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',
                minImg5: 'img/motherboard/Gigabyte/GIGABYTE%20GA-78LMT-S2.jpg',
                price:'$ 555', 
                link:'GIGABYTE-GA-78LMT-S2',
                description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}], 
            items2: [
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S3', 
                img:     'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg',
                minImg1: 'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg',
                minImg2: 'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg',
                minImg3: 'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg',
                minImg4: 'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg',
                minImg5: 'img/motherboard/Gigabyte/GIGABYTE%20GA-990FXA-UD5.jpg', price:'$ 655', link:'GIGABYTE-GA-78LMT-S3',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}], 
            items3: [
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S4', img:'unit-value__img-moth3', price:'$ 700', link:'GIGABYTE-GA-78LMT-S4',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}],
            items4: [
				{category: 'Motherboard', name:'GIGABYTE-GA-78LMT-S5', img:'unit-value__img-moth4', price:'$ 900', link:'GIGABYTE-GA-78LMT-S5',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}],
			
            items5: [
				{category: 'CPU', name:'AMD A10-7870K OEM', img:'unit-value__img-cpu1', price:'$ 1555', link:'AMD-A10-7870K-OEM',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}],
            items6: [
				{category: 'CPU', name:'AMD FX-8300 OEM', img:'unit-value__img-cpu2', price:'$ 6035', link:'AMD-A10-7870K-OEM',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}],
            items7: [
				{category: 'CPU', name:'Intel Pentium G3420 OEM', img:'unit-value__img-cpu3', price:'$ 7504', link:'AMD-A10-7870K-OEM',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}], 			
			RAM: [
				{category: 'CPU', name:'AMD Radeon Entertainment Series [R538G1] 8 Гб', img:'unit-value__img-ram1', price:'$ 200', link:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'CPU', name:'Crucial Ballistix Tactical [BLT4G3D] 4 Гб', img:'unit-value__img-ram2', price:'$ 155', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'},
				{category: 'CPU', name:'Kingston HyperX FURY Red Series [HX316C] 16 Гб', img:'unit-value__img-ram3', price:'$ 455', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}
			],
			
			VideoAdapter: [
				{category: 'VideoAdapter', name:'Asus GeForce GT 730 [GT730-4GD3]', img:'unit-value__img-video1', price:'$ 1555', link:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}, 
				{category: 'VideoAdapter', name:'MSI AMD Radeon R7 370 Gaming 4G', img:'unit-value__img-video2', price:'$ 1999', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'VideoAdapter', name:'GIGABYTE GeForce GTX 750 Ti', img:'unit-value__img-video3', price:'$ 1777', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'},					{category: 'VideoAdapter', name:'Asus GeForce GT 730 [GT730-4GD3]', img:'unit-value__img-video3', price:'$ 1555', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
			],
			
			HDD: [
				{category: 'HDD', name:'Seagate Constellation ES.3 1 Тб', img:'unit-value__img-hdd1', price:'$ 155', link:'GIGABYTE-GA-78LMT-S2',
            description:'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}, 
				{category: 'HDD', name:'Toshiba DT 01ACA200 2 Тб', img:'unit-value__img-hdd2', price:'$ 160', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'HDD', name:'WD Caviar Blue WD10EZEX 1 Тб', img:'unit-value__img-hdd3', price:'$ 200', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'},
				{category: 'HDD', name:'Toshiba DT 01ACA200 2 Тб', img:'unit-value__img-hdd2', price:'$ 160', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}
			],
			
			PowerSource: [
				{category: 'PowerSource', name:'Be Quiet PURE POWER L8 700W [BN225]', img:'unit-value__img-power1', price:'$ 205', link:'GIGABYTE-GA-78LMT-S2',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'PowerSource', name:'Chieftec A-135 Series 650W [APS-650SB]', img:'unit-value__img-power2', price:'$ 160', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'PowerSource', name:'Thermaltake TR2 600W [TR-600P]', img:'unit-value__img-power3', price:'$ 305', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'},
				{category: 'PowerSource', name:'Zalman GVM 850W [ZM850-GVM]', img:'unit-value__img-power4', price:'$ 255', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}
			],
			
			Cooling: [
				{category: 'Cooling', name:'DEEPCOOL Ice Blade 100', img:'unit-value__img-cooling1', price:'$ 15', link:'GIGABYTE-GA-78LMT-S2',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'Cooling', name:'Thermaltake NiC L31', img:'unit-value__img-cooling2', price:'$ 10', link:'GIGABYTE-GA-78LMT-S3',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
				{category: 'Cooling', name:'Zalman CNPS5X', img:'unit-value__img-cooling3', price:'$ 25', link:'GIGABYTE-GA-78LMT-S4',
            description:'ЛАЛАЛАЛАЛАЛАЛАЛАЛЛАЛАЛАЛЛАЛАЛАЛАЛЛАЛАЛА'}, 
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
                
                <ProductDescriptionTemplate description={this.getItemDescription(this.state.id)} >
                </ProductDescriptionTemplate>
            </div>
            <div className="page__footer"> 
                <Footer />
            </div>
        </div>
        );
  	}
});

export {Description}
