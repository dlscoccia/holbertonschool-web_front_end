# 0x0D. jQuery advanced

![jquery](https://www.acens.com/comunicacion/wp-content/images/2016/12/word-image-1-768x307.png)

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

___
- ## Learn how to load jQuery from a CDN in a page

At the jQuery website [code.jquery](https://code.jquery.com/), you can find all jQuery CDN – Latest Stable Versions with the script that you need to copy on the head tag of your HTML file. This will allow your page to load jQuery from their CDN.

- ## Learn the different ways to create DOM elements with jQuery

We will look at four jQuery methods that are used to add new content:

### append() Method

The jQuery append() method inserts content AT THE END of the selected HTML elements.

```
$("p").append("Some appended text.");
```

### prepend() Method

The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.

```
$("p").prepend("Some prepended text.");
```

### after() Method

The jQuery after() method inserts content AFTER the selected HTML elements.

```
$("img").after("Some text after");
```

### before() Method

The jQuery before() method inserts content BEFORE the selected HTML elements.

```
$("img").before("Some text before");
```
- ## Learn how to modify elements

There are many ways to change an existing element. Among the most common tasks is changing the inner HTML or attribute of an element. jQuery offers simple, cross-browser methods for these sorts of manipulations.

Here are a few methods you can use to get and set information about elements:

- .html() – Get or set the HTML contents.
- .text() – Get or set the text contents; HTML will be stripped.
- .attr() – Get or set the value of the provided attribute.
- .width() – Get or set the width in pixels of the first element in the selection as an integer.
- .height() – Get or set the height in pixels of the first element in the selection as an integer.
- .position() – Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only.
- .val() – Get or set the value of form elements.

```
// Changing the HTML of an element.
$( "#myDiv p:first" ).html( "New <strong>first</strong> paragraph!" );
```

- ## Learn how to add new elements to a page with different positions


- ## Learn how to add a click handler on an element


- ## Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery


- ## Learn how to create a pagination