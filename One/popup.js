
window.onload = function(){

    // set new popup html code and close popup window
    var bg_wnd = chrome.extension.getBackgroundPage();
    var rows = bg_wnd.getResalt();

    // function render popup
		for(i =0;i < rows.length; i++)
		{
			document.body.text +='<p>'+ rows[i]+'</p>';
		}
}