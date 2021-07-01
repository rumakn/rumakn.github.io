
//underscore.js debounce function 
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function() {
  window.onscroll = debounce(() => {
    console.log('here');
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 60){
      nav.classList.remove("scrolled");
      nav.classList.add("navbar-dark");
      nav.classList.remove("navbar-light");
    }  else {
      nav.classList.add("scrolled");
      nav.classList.remove("navbar-dark");
      nav.classList.add("navbar-light");

    }
},  150);
})();




(function() {
  

  anime({
    targets: '.graphic-star.even path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: function (el, i) { return (Math.floor(i / 4) * 5) },
    direction: 'alternate',
    loop: true,

  });
  anime({
    targets: '.graphic-star.odd path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: function (el, i) { return (Math.floor(i / 4) + 50) },
    direction: 'alternate',
    loop: true,

  });

  anime({
    targets: '.graphic-bg-sq',
    duration: 500,
    easing: 'easeOutBack',
    scale: [0, 1],
    complete: function (anim) {
      var panels = document.querySelectorAll(".graphic-bg-sq")
      for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add('loaded');
      }
    }
  })
  anime({
    targets: '.graphic-computer',
    delay: 500,
    duration: 800,
    easing: 'easeOutBack',
    scale: [0, 1],

  })

  anime({
    targets: '.graphic-panel',
    delay: 1300,
    duration: 800,
    easing: 'easeOutBack',
    scale: [0, 1],
    complete: function (anim) {
      var panels = document.querySelectorAll(".graphic-panel")
      for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add('loaded');
      }
    }
  })

  anime({
    targets: '.graphic-leaf',
    duration: 1300,
    scale: [0, 1],
    skewY: ["40deg", "0deg"],
    easing: 'easeOutBack',
    rotate: [20, 0],
    delay: function (el, i) { return 500 + (i * 250) },
    complete: function (anim) {
      anime({
        targets: '.graphic-leaf',
        duration: function (el, i) { return 1500 + (i * 2) },
        scale: [1, 1],
        skewY: function (el, i) { return (i * 1.6) },
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        rotate: function (el, i) { return 1.2 + (i * .2) },

      })
    }
  });

  anime({
    targets: '.graphic-branch',
    duration: 1500,
    scale: [0, 1],
    skewY: ["40deg", "0deg"],
    easing: 'easeOutBack',
    rotate: [20, 0],
    delay: function (el, i) { return 1300 + (i * 250) },
    complete: function (anim) {
      anime({
        targets: '.graphic-branch',
        duration: function (el, i) { return 1700 + (i * 2) },
        scale: [1, 1],
        skewY: [0, .5],
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        rotate: [0, "1.5deg"]


      })
    }
  });
})();
