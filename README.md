ReJax
===============


Auto Load And Refresh element Every X Seconds With JQuery


Automatically loading content and displaying it without refreshing the page is an important feature any websites could have. Especially for news website and blog must have this feature to display most recent news/posts. Even top social websites have these features to display latest posts/tweets. You can also implement this feature easily using jQuery. You can directly display content in your website from database and automatically change it after fixed interval of time (I recommend five seconds).

## Features
* Lightweight: less than 2KB.
* Compatible with: jQuery 1.3.2+ in Firefox, Safari, Chrome, Opera, Internet Explorer 7+

## Usage

ReJax accepts settings from an object of key/value pairs.

 ```javascript
 // Format:
 $("selector").rejax({
    time: 3000, //  number of frames per milliseconds at which animations will run (default value 3000)
    loop: 0, // stop loading after x loop (default value 0)
  }
 );
```

## Settings

```html
<div id="ajax2" rejaxtime="100" rejaxloop="3" class="ajax" rejaxfile="ajax2.html"></div>
```

| Property      | Default    | Description                                              |
| ------------- |:-----------|:---------------------------------------------------------|
| *rejaxtime*   | `your_url`    | A string containing the URL to which the request is sent.|
| *rejaxtime*   | `3000`     | The rate (in milliseconds) at which animations fire.     |
| *rejaxloop*   | `0`        | Loop number, do 0 equal infinity                         |



Yeah! this can be so awesome in so many cases!
Enjoy!
