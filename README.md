# news-summarizer-extension

A chrome extension that allows a user to obtain a summary of a news article. The extension uses the Aylien Text Analysis API to retrieve summary results.

<img src="https://github.com/kvyshakh/news-summarizer-extension/blob/master/chrome_extension_screenshot.png"/>

## Get up and running
1. Create an account at http://aylien.com/ to retrieve new api id and key
2. Add new file "api-keys.js" to project directory
3. In "api-keys.js", add the following with new api id and key:
```{javascript}
var aylien_api_key = "[api key]"
var aylien_api_id = "[api id]" 
```
