

window.onload = function(){
	//console.log(chrome.extension);
	
};
chrome.tabs.onActivated.addListener(function(info) {
        //window.bg.onActivated(info);
		//console.log('chrome.tabs.onActivated');
    });
chrome.extension.onConnect.addListener(function(port){        
		port.onMessage.addListener(factory);
		//console.log('chrome.extension.onConnect');
    });
	//var k = 0;
var lastId = 0;
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
		
		if (info && info.status && (info.status.toLowerCase() === 'complete')){
        // console.log('chrome.tabs.onUpdated');
		// console.log('id - ' +id);
		// console.log('info - ');
		
		// console.log(info);
		// console.log('tab - ');
		// console.log(tab);
		//console.log(window.document);
			
			//var port = chrome.tabs.connect(id);
            lastId = id;
			chrome.tabs.executeScript(id, {code:"initialization()"});
		
			//port.postMessage({method:'setTabId', data:id});
            //port.postMessage({method:'setHosts', data:window.bg.grabber_hosts});
            //port.postMessage({method:'run'});
			//chrome.browserAction.set = (k++);
			//k++;
			//chrome.browserAction.setBadgeText({text:k.toString()});
		}
        
    });
chrome.browserAction.onClicked.addListener(function(tab) {
		console.log(tab);	
        //window.onClicked(tab);
    });
var mails;
function MyCallBack(data)
{
	//console.log('MyCallBack');
	//console.log(data);
	mails = data;
	if(mails){
		chrome.browserAction.setBadgeText({text:mails.length.toString()});
		chrome.browserAction.setPopup({popup: "popup.html"});
		db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
		db.transaction(function(tx) {tx.executeSql("CREATE TABLE TableMail (id REAL UNIQUE, mail TEXT, timestamp REAL)", [], null, null);});
		add(0);				
	}
	else{
		mails = 0;
		chrome.browserAction.setBadgeText({text:''});
		//chrome.browserAction.setPopup({popup: "popup.html"});
	}
}

function add(i2)
{
	db.transaction(function(tx) {
			tx.executeSql("SELECT * FROM TableMail where mail = '"+mails[i2]+"'", [], 
				function(tx, result) {
					if(result.rows.length == 0){
						tx.executeSql("INSERT INTO TableMail (mail, timestamp) values(?, ?)", [mails[i2], new Date().getTime()], null, null);
					}
					if(mails[++i2]){
						add(i2);
					}
				}, 
				null);		
		});
}
function getResalt()
{
	var count = 0;
	// if(!db) db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);
	// 
	// db.readTransaction(function(tx) {
			// tx.executeSql("SELECT count(*) c FROM TableMail", [], 
				// function(tx, result) {
					// if(result.rows.length > 0){
						
						// count = result.rows.item(0)['c'];
						// console.log(count);
					// }
				// }, 
				// null);		
		// });
	return {mails:mails,count:count,id:lastId};
}
function UpdateData(id)
{	
	chrome.tabs.executeScript(id, {code:"initialization()"});
}



function factory(obj){
    if(obj && obj.method){
        if(obj.data)
            window[obj.method](obj.data);
        else
            window[obj.method]();
    }
}

