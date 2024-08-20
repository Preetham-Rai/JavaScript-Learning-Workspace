# JavaScript DOM manipulation

## Accessing elements/values

### DOM selectors

DOM selector are used to manipulate HTML elements are important to make web pages more interactive. These are the used DOM selectors.

`const element = document.getElementById("myId");` - selects element by its ID.

`const elements = document.getElementsByClassName("myClass");` - Selects elements by their class attribute. Returns an HTMLCollection.

`const elements = document.getElementsByTagName("div");` - Selects elements by their tag name. Returns an HTMLCollection.

`const element = document.querySelector(".myClass"); ` - Selects the first element that matches a CSS selector.

`const elements = document.querySelectorAll("div.myClass");` - Selects all elements that match a CSS selector. Returns a NodeList.

#### Below is a deeper dive into the features and nuances of DOM selectors, along with some additional techniques and best practices.

```JavaScript
//Advanced Selectors
//Attribute selectors
const elements = document.querySelectorAll("[data-custom]");
const elements = document.querySelectorAll("input[type='text']");
const elements = document.querySelectorAll("a[href^='http']"); // href starts with "http"

//Pseudo class selctor
//Select the first child element:
const firstChild = document.querySelector("ul li:first-child");
//Select every other element (nth-child):
const evenItems = document.querySelectorAll("li:nth-child(even)");
/* This is usually used in CSS, but you can target these states in JS by adding or removing classes */
```

## -Node lists are collection and Not arrays-

`Array.from()` method is used to convert array from objects/string.

HTMLCollection: This is a collection of elements, typically returned by methods like document.`getElementsByClassName()`, `document.getElementsByTagName()`, or properties like `document.forms`. It only contains elements, meaning every item in the collection is guaranteed to be an HTML element.

NodeList: This is a collection of nodes, which can be elements, text nodes, or comment nodes. It's commonly returned by methods like `document.querySelectorAll()` or `childNodes`. NodeList is more general and can include different types of nodes, not just elements.
