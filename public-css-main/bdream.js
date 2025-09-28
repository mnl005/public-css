
(() => {
  const cssId = 'rg-snap';
  if (document.getElementById(cssId)) return;
  const style = document.createElement('style');
  style.id = cssId;
  style.textContent = `
[id^="ca-rg"]{display:flex;overflow-x:auto;gap:0;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}
[id^="ca-rg"] > .bubble-element.group-item{flex:0 0 auto;scroll-snap-align:start;scroll-snap-stop:always}
[id^="ca-rg"]::-webkit-scrollbar{display:none}
`;
  document.head.appendChild(style);
})();

