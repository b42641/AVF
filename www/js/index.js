




$(function() {
	$.getJSON("http://search.twitter.com/search.json?q=dmusicstud&rpp=3&include_entities=true&results_type=popular&callback=?",
		function(data) {
		console.log(data);
		$("#data-msg").html("<p>Successfully awesome</p>");
		for (i=0, j=data.results.length; i<j; i++) {
			$("#data-output")
				.append("<li>" +
					"<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + data.results[i].text + "</p>" + "</li>");

	}
});
});


/*$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "guitar",
    tagmode: "any",
    format: "json"
  },
  function(data) {
		console.log(data);
		alert(data.completed_in);
		$("#data-msg").html("<p>Data successfully obtained!</p>");
		for (i=0, j=data.results; i<j; i++) {
			$("#data-output2")
				.append("<li>" +
					"<p>" + "<img src='" + item.media.m + "' /><br />" + data.results[i].text + "</p>" + "</li>");

	}

    });*/




$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "Parker Guitar",
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      
      $("<img/>").attr("src", item.media.m).appendTo("#data-output2");
      if ( i == 5 ) return false;
    
console.log(data);
    });
  });







/*img{
    -moz-border-radius: 5px/5px;
    -webkit-border-radius: 5px 5px;
    border-radius: 5px/5px;;
    border:solid 10px #e23; 
    width:10px;
    height:10px;
    margin-left: 380px;  
    background: green;
}*/