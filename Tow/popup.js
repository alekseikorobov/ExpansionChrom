
window.onload = function(){

    // set new popup html code and close popup window
    var bg_wnd = chrome.extension.getBackgroundPage();
    var rows = bg_wnd.getResalt();

    // function render popup
	for(i =0;i < rows.mails.length; i++)
	{
		$('body').append('<p>'+rows.mails[i]+'</p>');		
	}
	//$('body').append('<p>Всего записей в БД -'+rows.count+'</p>');		
}