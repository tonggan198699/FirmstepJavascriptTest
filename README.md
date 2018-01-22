# Firmstep Javascript Phone Filter Test

General Description
This is a coding test to replicate a real-world scenario for you to complete to the best of your ability.
Since there is no requirement for a database and server code, you will need to use the file
products.json, index.html (base template), to complete this task.

Scenario
We have been given a task to build a single page application to list and filter a collection of mobile phones;
- Sony Xperia Z3
- Iphone 6
- HTC One M8
- Galaxy Alpha
- Nokia Lumia
- Zte Nubia
- Samsung Galaxy S5
- Iphone 5S

Since the page loaded already contains the collection data as a JSON, you have been instructed tocreate a user interface to dynamically filter out the phones based on the requirements set below.

When a filter is applied, we want to see the page instantly update, and only show the phones that match the filters applied.

Therefore when Samsung is selected as a manufacturer, and 12mpx for camera, the Galaxy Alpha will be the only phone displaying to the user.

Requirements
- No frameworks such as Vue.js, React, Angular, Backbone.js, Ember.js can be used.
- Libraries such as jQuery, lodash, bluebird.js are allowed to assist development, for such as templating, DOM manipulation, HTTP/AJAX requests, and event handling.
- Use the provided starting HTML and CSS.
	- The index.html will contain;
	1. Links to the CSS files and libraries required.
	2. Scripts to libraries you can use and the script to the JS file where we want you to place your code. app.js (create many files as you require)
- To use the data provided, make a HTTP/AJAX request to the provided JSON file in your JavaScript.
- This will require you to use Mamp, Xampp, or a node package called http-serve.
- Filters
	- When no filters are applied, all the phones must be shown.
	- When at least one filter has been applied, only the phones matching the filters will be shown. i.e. Apple is selected
	- When the filters applied do not match any phones, a simple message needs to be shown to the user stating there are no phones matching the filter.
	- Required filters:
	- Manufacturer
	- Memory Size
	- OS
	- Camera
- Clear filter button
	- This button on click must clear the filters applied.
	- Therefore all the phones are expected to be shown right after the button is clicked.
- ES5 syntax is preferred.
- When the code is downloaded and tested on our test environment, we should be still able to run the JavaScript on the latest version of Chrome.
- Do not edit the JSON.
- You can edit the HTML, and CSS files. i.e. you are able to add HTML attributes to the index.html
- Upload the code to Github once the task has been completed. https://github.com/.

# Application pictures

**Overview** 
<p align="center"><img src="https://image.ibb.co/hhynuG/firmstep1.jpg"></p>

**Phone list**
<p align="center"><img src="https://image.ibb.co/de58ZG/firmstep2.jpg"></p>

**Example of phone filter**
<p align="center"><img src="https://image.ibb.co/dfFaEG/firmstep3.jpg"></p>

**Alert message will pop up if filter produces no result - i.e Iphone and 32 GB**
<p align="center"><img src="https://image.ibb.co/fJWt1w/firmstep4.jpg"></p>



