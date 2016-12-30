var textapi = new AYLIENTextAPI({
  application_id: aylien_api_id,
  application_key: aylient_api_key
});

function getSummary(text) {
	textapi.summarize({
	  text: text,
	  sentences_number: 5
	}, function(error, response) {
	  if (error === null) {
	    response.sentences.forEach(function(s) {
	      console.log(s);
	    });
	  }
	});
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var activeTab = tabs[0];
	console.log("S");
	chrome.tabs.sendMessage(activeTab.id, {"message": "get_selected_text"}, function(response) {

	})
})

