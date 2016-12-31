function getSummary(text) {

	var endpoint = 'summarize';
	var jsonData;
	
	$.ajax({
        url: 'http://api.aylien.com/api/v1/' + endpoint + '?text=' + encodeURIComponent(text) + '&title=NA',
        async:false,
        beforeSend: function(xhr) {
             xhr.setRequestHeader("X-AYLIEN-TextAPI-Application-Key", aylien_api_key);
             xhr.setRequestHeader("X-AYLIEN-TextAPI-Application-ID", aylien_api_id);
        }, success: function(data){
        	jsonData = data;
        	//alert(jsonData);
        }
	})

	return jsonData;

}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var activeTab = tabs[0];
	chrome.tabs.sendMessage(activeTab.id, {"message": "get_selected_text"}, function(response) {
		if (response.selected_text == "") {
			document.body.innerHTML += "<h3 style='text-align: center'>No text selected! Select text and try again.</h3>";
		}
		else {
			var apiResponse = getSummary(response.selected_text);
			//alert(apiResponse.sentences);
			var sentences = apiResponse.sentences;

			if (sentences.length == 0) {
				document.body.innerHTML += "<h3 style='text-align: center'>Not enough text selected to generate summary. Select larger block of text and try again.</h3>";
			}
			else {
				var i;
				//console.log(sentences.length);
				document.getElementById("summary").innerHTML += "<tr><th style='font-size: 16px;'>Summary</th></tr>";
				for (i = 0; i < sentences.length; i++) {
					if (i % 2 == 0) {
						document.getElementById("summary").innerHTML += "<tr style='background-color:#EAECEE'><td>" + sentences[i] + "</td></tr>";
					}
					else {
						document.getElementById("summary").innerHTML += "<tr style='background-color:white'><td>" + sentences[i] + "</td></tr>";
					}
				}
			}
		}
	});
});

