pm.settings = {
    historyCount:50,
    lastRequest:"",
    autoSaveRequest:true,
    selectedEnvironmentId:"",

    createSettings: function() {
        pm.settings.create("historyCount", 100);
        pm.settings.create("syncWithGoogleDrive", false);
        pm.settings.create("autoSaveRequest", true);
        pm.settings.create("selectedEnvironmentId", true);
        pm.settings.create("lineWrapping", true);
        pm.settings.create("previewType", "parsed");
        pm.settings.create("retainLinkHeaders", false);
        pm.settings.create("sendNoCacheHeader", true);
        pm.settings.create("usePostmanProxy", false);        
        pm.settings.create("proxyURL", "");
        pm.settings.create("lastRequest", "");
        pm.settings.create("launcherNotificationCount", 0);
        pm.settings.create("variableDelimiter", "{{...}}");
        pm.settings.create("languageDetection", "auto");
        pm.settings.create("haveDonated", false);
    },

    initValues: function() {
        $('#history-count').val(pm.settings.get("historyCount"));
        $('#sync-with-google-drive').val(pm.settings.get("syncWithGoogleDrive") + "");
        $('#auto-save-request').val(pm.settings.get("autoSaveRequest") + "");
        $('#retain-link-headers').val(pm.settings.get("retainLinkHeaders") + "");
        $('#send-no-cache-header').val(pm.settings.get("sendNoCacheHeader") + "");
        $('#use-postman-proxy').val(pm.settings.get("usePostmanProxy") + "");
        $('#postman-proxy-url').val(pm.settings.get("postmanProxyUrl"));
        $('#variable-delimiter').val(pm.settings.get("variableDelimiter"));
        $('#language-detection').val(pm.settings.get("languageDetection"));
        $('#have-donated').val(pm.settings.get("haveDonated") + "");
    },

    initListeners: function() {
        $('#history-count').change(function () {
            pm.settings.set("historyCount", $('#history-count').val());
        });

        $('#sync-with-google-drive').change(function () {
            var val = $('#sync-with-google-drive').val();
            if (val == "true") {
                pm.settings.set("syncWithGoogleDrive", true);
            }
            else {
                pm.settings.set("syncWithGoogleDrive", false);
            }
        });

        $('#auto-save-request').change(function () {
            var val = $('#auto-save-request').val();
            if (val == "true") {
                pm.settings.set("autoSaveRequest", true);
            }
            else {
                pm.settings.set("autoSaveRequest", false);
            }
        });

        $('#retain-link-headers').change(function () {
            var val = $('#retain-link-headers').val();
            if (val === "true") {
                pm.settings.set("retainLinkHeaders", true);
            }
            else {
                pm.settings.set("retainLinkHeaders", false);
            }
        });        

        $('#send-no-cache-header').change(function () {
            var val = $('#send-no-cache-header').val();
            if (val == "true") {
                pm.settings.set("sendNoCacheHeader", true);
            }
            else {
                pm.settings.set("sendNoCacheHeader", false);
            }
        });

        $('#use-postman-proxy').change(function () {
            var val = $('#use-postman-proxy').val();
            if (val == "true") {
                pm.settings.set("usePostmanProxy", true);
                $('#postman-proxy-url-container').css("display", "block");
            }
            else {
                pm.settings.set("usePostmanProxy", false);
                $('#postman-proxy-url-container').css("display", "none");
            }
        });

        $('#postman-proxy-url').change(function () {
            pm.settings.set("postmanProxyUrl", $('#postman-proxy-url').val());
        });

        $('#variable-delimiter').change(function () {
            pm.settings.set("variableDelimiter", $('#variable-delimiter').val());
        });

        $('#language-detection').change(function () {
            pm.settings.set("languageDetection", $('#language-detection').val());
        });

        $('#have-donated').change(function () {
            var val = $('#have-donated').val();
            if (val == "true") {
                pm.layout.hideDonationBar();
                pm.settings.set("haveDonated", true);
            }
            else {
                pm.settings.set("haveDonated", false);
            }
        });

        if (pm.settings.get("usePostmanProxy") == true) {
            $('#postman-proxy-url-container').css("display", "block");
        }
        else {
            $('#postman-proxy-url-container').css("display", "none");
        }
    },
    
    init:function () {                
        pm.settings.createSettings();
        pm.settings.initValues();
        pm.settings.initListeners();
    },

    create:function (key, defaultVal) {
        if (chrome.storage.local.get(key)) {
            chrome.storage.local.set({key: chrome.storage.local.get(key)});
        }
        else {
            if (defaultVal !== "undefined") {
                pm.settings[key] = defaultVal;
                chrome.storage.local.set({key: defaultVal});
                localStorage[key] = defaultVal;
            }
        }
    },

    set:function (key, value) {
        pm.settings[key] = value;
        chrome.storage.local.set({key: value});
    },

    get:function (key) {
        chrome.storage.local.get(key);

        if (val === "true") {
            return true;
        }
        else if (val === "false") {
            return false;
        }
        else {
            return chrome.storage.local.get(key);
        }
    }
};