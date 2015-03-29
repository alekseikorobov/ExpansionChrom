
window.onload = function(){

    // set new popup html code and close popup window
    getData();
	//$('body').append('<p>Всего записей в БД -'+rows.count+'</p>');

		$('#upd').click(MyUpdate);
}

function MyUpdate( )
{
	var bg_wnd = chrome.extension.getBackgroundPage();
    var rows = bg_wnd.UpdateData(id);	
	
	getData();
}
var id = 0;
function getData()
{
	var bg_wnd = chrome.extension.getBackgroundPage();
    var rows = bg_wnd.getResalt();
	id = bg_wnd.id;
	$('#dannie').html('');
    // function render popup
	for(i =0;i < rows.mails.length; i++)
	{
		$('#dannie').append('<p>'+rows.mails[i]+'</p>');		
	}
}