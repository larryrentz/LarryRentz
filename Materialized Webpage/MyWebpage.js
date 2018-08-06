
function initMap()
       {
       	  // Map options
          var options = 
          {
            zoom:4.5,
            center:{lat:38.6270,lng:-90.1994}
          }
           
 		   // New map
           var map = new google.maps.Map(document.getElementById('map'), options);

           /*
           // Listen for click on map
           google.maps.event.addListener(map, 'click', 
           	function(event)
           	{
           		// Add Marker
           		addMarker({coords:event.latLng});
           	});	
           	*/

           /*
           // Add marker
           var marker = new google.maps.Marker({
           		position:{lat:42.4668,lng:-70.9495},
           		map:map,
           		icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
           });

           // Add info window
           var infoWindow = new google.maps.InfoWindow({
           	content:'<h1>Lynna MA</h1>'
           });

           marker.addListener('click', function(){
           	infoWindow.open(map, marker);
           });
		   */

		   var markers = 
		   [
		   		{
				   	coords:{lat:29.6516,lng:-82.3248},
				   	content:'<h1>Gainesville FL</h1>'
		   		},

		   		{
				   	coords:{lat:39.1371,lng:-76.6983},
				   	content:'<h1>Severn MD</h1>'
		   		},

			    {
				   	coords:{lat:40.5170,lng:-80.2213},
				   	content:'<h1>Moon Township PA</h1>'
			    },

			    {
				   	coords:{lat:38.8106,lng:-90.6998},
				   	content:'<h1>OFallon MO</h1>'
			    },

			    {
				   	coords:{lat:39.3616,lng:-94.9201},
				   	content:'<h1>Ft. Leavenworth KS</h1>'
			    },

			    {
				   	coords:{lat:33.3459,lng:-84.1091},
				   	content:'<h1>Locust Grove GA</h1>'
			    },
		   
			   {
				   	coords:{lat:38.7893,lng:-77.1872},
				   	content:'<h1>Springfield VA</h1>'
			   }, 

			   {
				   	coords:{lat:32.4640,lng:-86.4597},
				   	content:'<h1>Prattville AL</h1>'
			   },

			   {
				   	coords:{lat:38.6265,lng:-76.9105},
				   	content:'<h1>Waldorf MD</h1>'
			   }

		   ];

		   // loop through markers
		   for(var i = 0; i < markers.length; i++)
		   {
		   		// Add Marker function
		   		addMarker(markers[i]);
		   }	


		   // Add Marker Function
		   function addMarker(props)
		   {
		   		var marker = new google.maps.Marker({
	           		position:props.coords,
	           		map:map,
	           		//icon:props.iconImage
	           	});	

		   		// Check for custom icon
	           	if(props.iconImage)
	           	{
	           		// Set icon image
	           		marker.setIcon(props.iconImage);
	           	}	
	           	// Check content 
	           	if(props.content)
	           	{
	           		var infoWindow = new google.maps.InfoWindow({
			           	content:props.content
			        });

			        marker.addListener('click', function(){
           				infoWindow.open(map, marker);
           			});
	           	}	

		   }	
       }


