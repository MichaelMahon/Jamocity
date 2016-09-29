export function ebayListings2JC(listingObj) {
    var JCProdArray = [];


    for (var key in listingObj) {
        var listing = listingObj[key];
        var JCProd = new Object();
        JCProd.id = listing.itemId[0];
        JCProd.name = listing.title[0];
        JCProd.price = parseFloat(listing.sellingStatus["0"].convertedCurrentPrice["0"].__value__).toFixed(2);
        JCProd.href = listing.galleryURL[0];
        JCProd.web = listing.viewItemURL[0];
        JCProd.condition = listing.condition["0"].conditionDisplayName["0"];
        JCProd.source = "ebay";

        JCProdArray.push(JCProd);

    }
    return (JCProdArray);

}


export default ebayListings2JC;
