$(document).ready(() => { 
  			$('.searchbutton').click(() => {
  			var radiovalue = $( "input:checked" ).val();
  			
  			if (radiovalue==="IMDB")
  				{
  				
				var input1 = document.getElementById('userInput1').value;
				$.ajax({
        url: "http://www.omdbapi.com/?i="+input1+"&apikey=1c4cd32a",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            if (res['Response']=== 'True')
            {
            
            
            $(".firstpage").remove();
            if (res['Poster'] && res['Poster']!='N/A') {
            
    		$("#img-holder img").attr("src", res['Poster']);
    		
            }
            
            moviedata(res);
        	}
        	else {
        		$(".firstpage").remove();
        		$('#img-holder').text(res['Error']);
        	}
        }
        
    });
	}
			if (radiovalue==="Title")
  				{
  				
				var input1 = document.getElementById('userInput1').value;
				var replaced = input1.split(' ').join('+');
				console.log(replaced);
				$.ajax({
        url: "http://www.omdbapi.com/?t="+replaced+"&apikey=1c4cd32a",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            if (res['Response']=== 'True')
            {
            
            $(".firstpage").remove();
            
            if (res['Poster'] && res['Poster']!='N/A') {
            
    		$("#img-holder img").attr("src", res['Poster']);
    		
            }
            moviedata(res);
        	}
        	else {
        		$(".firstpage").remove();
        		$('#img-holder').text(res['Error']);
        	}
        }
    });
	}
			if (radiovalue==="Year")
  				{
  				
				var input1 = document.getElementById('userInput1').value;
				var replaced = input1.split(' ').join('+');
				var input2 = document.getElementById('userInput2').value;
				$.ajax({
        url: "http://www.omdbapi.com/?t="+replaced+"&y="+input2+"&apikey=1c4cd32a",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            if (res['Response']=== 'True')
            {
            $(".firstpage").remove();
            if (res['Poster'] && res['Poster']!='N/A') {
            
    		$("#img-holder img").attr("src", res['Poster']);
    		
            }
            moviedata(res);
            }
        	else {
        		$(".firstpage").remove();
        		$('#img-holder').text(res['Error']);
        	}
        }
    });
	}
	function moviedata(mymoviedata) {
		{
            
            var arrayofkeys = Object.keys(mymoviedata);
            var keylength = arrayofkeys.length;
            var myPara0 = document.createElement('span');
            for (var j=0; j < keylength ; j++) {
               
                var myPara1 = document.createElement('span');
                if (arrayofkeys[j].toUpperCase()!='POSTER' && arrayofkeys[j].toUpperCase()!='RATINGS' && arrayofkeys[j].toUpperCase()!='RESPONSE') {
                    myPara1.textContent = arrayofkeys[j].toUpperCase()+" : " + mymoviedata[arrayofkeys[j]];
                
                    myPara0.appendChild(myPara1);
                }
                
                
            }
			var variable = mymoviedata['Ratings'].length;
            
			
            
            for (var i=0; i < variable ; i++) {
               
                var myPara23 = document.createElement('span');
                
                myPara23.textContent = 'RATING:   Source - ' + mymoviedata['Ratings'][i]['Source'] +
                '   Value - ' + mymoviedata['Ratings'][i]['Value'];
                myPara0.appendChild(myPara23);
                
            }

			document.getElementById("img-txt1").appendChild(myPara0);
			$("span").addClass("spaces");
			$(".alignimg").show();
            $(".card").show();
	}
	}
	})
	});