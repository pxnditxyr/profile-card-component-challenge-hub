export const removeCard = ( gallery ) => {
    const amountNodes = gallery.childNodes.length;
    if ( amountNodes > 0 )
        gallery.removeChild( gallery.childNodes[ amountNodes - 1 ] )
};
