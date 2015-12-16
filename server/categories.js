function CatalogItem(name, image, href) {
	this.name = name
	this.image = image
	this.href = href
};

function CategoryItem(name, image, href, count) {
	CatalogItem.call(this, name, image, href);
	this.count = count;
};
CategoryItem.prototype = Object.create(CatalogItem.prototype);

var categories = [];

categories.push(new CategoryItem('Motherboard', '/Categories/Motherboard'));
categories.push(new CategoryItem('CPU', '/Categories/CPU'));
categories.push(new CategoryItem('RAM', '/Categories/RAM'));
categories.push(new CategoryItem('VideoAdapter', '/Categories/VideoAdapter'));
categories.push(new CategoryItem('HDD', '/Categories/HDD'));
categories.push(new CategoryItem('PowerSource', '/Categories/PowerSource'));
categories.push(new CategoryItem('Cooling', '/Categories/Cooling'));

module.exports = categories;