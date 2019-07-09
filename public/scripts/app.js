function createPromise(e) {
  return new Promise(function(e, t) {
    e('Success');
  });
}
function isScrolledIntoView(e) {
  const t = e.getBoundingClientRect();
  const o = t.top;
  const s = t.bottom;
  return o >= 0 && s <= window.innerHeight;
}
document.addEventListener('scroll', function() {
  const e = document.querySelector('.navbar');
  const t = e.clientHeight;
  console.log('Nav Height:', t);
  const o = this.documentElement.scrollTop;
  console.log('Scroll Location:', o);
  t < o - 30
    ? e.classList.add('sm--navbar__scrolled')
    : e.classList.remove('sm--navbar__scrolled');
});
let slideshowTimer;
const indicatorBars = document.querySelectorAll(
  '.sm--quotes__quote-indicator-bar'
);
const quotes = document.querySelectorAll('.sm--quotes__quote');
const slideshowTiming = 8e3;
function runSlideshow() {
  const e = document.querySelector('.sm--quotes__quote-active').id;
  const t = e.substr(e.length - 1);
  if (parseInt(t) === 3) var o = 1;
  else o = parseInt(t) + 1;
  const s = document.querySelector('#sm--quotes__quote-'.concat(o));
  const i = document.querySelector(
    '#sm--quotes__quote-indicator-bar-'.concat(o)
  );
  createPromise(removeIndicatorBarsActive()).finally(
    createPromise(addIndicatorBarActive(i))
  ),
    switchQuote(s, t);
}
function removeIndicatorBarsActive() {
  indicatorBars.forEach(function(e) {
    e.classList.remove('sm--quotes__quote-indicator-bar-active');
  });
}
function addIndicatorBarActive(e) {
  e.classList.add('sm--quotes__quote-indicator-bar-active');
}
function switchQuote(e, t) {
  switch (e.id) {
    case 'sm--quotes__quote-indicator-bar-1':
      slideQuote(1, t);
      break;
    case 'sm--quotes__quote-indicator-bar-2':
      slideQuote(2, t);
      break;
    case 'sm--quotes__quote-indicator-bar-3':
      slideQuote(3, t);
      break;
    case 'sm--quotes__quote-1':
      slideQuote(1, t);
      break;
    case 'sm--quotes__quote-2':
      slideQuote(2, t);
      break;
    case 'sm--quotes__quote-3':
      slideQuote(3, t);
      break;
    default:
      console.log('No event id match');
  }
}
function slideQuote(e, t) {
  const o = document.querySelector('#sm--quotes__quote-'.concat(e));
  createPromise(removeQuoteActive()).finally(
    createPromise(addQuoteActive(o, e, t))
  );
}
function removeQuoteActive() {
  quotes.forEach(function(e) {
    e.classList.remove('sm--quotes__quote-active'),
      e.classList.remove('sm--quotes__quote-active-slide-in-left'),
      e.classList.remove('sm--quotes__quote-active-slide-in-right');
  });
}
function addQuoteActive(e, t, o) {
  e.classList.add('sm--quotes__quote-active'),
    t < o
      ? e.classList.add('sm--quotes__quote-active-slide-in-right')
      : o < t && e.classList.add('sm--quotes__quote-active-slide-in-left');
}
document.addEventListener('scroll', function() {
  isScrolledIntoView(document.querySelector('.sm--quotes')) &&
    (clearInterval(slideshowTimer),
    (slideshowTimer = setInterval(runSlideshow, slideshowTiming)));
}),
  document.addEventListener(
    'click',
    function(e) {
      if (e.target.matches('.sm--quotes__quote-indicator-bar')) {
        clearInterval(slideshowTimer),
          (slideshowTimer = setInterval(runSlideshow, slideshowTiming));
        const t = document.querySelector('.sm--quotes__quote-active').id;
        const o = t.substr(t.length - 1);
        createPromise(removeIndicatorBarsActive()).finally(
          createPromise(addIndicatorBarActive(e.target))
        ),
          switchQuote(e.target, o);
      }
    },
    !1
  );
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener(
  'click',
  function() {
    this.classList.toggle('is-active');
  },
  !1
);
