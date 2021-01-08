
// calcuting the price by getting the user selected row and adding all together.

function calculateprice(idproductTable) {
    var fpriceTotal = 0.0;
    var i = 0;
    var tag = document.querySelectorAll('input');
    for (i = 0; i < tag.length; i++) {

        if (tag[i].checked) {
     
            var trselect = getselectrow(tag[i], 'TR');
     
            var priceselect = trselect.getElementsByTagName('TD')[3];

            fpriceTotal += parseFloat(priceselect.firstChild.data);
        };
    };

    return Math.round(fpriceTotal * 100.0) / 100.0;
};



function getselectrow(oNode, sParentType) {
    var parrentvar = oNode.parentNode;
    while (parrentvar) {
        if (parrentvar.nodeName == sParentType)
            return parrentvar;
        parrentvar = parrentvar.parentNode;
    };
    return parrentvar;
};