<script type="text/javascript">
epom_key = "82a938bdd765e9d849700457c95635ab";
epom_channel = "";
epom_code_format = "ads-sync.js";
epom_ads_host = "//n245adserv.com";
epom_click = "";
epom_custom_params = {};
selurl="&requestUrl=http%3a%2f%2fwww.rottentomatoes.com%2f";

var epom_key, epom_channel, epom_code_format, epom_ads_host, epom_ads_host_overridden, epom_click, epom_custom_params, epom_width, epom_height, epom_target_id, epom_template_target_id, EpomConfig, epomAdsConfig = EpomConfig,
    CustomWLAdServer = CustomWLAdServer || {
        requests: []
    };
try {
    var messageEventListener = function(event) {
        if (event && event.data && "string" == typeof event.data) {
            if (0 == event.data.indexOf("rrImpl")) {
                try {
                    eval("CustomWLAdServer." + event.data)
                } catch (e) {
                    console.warn(e)
                }
                return !0
            }
            if (0 == event.data.indexOf("sendRequestInfo:")) {
                var key = event.data.substring(16),
                    req = CustomWLAdServer.findRepReqByKey(key);
                if (null != req) return req.elemId && document.getElementById(req.elemId) && document.getElementById(req.elemId).contentWindow && document.getElementById(req.elemId).contentWindow.postMessage("requestInfoMessage:" + JSON.stringify(req), "*"), !0
            }
            if (0 == event.data.indexOf("requestInfoMessage:")) {
                try {
                    var reqFromMessage = JSON.parse(event.data.substring(19));
                    reqFromMessage.epom_code_format = "ads-async.js";
                    var existingReq = reqFromMessage.epom_key ? CustomWLAdServer.findRepReqByKey(reqFromMessage.epom_key) : null;
                    if (existingReq)
                        for (var prop in reqFromMessage) existingReq[prop] = reqFromMessage[prop];
                    else reqFromMessage.epom_target_id || (reqFromMessage.epom_target_id = "epom-" + reqFromMessage.epom_key + (reqFromMessage.epom_width ? "-" + reqFromMessage.epom_width + "x" + reqFromMessage.epom_height : "")), CustomWLAdServer.requests.push(reqFromMessage)
                } catch (e) {
                    console.warn(e)
                }
                return !0
            }
        }
        return !1
    };
    CustomWLAdServer.windowListener || (CustomWLAdServer.windowListener = messageEventListener, window.addEventListener ? window.addEventListener("message", messageEventListener) : window.attachEvent && window.attachEvent("message", messageEventListener)), ("undefined" == typeof CustomWLAdServer.requests || null == CustomWLAdServer.requests) && (CustomWLAdServer.requests = [])
} catch (err) {
    console.warn(err)
}
"undefined" != typeof epom_ads_host_overridden && (epom_ads_host = epom_ads_host_overridden);
var console = window.console || {
    warn: function() {}
};
CustomWLAdServer.onReady = function(e) {
    window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent("onload", e)
}, CustomWLAdServer.addCampaignId = function(e) {
    if ("undefined" == typeof this.campaignIds) this.campaignIds = e;
    else try {
        null == new RegExp("(^|,)" + e + "($|,)").exec(this.campaignIds) && (this.campaignIds += "," + e)
    } catch (t) {
        this.campaignIds += "," + e
    }
}, CustomWLAdServer.getCampaignIds = function() {
    return this.campaignIds || ""
}, CustomWLAdServer.getPageIdentifier = function() {
    return window.performance && window.performance.timing && window.performance.timing.domainLookupEnd || 0
}, CustomWLAdServer.rrImpl = function(e, t, o, i) {
    var r = this.findRepReqByKey(e);
    if (null != r) {
        for (var n in o) r[n] = o[n];
        return t && (r.excluded = r.excluded || [], "CURRENT" == i ? r.excluded = [t] : "ALL" == i && -1 == r.excluded.indexOf(t) ? (r.excluded.push(t), r.excluded.length > 100 && r.excluded.splice(0, 1)) : r.excluded = []), r.repeated = !0, r.invoker ? new r.invoker(r).invoke() : new EpomInvokeServer(r).invoke(), !0
    }
    return !1
}, CustomWLAdServer.findRepReqByKey = function(e) {
    if (this.requests)
        for (var t = 0; t < this.requests.length; t++)
            for (var o in this.requests[t])
                if (o && o.indexOf && o.indexOf("_key") == o.length - 4 && this.requests[t][o] === e) return this.requests[t];
    return null
}, CustomWLAdServer.repeatRequest = function(e, t, o, i) {
    return CustomWLAdServer.rrImpl(e, t, o, i)
}, CustomWLAdServer.isFF = function() {
    return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
}, CustomWLAdServer.canWrite = function() {
    var e = "r" + Math.random().toString(36).substr(2);
    document.write('<p id="' + e + '"></p>');
    var t = document.getElementById(e);
    return t ? (t.parentNode.removeChild(t), !0) : !1
}, CustomWLAdServer.getEpomCookiesFromLocalStorage = function() {
    try {
        if ("localStorage" in window && null !== window.localStorage && null !== localStorage && null !== typeof localStorage && "undefined" != typeof localStorage && "undefined" != typeof localStorage.epomCookies) {
            var e = [],
                t = JSON.parse(localStorage.epomCookies);
            for (var o in t) e.push(o + "=" + t[o]);
            return 0 == e.length ? "" : "&" + e.join("&")
        }
    } catch (i) {}
    return ""
}, CustomWLAdServer.testElms = function(e) {
    if (void 0 !== e) {
        var t, o = document.getElementById(e),
            i = o.childNodes;
        o.style.cssText += "height:0;margin:0;padding:0;border:0;background:transparent;font-size:0;";
        for (var r = i.length - 1; r >= 0; r--) {
            var n = i[r];
            if (void 0 !== n.tagName)
                if ("style" == n.tagName.toLowerCase() || "script" == n.tagName.toLowerCase()) t = !1;
                else {
                    var s = window.getComputedStyle ? getComputedStyle(n, "") : n.currentStyle,
                        d = s.position;
                    if ("static" == d || "relative" == d || !d) {
                        t = !0;
                        break
                    }
                } else if ("#text" == n.nodeName && n.nodeValue.replace(/^\s+|\s+$/g, "").length > 0) {
                t = !0;
                break
            }
        }
        t && (o.style.height = "auto", o.style.fontSize = "")
    }
}, CustomWLAdServer.execBodyScripts = function(e, t) {
    function o(e, t) {
        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
    }

    function i(e, t) {
        if (e) {
            var o, r;
            if (e.src) {
                o = document.getElementsByTagName("head")[0], r = document.createElement("script"), r.src = e.src;
                var n = !!window.ActiveXObject;
                if (n) {
                    var s = !1;
                    r.onreadystatechange = function() {
                        s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, i(t.shift(), t), r.onreadystatechange = null)
                    }
                } else r.onload = function() {
                    i(t.shift(), t)
                };
                o.insertBefore(r, o.firstChild)
            } else {
                var d = e.text || e.textContent || e.innerHTML || "";
                o = document.getElementsByTagName("head")[0] || document.documentElement, r = document.createElement("script"), r.type = "text/javascript";
                try {
                    r.appendChild(document.createTextNode(d))
                } catch (a) {
                    r.text = d
                }
                o.insertBefore(r, o.firstChild), i(t.shift(), t)
            }
        }
    }
    var r, n, s = [],
        d = e.getElementsByTagName("*");
    for (n = 0; d[n]; n++) r = d[n], !o(r, "script") || r.type && "text/javascript" !== r.type.toLowerCase() || s.push(r);
    i(s.shift(), s)
};
var EpomInvokeServer = function(e) {
    this.type = e.epom_code_format, this.key = e.epom_key, this.elemId = e.elemId, this.repeated = e.repeated, "undefined" == typeof e.epom_channel ? this.channel = "" : this.channel = e.epom_channel, "undefined" == typeof e.epom_click ? this.click = "" : this.click = e.epom_click, "undefined" == typeof e.epom_custom_params ? this.params = {} : this.params = e.epom_custom_params, "undefined" == typeof e.epom_target_id ? this.target_id = null : this.target_id = e.epom_target_id, "undefined" == typeof e.epom_template_target_id ? this.template_target_id = null : this.template_target_id = e.epom_template_target_id, "undefined" == typeof e.epom_ads_host ? this.ads_host = null : this.ads_host = e.epom_ads_host, "undefined" == typeof e.epom_width ? this.width = "" : this.width = e.epom_width, "undefined" == typeof e.epom_height ? this.height = "" : this.height = e.epom_height, void 0 !== typeof e.cuwl_passback_tag && (this.passbackTag = e.cuwl_passback_tag), void 0 !== typeof e.excluded && (this.excluded = e.excluded), this.referer = e.epom_referer
};
if (EpomInvokeServer.prototype = {
    isUrlRegEx: /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i,
    getScreenResolution: function() {
        try {
            return "&scrWidth=" + window.screen.width + "&scrHeight=" + window.screen.height
        } catch (e) {
            return ""
        }
    },
    isEncoded: function(e) {
        return decodeURIComponent(e) !== e
    },
    toQueryString: function(e) {
        var t = [];
        for (var o in e) t.push("cp." + o + "=" + (this.isEncoded(e[o]) ? e[o] : encodeURIComponent(e[o])));
        return 0 == t.length ? "" : "&" + t.join("&")
    },
    getHost: function() {
        if (this.ads_host) {
            var e = this.params.custom_ads_host;
            return ("https:" == location.protocol ? "https:" : "http:") + (e ? "//" + e : this.ads_host)
        }
        for (var t, o = document.getElementsByTagName("script"), i = o.length - 1; i >= 0; i--) {
            var r = o[i];
            if (-1 != r.src.indexOf("/js/show_ads.js")) {
                t = r.src;
                break
            }
        }
        return t.substr(0, t.indexOf("/js/show_ads.js"))
    },
    getReqUrl: function() {
        return "string" == typeof this.referer && this.isUrlRegEx.test(this.referer) ? "&requestUrl=" + encodeURIComponent(this.referer) : "string" == typeof document.URL && this.isUrlRegEx.test(document.URL) ? "&requestUrl=" + encodeURIComponent(document.URL) : ""
    },
    getReqRef: function() {
        return "string" == typeof document.referrer && this.isUrlRegEx.test(document.referrer) ? "&requestRef=" + encodeURIComponent(document.referrer) : ""
    },
    getFlashVer: function() {
        var e, t, o, i;
        if (navigator.plugins && navigator.plugins.length > 0) {
            t = navigator.plugins;
            for (var r = 0; r < t.length && !i; r++) o = t[r], o.name.indexOf("Shockwave Flash") > -1 && (i = o.description.split("Shockwave Flash ")[1])
        } else {
            o = "ShockwaveFlash.ShockwaveFlash";
            try {
                e = new ActiveXObject(o + ".7"), i = e.GetVariable("$version")
            } catch (n) {}
            if (!i) try {
                e = new ActiveXObject(o + ".6"), i = "WIN 6,0,21,0", e.AllowScriptAccess = "always", i = e.GetVariable("$version")
            } catch (n) {}
            if (!i) try {
                e = new ActiveXObject(o), i = e.GetVariable("$version")
            } catch (n) {}
            i && (i = i.split(" ")[1].split(","), i = i[0] + "." + i[1] + " r" + i[2])
        }
        return i ? i : "-"
    },
    getUrl: function(e) {
        var t = "";
        if (this.excluded)
            for (j in this.excluded) t += "&excluded=" + this.excluded[j];
        return this.getHost() + "/" + this.type + "?v=1&key=" + this.key + (e ? e : "") + "&ch=" + this.channel + "&click=" + this.click + "&tz=" + (new Date).getTimezoneOffset() / -60 + "&t=" + (new Date).getTime() + (this.passbackTag ? "&pb=" + this.passbackTag : "") + selurl + this.getReqRef() + "&flashVer=19.0 R0" + (this.width ? "&epom_width=" + this.width : "") + (this.height ? "&epom_height=" + this.height : "") + t + this.toQueryString(this.params) + CustomWLAdServer.getEpomCookiesFromLocalStorage() + this.getScreenResolution()
    },
    invokeIframeSync: function() {
        if (this.repeated && this.elemId && document.getElementById(this.elemId)) {
            var e = this.getUrl();
            return void(document.getElementById(this.elemId).src = e + (-1 != e.indexOf("?") ? "&" : "?") + "iis3352_rnd=" + Math.random())
        }
        this.write("<iframe src='" + this.getUrl("&adsCampaignKey=" + CustomWLAdServer.getPageIdentifier()) + '\' framespacing="0" frameborder="no" scrolling="no" width="' + this.width + '" height="' + this.height + '"' + (this.elemId ? " id='" + this.elemId + "'" : "") + "></iframe>")
    },
    invokeIframeAsync: function() {
        var e = document.createElement("iframe");
        e.src = this.getUrl("&tarId=" + this.target_id + (this.template_target_id ? "&templTarId=" + this.template_target_id : "") + "&cIds=" + CustomWLAdServer.getCampaignIds() + "&adsCampaignKey=" + CustomWLAdServer.getPageIdentifier()), e.width = this.width, e.id = this.elemId, e.height = this.height, e.frameBorder = "0", e.scrolling = "no", this.append(this.target_id, e)
    },
    append: function(e, t) {
        var o = document.getElementById(e);
        if (o) {
            for (; !this.template_target_id && o.childNodes.length > 0;) o.removeChild(o.childNodes[0]);
            o.appendChild(t)
        } else this.onReady(function() {
            if (o = document.getElementById(e)) {
                for (; !this.template_target_id && o.childNodes.length > 0;) o.removeChild(o.childNodes[0]);
                o.appendChild(t)
            } else console.warn("Can't find element with id: " + e)
        })
    },
    onReady: function(e) {
        CustomWLAdServer.onReady(e)
    },
    invokeAsyncFromSyncData: function() {
        var e, t = "div" + this.elemId;
        if (document.getElementById(t)) e = document.getElementById(t);
        else {
            e = document.createElement("div"), e.id = t;
            var o = document.getElementById(this.elemId);
            o && o.parentNode && o.parentNode.insertBefore(e, o)
        }
        this.target_id = t, this.type = "ads-async.js", this.invokeJsAsyncCode()
    },
    invokeJsSyncCode: function() {
        var e = this.getUrl("&cIds=" + CustomWLAdServer.getCampaignIds() + "&adsCampaignKey=" + CustomWLAdServer.getPageIdentifier());
        return this.repeated && this.elemId && document.getElementById(this.elemId) && "complete" == document.readyState ? void this.invokeAsyncFromSyncData() : void this.write("<script type='text/javascript' src='" + e + "'" + (this.elemId ? " id='" + this.elemId + "'" : "") + "></script>")
    },
    invokeJsAsyncCode: function() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = this.getUrl("&tarId=" + this.target_id + (this.template_target_id ? "&templTarId=" + this.template_target_id : "") + "&cIds=" + CustomWLAdServer.getCampaignIds() + "&adsCampaignKey=" + CustomWLAdServer.getPageIdentifier()), this.append(this.target_id, e)
    },
    write: function(e) {
        document.write(e)
    },
    invoke: function() {
        "ads" == this.type && this.target_id ? this.invokeIframeAsync() : "ads" == this.type ? this.invokeIframeSync() : this.target_id ? this.invokeJsAsyncCode() : this.invokeJsSyncCode()
    }
}, "undefined" != typeof epom_key && epom_key && "undefined" != typeof epom_code_format && epom_code_format && ("undefined" == typeof epomAdsConfig || !CustomWLAdServer.isFF() || CustomWLAdServer.canWrite())) {
    var syncConfig = {
        epom_code_format: epom_code_format,
        epom_key: epom_key,
        epom_channel: epom_channel,
        epom_click: epom_click,
        epom_custom_params: epom_custom_params,
        epom_width: epom_width,
        epom_height: epom_height,
        epom_ads_host: epom_ads_host,
        epom_target_id: epom_target_id,
        epom_template_target_id: epom_template_target_id,
        epom_referer: "string" == typeof epom_referer ? epom_referer : null
    };
    syncConfig.elemId = epom_key + "_sync", syncConfig.epom_key = epom_key, syncConfig.invoker = EpomInvokeServer, CustomWLAdServer.requests.push(syncConfig), new EpomInvokeServer(syncConfig).invoke(), epom_key = void 0, epom_channel = void 0, epom_code_format = void 0, epom_ads_host = void 0, epom_click = void 0, epom_custom_params = void 0, epom_width = void 0, epom_height = void 0, epom_target_id = void 0, epom_template_target_id = void 0
} else if ("undefined" != typeof epomAdsConfig && "undefined" != typeof epomAdsConfig.ads && epomAdsConfig.ads.length > 0) {
    for (var epomAdsConfigWait = [], i = 0; i < epomAdsConfig.ads.length; i++) "undefined" != typeof ads_host_overridden && (epomAdsConfig.ads[i].epom_ads_host = ads_host_overridden), epomAdsConfig.ads[i].invoker = EpomInvokeServer, epomAdsConfig.ads[i].elemId = epomAdsConfig.ads[i].epom_target_id + "-iframe", CustomWLAdServer.requests.push(epomAdsConfig.ads[i]), new EpomInvokeServer(epomAdsConfig.ads[i]).invoke();
    epomAdsConfig.ads = epomAdsConfigWait
}
</script>
