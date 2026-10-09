'use strict';
(() => {
  const d = window.BRIEFING;
  const root = document.getElementById('briefing');
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  let index = 0;
  const header = el('header');
  header.append(el('p',d.copy.context,'eyebrow'),el('h1',d.copy.title),el('p',d.copy.lead,'lead'));
  const scene = el('article'); scene.dataset.sceneId = d.narrative.scene.id;
  const nav = el('nav'); nav.setAttribute('aria-label','阅读步骤');
  const previous = el('button', d.copy.previous); previous.type='button'; previous.id='previous';
  const next = el('button', d.copy.next); next.type='button'; next.id='next';
  const progress=el('p',undefined,'progress'); progress.setAttribute('role','status');
  const frame=el('section'); frame.id='state-frame'; frame.setAttribute('aria-labelledby','state-title');
  const heading=el('h2'); heading.id='state-title'; heading.tabIndex=-1;
  const note=el('p',d.copy.orderNote,'order-note');
  const content=el('div'); content.id='state-content';
  const ending=el('div',undefined,'ending');
  frame.append(heading,note,content,ending);nav.append(previous,progress,next);scene.append(nav,frame);root.append(header,scene);
  root.dataset.artifactId=d.id;document.documentElement.lang=d.language;document.title=d.copy.title;
  function claim(id) {
    const c=d.claims[id]; if(!c) throw new Error(`Missing claim ${id}`);
    const node=el('p',undefined,`claim ${c.status}`);node.dataset.claimId=id;node.dataset.claimStatus=c.status;
    node.append(el('span',d.statuses[c.status],'status-label'),el('span',c.text,'claim-text'));return node;
  }
  function object(id) {
    const o=d.objects[id];if(!o) throw new Error(`Missing object ${id}`);
    const block=el('section',undefined,'evidence-object');block.dataset.objectId=o.id;
    block.append(el('h3',o.title),el('p',d.statuses[o.status],'object-status'));
    if(o.relatedClaimIds.length){const anchor=el('div',undefined,'return-anchor');anchor.append(el('p',d.copy.related,'anchor-label'));o.relatedClaimIds.forEach(id=>anchor.append(claim(id)));block.append(anchor);}
    o.claimIds.forEach(id=>block.append(claim(id)));return block;
  }
  function render(moveFocus=false) {
    const state=d.narrative.states[index];frame.dataset.stateId=state.id;frame.dataset.role=state.role;
    heading.textContent=state.title;progress.textContent=`${index+1} / ${d.narrative.states.length}`;
    previous.disabled=index===0;next.disabled=index===d.narrative.states.length-1;
    next.textContent=next.disabled?d.copy.end:d.copy.next;
    content.replaceChildren(...state.objectIds.map(object));ending.replaceChildren();
    if(state.closingClaimIds){ending.append(el('h3',d.copy.closure));state.closingClaimIds.forEach(id=>ending.append(claim(id)));}
    if(moveFocus) heading.focus({preventScroll:true});
  }
  previous.addEventListener('click',()=>{if(index>0){index--;render(true);}});
  next.addEventListener('click',()=>{if(index<d.narrative.states.length-1){index++;render(true);}});
  window.renderBriefing=()=>render();
  render();
})();
