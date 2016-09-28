export function ebayListings2JC(listingObj) {
    var JCProdArray = [];

    console.log(listingObj);

    for (var key in listingObj) {
        var listing = listingObj[key];
        var JCProd = new Object();
        JCProd.id = listing.itemId[0];
        JCProd.name = listing.title[0];
        JCProd.price = listing.sellingStatus["0"].convertedCurrentPrice["0"].__value__;
        JCProd.href = listing.galleryURL[0];
        JCProd.web = listing.viewItemURL[0];
        JCProd.condition = listing.condition["0"].conditionDisplayName["0"]

        console.log("ebay prod " + JCProd);
        JCProdArray.push(JCProd);

    }
    return (JCProdArray);

}


export default ebayListings2JC;
