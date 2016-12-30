chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.message = "get_selected_text") {
  		var selectedText = document.getSelection().toString();
  		sendResponse({"selected_text": selectedText});
  		return true;
  	}
  }
);