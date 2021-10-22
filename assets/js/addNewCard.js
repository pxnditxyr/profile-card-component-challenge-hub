export const addNewCard = ( gallery ) => {
    // Creando elementos
    const card = document.createElement( "article" );
    const cardHeader = document.createElement( "section" );
    const cardBody = document.createElement( "section" );
    const cardFooter = document.createElement( "section" );
    const cardHeaderImage = document.createElement( "img" );
    const cardBodyDiv = document.createElement( "div" );
    const cardBodyAvatar = document.createElement( "img" );
    const cardBodyPName = document.createElement( "p" );
    const cardBodySpan = document.createElement( "span" );
    const cardBodyPCity = document.createElement( "p" );
    const cardFooterDiv1 = document.createElement( "div" );
    const cardFooterDiv2 = document.createElement( "div" );
    const cardFooterDiv3 = document.createElement( "div" );
    const cardFooterSpan1 = document.createElement( "span" );
    const cardFooterSpan2 = document.createElement( "span" );
    const cardFooterSpan3 = document.createElement( "span" );
    const cardFooterP1 = document.createElement( "p" );
    const cardFooterP2 = document.createElement( "p" );
    const cardFooterP3 = document.createElement( "p" );

    // Agregando classes 
    card.classList.add( "card" )
    cardHeader.classList.add( "card-header" );
    cardBody.classList.add( "card-body" );
    cardFooter.classList.add( "card-footer" );
    cardBodyPCity.classList.add( "card-city" );

    //Agregando Link de imagen
    cardHeaderImage.src = "./assets/images/bg-pattern-card.svg";
    cardBodyAvatar.src = "./assets/images/image-victor.jpg";

    // Creando textos
    const cardName = document.createTextNode( "Victor Crest" );
    const cardAge = document.createTextNode( " 26" );
    const cardCity = document.createTextNode( "London" );
    const cardAmountFollowers = document.createTextNode( "80K" );
    const cardFollowers = document.createTextNode( "Followers" );

    const cardAmountLikes = document.createTextNode( "803K" );
    const cardLikes = document.createTextNode( "Likes" );

    const cardAmountPhotos = document.createTextNode( "1.4K" );
    const cardPhotos = document.createTextNode( "Photos" );

    cardBodySpan.appendChild( cardName );
    cardBodyPName.appendChild( cardBodySpan );
    cardBodyPName.appendChild( cardAge );
    cardBodyPCity.appendChild( cardCity );
    cardFooterSpan1.appendChild( cardAmountFollowers );
    cardFooterP1.appendChild( cardFollowers );

    cardFooterSpan2.appendChild( cardAmountLikes );
    cardFooterP2.appendChild( cardLikes );

    cardFooterSpan3.appendChild( cardAmountPhotos );
    cardFooterP3.appendChild( cardPhotos );

    cardFooterDiv1.appendChild( cardFooterSpan1 );
    cardFooterDiv1.appendChild( cardFooterP1 );

    cardFooterDiv2.appendChild( cardFooterSpan2 );
    cardFooterDiv2.appendChild( cardFooterP2 );

    cardFooterDiv3.appendChild( cardFooterSpan3 );
    cardFooterDiv3.appendChild( cardFooterP3 );

    cardFooter.appendChild( cardFooterDiv1 );
    cardFooter.appendChild( cardFooterDiv2 );
    cardFooter.appendChild( cardFooterDiv3 );

    cardBodyDiv.appendChild( cardBodyAvatar );

    cardBody.appendChild( cardBodyDiv );
    cardBody.appendChild( cardBodyPName );
    cardBody.appendChild( cardBodyPCity );

    cardHeader.appendChild( cardHeaderImage );
    card.appendChild( cardHeader );
    card.appendChild( cardBody );
    card.appendChild( cardFooter );

    gallery.appendChild( card );
};
