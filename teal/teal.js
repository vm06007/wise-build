{
  
  let counters = [];
  let isAppendix = false;
  const ToC = [];
  const headerIds = [];
  
  document.querySelectorAll('h1, h2, h3, h4').forEach(function (x) {
    const n = +(x.tagName.substr(1, 1));
    counters = counters.slice(0, n);
    if (counters.length < n) {
      counters = counters.concat(new Array(n - counters.length).fill(1));
    }
    else {
      counters[n - 1]++;
    }
    
    if (counters.length === 1) {
      isAppendix = (x.innerText === 'Appendices');
    }
    
    const section = counters.join('-');
    const id = 'sec-' + section;
    x.id = id;
    headerIds.push({
      id: id,
      title: x.innerText,
    });
    
    const isAppendixEntry = (isAppendix && counters.length === 2);
    const sectionHtml = isAppendixEntry
      ? 'Appendix ' + String.fromCharCode(64 + counters[1])
      : counters.join('.');
    
    if (!isAppendixEntry) {
      ToC.push({
        counters: counters,
        id: id,
        section: section,
        sectionHtml: sectionHtml,
        title: x.innerText,
      });
    }
    
    if (x.innerText === 'References') {
      x.innerHTML = '<a href=#' + x.id + '></a>' + x.innerHTML;
    }
    else {
      x.innerHTML = '<a href=#' + x.id + '>' + sectionHtml + '</a>&nbsp;&nbsp;' + x.innerHTML;
    }
  });
  
  const toc = document.querySelector('toc');
  ToC.forEach(function (x) {
    const e = document.createElement('toc-entry');
    e.classList.add('headroom-' + x.counters.length);
    const e1 = document.createElement('toc-n');
    e1.innerText = x.sectionHtml;
    const e2 = document.createElement('toc-title');
    e2.innerHTML = '<a href=#sec-' + x.counters.join('-') + '>' + x.title + '</a>';
    if (x.counters.length === 1) {
      e2.classList.add('bold');
    }
    else if (x.counters.length === 2) {
    }
    e.appendChild(e1);
    e.appendChild(e2);
    toc.appendChild(e);
  });
  
  document.querySelectorAll('ss').forEach(function (ss) {
    const sectionName = (ss.getAttribute('name') || ss.innerText).toLowerCase();
  
    const header = headerIds.find(h => h.title.toLowerCase() === sectionName);
    
    if (!header) {
      console.warn('No section found for \'' + sectionName + '\'');
      ss.parentNode.replaceChild(new Text(ss.innerHTML), ss);
      return;
    }
  
    const href = '#' + header.id;
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.innerHTML = ss.innerHTML;
    
    ss.parentNode.replaceChild(a, ss);
  });
  
}