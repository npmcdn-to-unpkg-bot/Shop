
var sliderObj={ 
srcMin:
['img/CPU/Intel/Intel%20Pentium%20G2020%20OEM.jpg',
'img/CPU/Intel/Intel%20Pentium%20G3220%20BOX.jpg',
'img/CPU/Intel/Intel%20Pentium%20G3420%20OEM.jpg',
'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg', 'img/CPU/Intel/Intel%20Pentium%20G3440%20BOX.jpg'], 
hit: 0,
setSlide: function (src){
    document.getElementById('slider-big-img').src=""+src+""
}, 
leftSlide: function(){
    this.hit--;
        if (this.hit<0) this.hit=this.srcMin.length-1;
        this.setSlide(this.srcMin[this.hit]);
        console.log(this.hit);
},
rightSlide: function(){
    this.hit++;
        if(this.hit==this.srcMin.length) this.hit=0;
        this.setSlide(this.srcMin[this.hit]);
    console.log(this.hit);
}
};




addCategories(homePageElement);

