
var PageName = {
    getPageName() {
        var path = window.location.hash;
        return path.replace(/\?.*/,'');
    }
};