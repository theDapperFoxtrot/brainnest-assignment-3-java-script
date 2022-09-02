Brainnest FD Training – Assignment 1
Terminology
HTML
1. What do HTML and CSS stand for? 
HyperText Markup Language and Cascading Styling Sheets
2. Would you rather use HTML or CSS, for putting paragraphs of text on a webpage?
Absolutely you would use HTML in order to render text onto a webpage. CSS is utilized when you’re styling elements. The only way you could use CSS to render content would be using pseudoselectors on an existing HTML element and the ‘content’ property.
3. Would you rather use HTML or CSS, to change the font and background color of a button? 
CSS would be leveraged here in order to change the appearance of the button, including the font and background color.
4. What is an HTML tag? 
A tag refers to the elements placed in HTML, and the tags themselves are the opening and closing tags respectively (unless that tag is an empty or self-closing element). e.g. <p> </p> OR <img>
5. What are the three parts of an HTML element? (image from paragraph) 
With the exception of self-closing elements, every element would have and opening and closing tag, as well as the content between them. e.g. <p>This is how you would make a paragraph with content.</p>
6. What is the purpose of the doctype declaration? 
The typical declaration for the doctype is <!DOCTYPE html> which informs the browser client that the document being served is formatted in HTML5.
7. What is the HTML element? 
The HTML element wraps the entirety of the page, except for the doctype declaration. This allows the browser to read and interpret the markup written between the opening and closing HTML tags.
8. What is the purpose of the head element? 
The head element contains meta data in order to inform the browser of information unrelated to what is rendered onto the page. The two important pieces of the <head> element are <meta charset=”UTF-8”> and <title>Document</title>.
9. What is the purpose of the body element? 
The body element contains content that can be rendered to the page, and the structure in which it is organized in the document object model. There are a number of semantic elements that can be used to create the initial layout of a web page before any styling or programming logic is added.
10. How do you create a paragraph in HTML? 
To create a paragraph in html, you utilize the opening and closing paragraph tags. <p>Content here.</p>
11. How do you create a heading in HTML? 
The main heading of a webpage can be created by using the main heading tags. <h1>Heading</h1>
12. How many different levels of headings are there and what is the difference between them? 
Namely the available tags are <h1> through <h6>. It is important that an <h1> only be used once per page to promote SEO. Otherwise, other heading tags can be reused and individually affected with styling by adding unique classes.
13. What element should you use to make text bold and important? 
In order to give importance to text content, utilize the following tags: <strong>Important text</strong>.
14. What element should you use to make text italicized to add emphasis to it? 
In order to give emphasis to text content, utilize the following tags: <em>Emphasized text</em>.
15. What relationship does an element have with any nested elements within it? 
The nested element is considered the child of the parent element. For example:
<div class=”parent”>
	<p>Child.</p>
</div>
16. What relationship do two elements have if they are at the same level of nesting? 
If two or more elements are connected at the same level of nesting, then they are considered to be siblings. For example:
<div>
	<p>Sibling.</p>
	<p>Sibling.</p>
</div>

17. How do you create HTML comments? 
An HTML comment is contained between the following symbols: <!-- HTML comment here -->





18. What HTML tag is used to create an unordered list? 
To create an unordered list, you not only need to have opening and closing tags for the list, but also the list items. Here’s an example:
<ul>
	<li>Apples</li>
	<li>Bananas</li>
</ul>

19. What HTML tag is used to create an ordered list? 
Similarly, to create an ordered list, you not only need to have opening and closing tags for the list, but also the list items. Here’s an example:

<ol>
	<li>Apples</li>
	<li>Bananas</li>
</ol>
20. What HTML tag is used to create list items within both unordered and ordered lists? 
As illustrated in the previous answers: <li></li>
21. What element is used to create a link? 
The anchor element enables a clickable link that requires a href=”” attribute to direct the user.
22. What is an attribute? 
Attributes are applied to elements to make use of the element’s potential features. While some attributes can be applied to all elements such as class, there are some attributes that are specific to certain elements.
23. What attribute tells links where to go? 
In the opening anchor tag, you would include the attribute href=”<insert address here>”
24. What is the difference between an absolute and relative link? 
An absolute link is one that will lead to the destination regardless of where the page is located within its file structure, say www.google.com for example. A relative link is rather telling by its name, but it is a link to a pager relative to where it is located in the file structure. If you have an index.html, and wish to link to an about_me.html that is nested within a folder called pages, you would apply the following: href=”./pages/about_me.html” to your opening anchor tag. 
25. Which element is used to display an image? 
To display an image, you would make use of the <img> tag. This tag is self-closing/empty and does not require a closing tag.
26. What two attributes do images always need to have? 
Every image needs to have the src=”” and the alt=””
27. How do you access a parent directory in a file path? 
To move up one directory to the parent, simply use two dots. For example:
<a href=”../index.html”>Home</a>
28. What are the four main image formats that you can use for images on the web?
.jpg, .png, .gif, .tif /.tiff

CSS
1. What are the main differences between external, internal, and inline CSS?
It's most often preferred by convention to use an external style sheet for CSS, as it takes all the code for styling into a separate file that allows for a cleaner look in the main HTML document. However, you have two options to include styling: internal or inline. Internal is when you apply styling rules between style tags in the head element, while inline is when you include styling rules as an attribute on elements in the body. Both can add unnecessary bloat to the HTML file, and are typically used for testing purposes, but are generally the less preferred methods for styling.
2. What is the syntax for class and ID selectors?
In HTML, when you want to set a class or id, you add the respective attribute to the element i.e. `class=”name” or id=”name”` and to apply rules to them, you would add code to your CSS like so
For classes: `.name {color: blue}`
For id’s: `#name {color:green}`
3. How would you apply a single rule to two different selectors?
You can simply comma separate the selectors so that one rule can apply to multiple elements.
4. Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
As stated above, you can comma separate these selectors. Based on this example it would be like this:
```
#title, .primary {
color: blue;
}
```
5. What does the descendant combinator do?
This refers to the idea of combining selectors in a descending order, beginning with the outermost parent in the HTML structure (using the type, class, etc selector) and then applying nested selectors in a chain to provide further specificity.
6. Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?
The class name has higher specificity. The way in which CSS is evaluated, the way it is parsed will first check for the kind of selector used, and then the number of each respective selector type, but when there is the same number of a selector type, and a more specific one is used, it will always follow the rule of specificity. i.e. one class selector and one id selector with the same properties (but different colours for example), the rules of the id selector would apply.
7. From inside to outside, what is the order of box-model properties?
The box model comprises of a margin, border, padding, and the element itself.
8. What does the box-sizing CSS property do?
The box-sizing property allows you to affect whether or not the total width and height of an element is inclusive or exclusive of border and padding.
9. What is the difference between the standard and alternative box model?
The standard box model is used be default in browsers. It is inclusive of margin when making calculations for space, despite it not being visible. The alternative box model (by enabling `box-sizing: border-box`) will be exclusive of the padding and border, meaning only the element dimensions itself will occupy space.
10. Would you use margin or padding to create more space between 2 elements?
I would use margin to create space between elements.
11. Would you use margin or padding to create more space between the contents of an element and its border?
In this case, you would use padding to add space between the element and the border. 
12. Would you use margin or padding if you wanted two elements to overlap each other?
If I wanted elements to overlap each other, I could apply negative margins.
13. What is the difference between a block element and an inline element?
A block element will take up the entire width of the page (besides margins applied). Whereas an inline element is the width of the content it contains (plus any padding/border/margin depending on settings).
14. What is the difference between an inline element and an inline-block element?
You cannot set a width or height to inline elements, and inline elements do not break onto a new line. Whereas if you apply the inline-block setting, it will break onto a new line, and you can apply width and height to the element.
15. Is an h1 block or inline?
Headers are block elements (including the h1).
16. Is button block or inline?
A button is an inline element.
17. Is div block or inline?
A div is a block element.
18. Is span block or inline?
A span is an inline element.
19. What’s the difference between a flex container and a flex item?
A flex container is when you use a parent element around nested elements to apply `display: flex` and related properties.
20. How do you create a flex item?
Any nested element within a flex container would be considered a flex item.
21. What are the 3 values defined in the shorthand flex property?
`flex: flex-grow | flex-shrink | flex-basis`
22. How do you make flex items arrange themselves vertically instead of horizontally?
You can apply the `flex-direction: column` property.
23. What is the difference between justify-content and align-items?
When `display: flex` is active, it defaults to `flex-direction: row` in which case the `justify-content` property will affect the horizontal axis, while `align-items` will affect the vertical axis in how flex items are arranged within the container.
24. How do you use flexbox to completely center a div inside a flex container?
#### HTML
```
<div class=”container”>
	<div>Center me!</div>
</div>
```
#### CSS
```
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```
25. What’s the difference between justify-content: space-between and justify-content:
space-around?
In the context of when `flex-direction: row` is set, when applying `justify-content: space-between` you are creating even space between all the elements for the width of the given container. With `justify-content: space-around` you are placing all the flex items with even space between while all the outer remaining space is halved.

JS
1. Name the three ways to declare a variable?
var, const, let

2. Which of the three variable declarations should you avoid and why?
var is no longer an ideal way to declare a variable because in larger codebases it’s possible to choose a variable name that isn’t unique and overwrite an important value.

3. What rules should you follow when naming variables?
Naming variables should give context as to what they represent. Meaningful name choice assists other devs who view your code.

4. What should you look out for when using the + operator with numbers and
strings?
In JavaScript, you need to be wary of type coercion which can lead to unexpected results.

5. How does the % operator work?
Using this in the place of `/` to perform division on two values, the result will yield the remainder.

6. Explain the difference between == and ===.
Equal to or `==` is type agnostic, whereas exactly equal to or `===` will consider the data types of the values being compared.

7. When would you receive a NaN result?
When you’re trying to perform a mathematical expression with a data type that does not yield a mathematical result. For example: `“Hi” / 2 = NaN`

8. How do you increment and decrement a number?
I personally prefer to write out the long form, say `x = x + 1 (or - 1)` because you can change the value by which you increment/decrement. There is a shorthand specifically for incrementing/decrementing by 1: `x++ or x--` respectively.

9. Explain the difference between prefixing and post-fixing increment/decrement
operators.
Prefixing vs postfixing affects the order in which incrementing and decrementing is applied and when the variable value is checked. In some cases, like loops, it is recommended to prefix the increment operator.

10. What is operator precedence and how is it handled in JS?
Operator precedence is much like mathematical BEDMAS, in which certain parts of a mathematical expression will be performed first before others.


11. How do you log information to the console?
`console.log(<input>)`

12. What does unary plus operator do to string representations of integers?
It will attempt to convert it into a number depending on the string.

13. What are the eight data types in JavaScript?
- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol
- Object (properties)

14. Which data type is NOT primitive?
Object (properties) are not primitive)

15. What is the relationship between null and undefined?
Undefined means that no assignment has been given to the variable, whereas null is a purposeful assignment of “nothing.”

16. What is the difference between single, double, and backtick quotes for strings?
Single quotes and double quotes are effectively the same, and the choice matters when string content might require quotation or apostrophes in writing. Backtick quotes enable the usage of template literals, where variables can be added to content dynamically.



17. What is the term for embedding variables/expressions in a string?
Template literals

18. Which type of quote lets you embed variables/expressions in a string?
Backticks

19. How do you embed variables/expressions in a string?
Example:
```
let name = “Steve”;
console.log(`Hello, ${name}`);
```

20. How do you escape characters in a string?
Using the backslash \

21. What is the difference between the slice/substring/substr string methods?
substr() is considered deprecated according to MDN.
substring() returns part of a string between start and end indexes (or to the end if you only provide the start index as an argument).
slice() is an array method used to extract certain values between start and end indexes (or to the end if you only provide the start index as an argument).

22. What are the three logical operators and what do they stand for?
And `&&`, or `||`, not `!`




23. What are the comparison operators?
`<` less than
`>` greater than
`==` equal to
`!=` not equal to
`<` less than or equal to
`>` greater than or equal to

24. What are truthy and falsy values?
Truthy and falsy values are produced when you are checking a variable for a value.

25. What are the falsy values in JavaScript?
undefined , null , NaN , 0 , "" (empty string), and false.

26. What are conditionals?
Conditionals are expressions that compare two particular values to test for a truthy or falsy result.

27. What is the syntax for an if/else conditional?
```
If (x >= y) {
console.log(“True”);
} else {
console.log(“False”);
}
```

28. What is the syntax for a switch statement?
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
29. What is the syntax for a ternary operator?
` isMember ? '$2.00' : '$10.00'`

30. What is nesting?
Nesting refers to placing code within a code block. For example, nesting a function within a function.

31. What are functions useful for?
Functions allow you to create blocks of code you can call upon in a reusable way.

32. How do you invoke a function?
Calling a function is as simple as using it’s name, and placing brackets on the end (along with any arguments to be passed in).

33. What are anonymous functions?
Anonymous functions will fire without being called as soon as they are read in the sequence of code being executed.



34. What is function scope?
Function scope refers to the context in which the code was written. Variables that are declared within a function are not accessible within other functions or in the global scope.

35. What are return values?
Return values allow you to extract the result of the function for use in another area of your code. A simple example might be: `doubleNumber(10)` would return a 20.
