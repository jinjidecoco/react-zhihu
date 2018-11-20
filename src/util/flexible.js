
    (function (doc, win, undefined) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (clientWidth === undefined) return;
          docEl.style.fontSize = clientWidth / 7.5 + 'px';  // 50
        };
      if (doc.addEventListener === undefined) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window);