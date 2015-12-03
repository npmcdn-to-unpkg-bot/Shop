var objAll= [{
    Motherboard: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
        {name:'GIGABYTE-GA-78LMT-S3',
         img:'elementspagelink__img--img2',
         price:'$ 655',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: '',}, 
		{name:'GIGABYTE-GA-78LMT-S4',
         img:'elementspagelink__img--img3',
         price:'$ 700',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: '',}, 
		{name:'GIGABYTE-GA-78LMT-S5',
         img:'elementspagelink__img--img4',
         price:'$ 900', link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'}  
    ],
    CPU: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ],
    Ram:[
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ],
    VideoAdapter: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ],
    HDD: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ],
    PowerSource: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ],
    Cooling: [
        {name:'GIGABYTE-GA-78LMT-S2',
         img:'elementspagelink__img--img1',
         price:'$ 555',
         link:'#GIGABYTE-GA-78LMT-S2',
         description: 'Технические характеристики Процессор Intel Celeron G1820 OEM Intel Celeron четвертого поколения, тактовая частота 2700 МГц, тепловыделение 53 Ватт, сокет LGA 1150, двухканальный режим памяти.'},
    ]
}];

$(document).ready(function(){
    $(document).on('keydown', '.all__header__elements--search',  function(){
    var i = objAll.length;
    var inputSearch = $('.all__header__elements--search').val();

    for (var k=0; k<1; k++){


         console.log(objAll[0].Motherboard[k].name.toLowerCase().indexOf(inputSearch.toLowerCase()));
   
    };
    });
});
