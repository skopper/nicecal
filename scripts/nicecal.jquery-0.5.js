/*
* NiceCal
* Web: https://github.com/skopper/nicecal
* By: Markus Solälv
* Version: 0.5
* Updated: November 20th, 2012
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

(function( $ ) {

	var months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
	/*Method wrapper*/
	var methods = {
		init: function( options ) {
			/*Possible to set the date and month to be shown*/
			var settings = $.extend($.fn.nicecal.option, options);

			//Add placeholders for month and date
			this.append("<span id='month-text'></span>");
			this.append("<span id='date-nbr'></span>");

			//Set css on container
			var containerCss = {
				"background-image":"url('scripts/img/nicecal.png')",
				"background-repeat":"no-repeat",
				"background-position":"left top",
				"height": "64px",
				"width": "64px",
				"text-align": "center",
				"font-family": "'Trebuchet MS', Tahoma, Verdana, Arial, sans-serif"
			};
			this.css(containerCss);

			//Set css on placeholders
			var nbrCssObj = {
				'font-size': '43px',
				'position': 'relative',
				'top': '1px'
		    };

		    var monthCssObj = {
				'font-size': '10px',
				'color': 'white',
				'position': 'relative',
				'top': '4px',
				'display': 'block'
		    };

			this.children('#date-nbr').css(nbrCssObj);
			this.children('#month-text').css(monthCssObj);

			//Set initial text in month and date
			this.children('#date-nbr').html(settings.date);
			this.children('#month-text').html(months[settings.month]);


			return this;
		},
		//Method for setting date
		setDay: function( date ) {
			this.children('#date-nbr').html(date);
		}, 
		//Method for setting month (where january = 0, feb = 1 ... dec = 11)
		setMonth: function( month ) {

			this.children('#month-text').html(months[month]);
		}

	};
	
	//Method dispatcher
	$.fn.nicecal = function( method ) {
		// Method calling logic
	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on jQuery.niceCal' );
	    }   

	};

	// default options
	$.fn.nicecal.option = {
		'date': 19, //Default date is set to 19
		'month': 5	 //Default month is set to june
	};
})( jQuery );