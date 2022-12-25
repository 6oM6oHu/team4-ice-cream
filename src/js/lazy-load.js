 document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
   var iframesLazy = document.querySelectorAll("iframe.iframe-youtube-lazy-video");
   var iframeObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
     if (entry.isIntersecting && entry.target.src.length == 0) {
      entry.target.src = entry.target.dataset.src;
      iframeObserver.unobserve(entry.target);
     }
    });
   });
   iframesLazy.forEach(function (iframe) {
    iframeObserver.observe(iframe);
   });
  } else {
   var iframesLazy = document.querySelector('iframe.iframe-youtube-lazy-video');
   for (var i = 0; i < iframesLazy.length; i++) {
    if (lazyVids[i].getAttribute('src')) {
     lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('src'));
    }
   }
  }
 });
