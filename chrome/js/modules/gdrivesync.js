pm.gdrivesync = {
	isSyncEnabled: false,

	init: function() {		
		pm.gdrivesync.isSyncEnabled = pm.settings.get("syncWithGoogleDrive");		
		
		if (pm.gdrivesync.isSyncEnabled) {
			chrome.syncFileSystem.requestFileSystem(function (fs) {
				console.log("Created the file system", fs);			   			  
			});
		}
	}
};