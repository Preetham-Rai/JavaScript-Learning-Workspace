//Common Events that include in JavaScript are mouse click, key presses and page loads
//---------------------------------------------------------------------------------------------------------
// //Mouse Events
// click: //Fired when an element is clicked.
// dblclick:// Fired when an element is double-clicked.
// mouseover: //Fired when the mouse pointer is over an element.
// mouseout: //Fired when the mouse pointer leaves an element.
// mousedown: //Fired when a mouse button is pressed down on an element.
// mouseup: //Fired when a mouse button is released over an element.
//---------------------------------------------------------------------------------------------------------
// //Keyboard Events
// keydown:// Fired when a key is pressed down.
// keyup: //Fired when a key is released.
// keypress:// Fired when a key is pressed and released (depreciated in favor of keydown and keyup).
//---------------------------------------------------------------------------------------------------------
// //Form Events
// submit:// Fired when a form is submitted.
// change: //Fired when the value of an input element changes.
// focus: //Fired when an element gains focus.
// blur: //Fired when an element loses focus.
//---------------------------------------------------------------------------------------------------------
// //Window Events
// load:// Fired when the entire page has loaded.
// resize:// Fired when the browser window is resized.
// //scroll:Fired when the user scrolls the page.
//---------------------------------------------------------------------------------------------------------
//Event can be removed form the element using removeEventListener().
//---------------------------------------------------------------------------------------------------------
//target and currentTarget
// target : is the element that triggered the event (e.g., the user clicked on)
//any buttons clicked such as li,div,button
// currentTarget : is the element that the event listener is attached to.
// it triggers when any of the button is clicked under currentTarget
/*
For example: if event is added to parent element parent gets triggered when any one of the button is clicked under
parent
*/

//---------------------------------------------------------------------------------------------------------

//stopPropogation() is used to bubbling up the event when it is clicked
//in Event the third parameter is propogation by default its false (called bubbling)
//true is event capturing starts from the parent element then triggers the child element Which is clicked
