// returns a number that represents the sum of all the selected menu
// item prices.
function calculateprice(idproductTable) {
    var fpriceTotal = 0.0;
    var i = 0;
    var aCBTags = document.querySelectorAll('input');
    for (i = 0; i < aCBTags.length; i++) {
        // is this menu item selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getselectrow(aCBTags[i], 'TR');
            // retrieve the price from the price column, which is the third column in the table
            var oTDPrice = oTR.getElementsByTagName('TD')[3];
            // the first child text node of the column contains the price
            fpriceTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return Math.round(fpriceTotal * 100.0) / 100.0;
};


// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getselectrow(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};