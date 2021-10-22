import { addNewCard } from './addNewCard.js';
import { removeCard } from './removeCard.js';

const addButton = document.querySelector( "#add-button" );
const removeButton = document.querySelector( "#remove-button" );
const gallery = document.querySelector( "#gallery" )

addButton.addEventListener( "click", () => addNewCard( gallery ), false );
removeButton.addEventListener( "click", () => removeCard( gallery ), false );
