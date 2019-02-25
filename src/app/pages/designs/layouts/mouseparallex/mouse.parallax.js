/*
Mouse Parallax
==============
A simple jQuery plugin to allow given elements to be used as backgrounds that respond to mouse movement.  
Could easily be further extended or modified.
--------------
Author: "Pip Beard Design," Benjamin Alan Robinson
LICENSE: The MIT License (MIT)
*/

(function ( $ ) {
	$.fn.extend({
	
		mouseParallax: function(options) {
		
			var defaults = { 
				moveFactor: 5,
				zIndexValue: "-1",
				targetContainer: 'body' };
		
			var options = $.extend(defaults, options);
		
			return this.each(function() {
				var o = options;
				var background = $(this);
				
				$(o.targetContainer).on('mousemove', function(e){
				
					mouseX = e.pageX;
					mouseY = e.pageY;
					
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					
					percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
					percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);
	
					leftString = (0-percentX-o.moveFactor)+"%";
					rightString = (0-percentX-o.moveFactor)+"%";
					topString = (0-percentY-o.moveFactor)+"%";
					bottomString = (0-percentY-o.moveFactor)+"%";
	
					background[0].style.left = leftString;
					background[0].style.right = rightString;
					background[0].style.top = topString;
					background[0].style.bottom = bottomString;
					if(o.zIndexValue) {	
						background[0].style.zIndex = o.zIndexValue;
					}
				});
			});
		}					
	});
} (jQuery) );

/* mouse-parallax
==============
A simple jQuery plugin for absolute or fixed positioned background layers that respond to mouse movement.
##Demo
[Take a look here!](http://keokee.com/html/mouseBackground.html)

##Usage

Targets an element and sets it to respond to mouse movement in a "parallax" way.  

Basically, if the mouse moves left, the background element moves right, etc. to give the sense of "looking."   It's a very simple plugin.

###Syntax

```
$("target-element").mouseParallax({ options });
```
The following options exist:

- moveFactor : Defaults to 10. The speed of the background in relation to the mouse.
- zIndexValue : Defaults to "-1". How the background should be layered in relation to other elements (z-index.)
- targetContainer :  Defaults to 'body'.  Which element should be checked for mouse movement, in case you want to contain the effect to only a specific part of a page.

###CSS

You'll need to add the actual background to the targeted element in CSS.  eg.

```
#background {
  background-image: url('../images/parallax-pattern.png');
  background-repeat: repeat;
}
```
The mouseparallax.css file contains a class called ".mouse-bg" which is just to initialize the size and positioning of the elements.  By default, positioning is set to "fixed," but in a case where you want to contain the element to the inside of another container, this should be changed to "absolute."  And in that case, the container should be set to:

```
#background-container {
  position: relative; 
  overflow: hidden;
}
```

"overflow: hidden;" is necessary in this case because otherwise the edges of the background will spill outside.
*/