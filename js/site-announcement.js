var siteAnnouncementHandler = {
    'handleClick': function () {
        document.cookie = 'noticeDismissed=true; path=/';
        document.getElementById('so-site-announcement-container').style.cssText = 'display: none;';
        document.getElementById('so-site-announcement-fade').style.cssText = 'display: none;';
        return false;
    },
    'docReady': function (fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
};

(function () {
    siteAnnouncementHandler.docReady(function () {
        if (document.cookie.indexOf('noticeDismissed') === -1) {
            document.getElementById('so-site-announcement-container').style.cssText = 'display: block;';
            document.getElementById('so-site-announcement-fade').style.cssText = 'display: block;';
        }
    });
})();