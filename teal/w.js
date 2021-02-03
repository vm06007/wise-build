{
  
  function writeRefCookie (ref) {
    let domain;
    if (!/^0x[a-fA-F0-9]{40}$/g.test(ref)) return;
    const host = location.hostname;
    if (host && host[0] !== '[' && !Number.parseInt(host[0], 10)) {
      domain = host.substring(host.lastIndexOf('.', host.lastIndexOf('.') - 1) + 1);
    } else domain = host;
    document.cookie = "w=" + ref + ";domain=" + domain + ";path=/;expires=Sat, 28 Mar 2037 00:00:00 GMT;max-age=536479200;";
  }

  function readRefQuery () {
    let start;
    const search = location.search;
    if (search.startsWith("?w=")) {
      start = 3;
    }
    else {
      start = search.indexOf("&w=");
      if (start < 0) return;
      start += 3;
    }
    const end = search.indexOf("&", start);
    const ref = decodeURIComponent(search.substring(start, end >= 0 ? end : undefined));
    if (ref) {
      if (window === window.top) {
        writeRefCookie(ref);
      }
      history.replaceState({}, null, location.pathname + location.hash);
    }
  }

  readRefQuery();
  
}