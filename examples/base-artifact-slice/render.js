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
  const claim = (id, className) => {
    if (!d.claims[id]) throw new Error(`Missing claim: ${id}`);
    const node = el('p', d.claims[id].text, className);
    node.dataset.claimId = id;
    return node;
  };
  const objectHeading = (object) => {
    const node = el('div', undefined, 'object-heading');
    node.dataset.objectId = object.id;
    node.append(el('span', object.label, 'object-code'), el('strong', object.name), claim(object.statusClaim, 'evidence-status'));
    return node;
  };
  function render() {
    root.replaceChildren();
    document.documentElement.lang = d.language;
    document.title = d.copy.title;
    root.dataset.artifactId = d.id;
    const header = el('header');
    header.append(el('p', d.copy.context, 'eyebrow'), el('h1', d.copy.title), el('p', d.copy.lead, 'lead'));
    const scene = el('article');
    scene.dataset.sceneId = d.narrative.scene.id;
    const focus = el('section', undefined, 'focus');
    focus.dataset.stateId = d.narrative.states[0].id;
    const focusTitle = el('h2', d.copy.focusTitle);
    focusTitle.id = 'focus-title';
    focus.setAttribute('aria-labelledby', focusTitle.id);
    focus.append(focusTitle, claim('baseline','basis'));
    const identities = el('div', undefined, 'identities');
    d.objects.forEach(o => identities.append(objectHeading(o)));
    focus.append(identities);
    const synthesis = el('section', undefined, 'synthesis');
    synthesis.dataset.stateId = d.narrative.states[1].id;
    const synthesisTitle = el('h2', d.copy.synthesisTitle);
    synthesisTitle.id = 'synthesis-title';
    synthesis.setAttribute('aria-labelledby', synthesisTitle.id);
    synthesis.append(synthesisTitle);
    const region = el('div', undefined, 'comparison-region');
    const table = el('table');
    table.append(el('caption', d.copy.caption));
    const head = el('thead');
    const headRow = el('tr');
    const corner = el('th', d.copy.rowHeading); corner.scope = 'col';
    headRow.append(corner);
    d.objects.forEach(o => {
      const th = el('th'); th.scope = 'col'; th.append(objectHeading(o)); headRow.append(th);
    });
    head.append(headRow); table.append(head);
    const body = el('tbody');
    d.dimensions.forEach(dimension => {
      const row = el('tr'); row.dataset.dimensionId = dimension.id;
      const heading = el('th'); heading.scope = 'row';
      heading.append(el('strong', dimension.label),el('p', dimension.question,'dimension-question'));
      row.append(heading);
      d.objects.forEach(o => {
        const cell = el('td'); cell.dataset.objectId = o.id;
        const repeat = objectHeading(o); repeat.classList.add('cell-identity');
        cell.append(repeat);
        o.fields[dimension.id].forEach(id => cell.append(claim(id, id === 'cLimit' ? 'qualification' : 'cell-claim')));
        row.append(cell);
      });
      body.append(row);
    });
    table.append(body); region.append(table); synthesis.append(region);
    const conclusion = el('aside',undefined,'conclusion');
    conclusion.append(el('h3',d.copy.closingTitle),el('p',d.copy.closing),claim('baseline','basis-return'));
    synthesis.append(conclusion); scene.append(focus,synthesis); root.append(header,scene);
  }
  // Single explicit renderer entrypoint for source editing and future handoff; no UI editor.
  window.renderBriefing = render;
  render();
})();
