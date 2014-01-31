/**
 * jQuery.rejax - refresh only a portion of a page :-)
 * Date: 31/01/2014
 * @author Marc CAMARD - marc.camard(at)hotmail(dot)fr / https://github.com/yamapi/rejax
 *
 * USAGE:
 *	$("#myObject").rejax({
 *			time: 3000, //  number of frames per milliseconds at which animations will run (default value 3000)
			loop: 0, // stop loading after x loop (default value 0)
 *			}
 *		);
 *
 */
(function($)
{ 
	var refreshId = [];
	$.fn.rejax=function(options)
	{
		var defauts =
		{
			time: 3000,
			loop: 0,
			loader: 'Loading...',
			async: true,
			crossDomain: true,
		};  

		
		
		var params=$.extend(defauts, options); 
		
		
		this.each(function()
		{ 
			var $elem = $(this);
			var ajaxUrl = $elem.attr('rejaxfile');
			
			/*
			//$elem.html(params.loader);
			$elem.ajaxStart(function() {
				console.log("ok")
			});
			*/

			var timer = params.time;
			if ($elem.attr('rejaxtimer')) {
				timer = $elem.attr('rejaxtimer');
			}
			var async = params.async;
			if ($elem.attr('rejaxasync')) {
				async = $elem.attr('rejaxasync');
			}
			
			var id = refreshId.length;
			if ($elem.attr('rejaxname')) {
				id = $elem.attr('rejaxname');
			}
			
			var loop = params.loop;
			if ($elem.attr('rejaxloop')) {
				loop = $elem.attr('rejaxloop');
			}
			
			
			var index = 1;
			refreshId[id] = setInterval(function(){
				
				if(loop && loop == index){
					clearTimeout(refreshId[id]);
				}
				$.ajax({
					url: ajaxUrl,
					cache: false,
					//crossDomain: "true",
					//async: async,
				}).done(function(html) {
					$elem.html(html);
				}).error(function(){
					console.log("Ajax post request to the following script failed: " + url);
				});
				
				index++;
			}, timer);
			
			
		});				   
	};
	
	jQuery.fn.rejax.clear = function(name){
		//console.log(refreshId)
		clearTimeout(refreshId[name]);
	}
})(jQuery);