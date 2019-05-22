var el = document.getElementById('nav');
var navBtn = document.getElementById('nav-btn');

window.toggleClass = function() {
  if (el.className == 'vertical-mode-closed') {
    el.className = 'vertical-mode';
    // navBtn.innerHTML = 'x';
  } else {
    el.className = 'vertical-mode-closed';
    // navBtn.innerHTML = '&#x2261;';
  }
};

window.onresize = function () {
  el.className = 'vertical-mode-closed';
  // navBtn.innerHTML = '&#x2261;';
};

nav.onclick = function () {
  el.className = 'vertical-mode-closed';
  // navBtn.innerHTML = '&#x2261;';
};


if ('ontouchstart' in window){
  document.body.className += ' isTouch';
} else {
  document.body.className += ' isDesktop';
}

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });


$('.carousel').carousel({
  interval: 5000
})
