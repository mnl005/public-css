<script>
if(!window.__passive_patch){
  window.__passive_patch=1;
  const T=new Set(['touchstart','touchmove','wheel','mousewheel']);
  const _add=EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener=function(type,fn,opts){
    if(T.has(type)){
      if(opts==null) opts={passive:true};
      else if(typeof opts==='boolean') opts={capture:opts,passive:true};
      else if(opts.passive==null) opts={...opts,passive:true};
    }
    return _add.call(this,type,fn,opts);
  };
}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="format-detection" content="telephone=no, email=no, address=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mnl005/public-css@main/public-css-main/bdream.css">
<script src="https://cdn.jsdelivr.net/gh/mnl005/public-css@main/public-css-main/bdream.js"></script>  

# curl -s https://purge.jsdelivr.net/gh/mnl005/public-css@main/public-css-main/bdream.css
# curl -I https://cdn.jsdelivr.net/gh/mnl005/public-css@main/public-css-main/bdream.css 
