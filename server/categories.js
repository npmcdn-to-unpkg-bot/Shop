function CatalogItem(name,  href) {
	this.name = name
	this.href = href
};

function CategoryItem(name,  href, count) {
	CatalogItem.call(this, name, href);
	this.count = count;
};
CategoryItem.prototype = Object.create(CatalogItem.prototype);

var categories = [];

categories.push(new CategoryItem('Motherboard', '/Categories/Motherboard', '10'));
categories.push(new CategoryItem('CPU', '/Categories/CPU', '10'));
categories.push(new CategoryItem('RAM', '/Categories/RAM', '10'));
categories.push(new CategoryItem('VideoAdapter', '/Categories/VideoAdapter', '10'));
categories.push(new CategoryItem('HDD', '/Categories/HDD', '10'));
categories.push(new CategoryItem('PowerSource', '/Categories/PowerSource', '10'));
categories.push(new CategoryItem('Cooling', '/Categories/Cooling', '10'));

module.exports = categories;