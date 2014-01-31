ReJax
===============


If you need to refresh only a portion of a page
Element is automatically refreshed...

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
