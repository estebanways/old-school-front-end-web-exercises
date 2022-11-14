Sidecar
=======

This repository contains a the prototype for [Sidecar](http://www.dtelepathy.com/labs/apps/sidecar). Sidecar is designed to sit neatly offscreen with a small "nib" that alerts site users to the presence of additional content and functionality

Here is what you will need to use the Sidecar prototype:

* jQuery v.1.7+
* a basic knowledge of HTML/CSS and JavaScript

Installation/Setup
------------------

Start by adding the CSS to the `<head>` of your page - `sidecar.css`

    ...
    
    <link type="text/css" rel="stylesheet" href="sidecar.css" />
    
    </head>
    <body>
    ...

Then add the neccessary JavaScript files to the `<head>` of your page, after the `sidecar.css` and before the `</head>` tag - `jquery-1.9.0.min.js` or any jQuery 1.7+ and `sidecar.js` .

    ...
    
    <link type="text/css" rel="stylesheet" href="sidecar.css" />
    
    <script type="text/javascript" src="jquery-1.9.0.min.js"></script>
    <script type="text/javascript" src="sidecar.js"></script>
    
    </head>
    <body>
    ...

You can also reference jQuery from Google's CDN.

    ...
    
    <link type="text/css" rel="stylesheet" href="sidecar.css" />
    
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script type="text/javascript" src="sidecar.js"></script>
    
    </head>
    <body>
    ...

This part of Sidecar loads the CSS and JavaScrip necessary for the library to function.


Initiate the Sidecar
--------------------

Add the `new Sidecar()` command to the end of the document, just before the closing `</body>` tag. We use the [jQuery $.data()](http://api.jquery.com/jQuery.data/) method to store the Sidecar.

    <script type="text/javascript">
        $.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content' ));
    </script>
    
    </body>
    </html>
    
You can also wrap this in a DOM Ready event.

    <script type="text/javascript">
        $(function(){
            $.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content' ));
        });
    </script>
    
    </body>
    </html>
    
Above is the new Sidecar command. The command takes two arguments, but only one is shown above, we will go into detail further down. 

The First Argument: Content
---------------------------

The only required argument is the selector of the element that you want to pull the content from and place into the Sidecar. 

The above example in __Initiate the Sidecar__ uses _#sidecar-content_ and the JavaScript will be looking for the _#sidecar-content_ element on your page.

So we want to make sure that is present.

    <body>
    ...
    
    <div style="display:none;">
        <div id="sidecar-content">
            <p>This is my Sidecar content. All of this, including the parent div#sidecar-content will be moved to the Sidecar when it is built.</p>
        </div>
    </div>
    
    ...

We suggest wrapping the content in a container with an inline style of `display:none;`, but if you want the content to be present as a fallback you can leave it unwrapped. _you may see a flicker when Sidecar moves it, up to you_

Sidecar will grab that content, and put in within the Sidecar.

That's it! You're Done
----------------------

That is it in a nutshell, you now should have a working Sidecar. If you want to learn about some options that you can pass in as the second argument, continue reading.


The Second Argument: Options
----------------------------
 
Sidecar also has a few options available to you that you can pass in through the second argument.

Remember above we had:

    <script type="text/javascript">
        $.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content' ));
    </script>
        
    </body>
    </html>

The first argument is the selector of the element we want to move into the Sidecar, in this examples case _#sidecar-content_. You can pass a second argument of Options as an _object_ that the Sidecar can use to configure itself.

Here is what they might look like:

    <script type="text/javascript">
        $.data(document.body, 'Sidecar', new Sidecar( '#sidecar-content', {
            width: '300px',
            tabPosition: '60px',
            sidecarPosition: 'left',
            shadow: true
        } ));
    </script>
    
    </body>
    </html>

We only have a few right now, but are adding more in later. 

**Here are some options, along with the default value and correct format for the value:**

* **width** `'224px'` _(string)_ The width of the Sidecar when open. **Currently only supports pixels**
* **tabPosition** `'64px'` _(string)_ The top position of the Open/Close Tab for Sidecar. Can be pixels or percentage value.
* **sidecarPosition** `'right'` _(string)_ The position of the Sidecar. Can be **right** or **left**
* **shadow** `true` _(boolean)_ Should the internal shadow be shown? **true** or **false**

----

(c) 2013 digital-telepathy, Inc. MIT License.
