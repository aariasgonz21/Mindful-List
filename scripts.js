$(document).ready(function() { 

  //function to declare & return the output from the ajax call response
	function output(res){

    //initializing the output
    var outputString = "<div>";

    //Setting Meetup Name + Link
      if (res.name) {
          outputString += "<h3>";
      if (res.link) {
          outputString += "<a href="' + res.link + '">' + res.name + '</a>";
      } else {
            outputString += res.name;
        }
          outputString += "</h3>";
      }  

    //Setting the Meetup Photo if available
      if(res.key_photo !== undefined) {
          outputString += "<img src="+res.key_photo.photo_link+">";   
      }

    //Setting Meetup Details (city, state, members + host, & description)
      outputString += "<h4>"+ res.city +", "+res.state+"</br>With: "+res.members+" Members, Hosted By "+
                      res.organizer.name+"</h4><p>"+res.description+"<p></br>";

    //Setting Next Event if available 
      if(res.next_event !== undefined){
                outputString += "Next Event: "+ res.next_event.name;
      }

    //closing & returning the output
      outputString += "</div>";
      return outputString;
  };

  function anxietyVideos(){

    var anxietyVids = '<h3> 10 Most Common Anxiety Symptoms - Mental Health </h3>'+
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/SDPW3pdlnLk" frameborder="0" allowfullscreen></iframe>'+
      '</br><h3> HOW TO OVERCOME DEPRESSION | ANXIETY | HARD TIMES</h3>'+
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/kKcRSboPgU4" frameborder="0" allowfullscreen></iframe>'

    return anxietyVids;
  }

  function depressionVideos(){
  	var depressionVids = '<h3> What’s It Like To Have Bipolar Disorder</h3>'+
						 '<iframe width="560" height="315" src="https://www.youtube.com/embed/2rvQQiQN-Pg" frameborder="0" allowfullscreen></iframe>'+
						 '</br><h3>TEDxTerryTalks - Laura Bain - Living with Bipolar Type II</h3>'+
   						 '<iframe width="560" height="315" src="https://www.youtube.com/embed/8Ki9dgG3P5M" frameborder="0" allowfullscreen></iframe>'
   	return depressionVids;
  }

  function addictionVideos(){
  	var addictionVids = 'h3 Everything you think you know about addiction is wrong | Johann Hari></h3>'+
					  '<iframe width="560" height="315" src="https://www.youtube.com/embed/PY9DcIMGxMs" frameborder="0" allowfullscreen></iframe>'+
					  '</br><h3 The Connections Between Eating Disorders and Addictions></h3>'+
					  '<iframe width="560" height="315" src="https://www.youtube.com/embed/y6FTwzm5zYY" frameborder="0" allowfullscreen></iframe>'
	return addictionVids;
  }

  function didVideos(){
  var didVids = '<h3>What is Dissociative Identity Disorder? Multiple Personalities | Kati Morton treatment trauma did></h3>'+
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/BoJNkKWs3iI" frameborder="0" allowfullscreen></iframe>'
 	return didVideos;
  }

  function videos(illness){
    $('#results').empty();

    if(illness === 'anxiety'){
      $("#results").append(anxietyVideos());
    }

    if(illness === 'depression'){
      $("#results").append(depressionVideos());
    }

    if(illness === 'addiction'){
      $("#results").append(addictionVideos());
    }

    if(illness === 'did'){
      $("#results").append(didVideos());
    }
  }

  function articles(illness){
    $('#results').empty();

  }

  function scrollDown(){
    $('html, body').animate({
        scrollTop: $("#resultBtns").offset().top
      }, 2000);
  }

$("#zip-submit").click(function(){

    $('html, body').animate({
        scrollTop: $("#mentalIllnessBtn").offset().top
      }, 2000);

  $("#anxietyBtn").click(function(){
     scrollDown();
     var illness = 'anxiety';
     $("#groupBtn").click(function(){
        groups(illness);
    });
     $("#videoBtn").click(function(){
        videos(illness);
     });
     $("articlesBtn").click(function(){
        aricles(illness);
     });

  });

  $("#depressionBtn").click(function(){
      scrollDown();
      var illness = 'depression';
      groups(illness);
      videos(illness);
  });

  $("#addictionBtn").click(function(){
      scrollDown();
      var illness = 'addiction';
      groups(illness);
      videos(illness);
  });

  $("#didBtn").click(function(){
      scrollDown();
      var illness = 'did';
      groups(illness);
      videos(illness);
  });

});
});
