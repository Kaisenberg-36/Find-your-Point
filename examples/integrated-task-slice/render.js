'use strict';
(() => {
  const {gate0: state, handoff: plan} = window.TASK;
  const root = document.getElementById('briefing');
  const claims = Object.fromEntries(state.claims.map(c => [c.id, c]));
  const active = new Set(state.intent.active_direction);
  const eligible = new Set([...plan.adoptedIds, ...plan.qualifiedIds]);
  const inactive = new Set(['excluded', 'retired', 'rejected']);
  const el = (tag, text, cls) => {
    const n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  };
  // A small eligibility guard for this task, not semantic truth validation.
  function usable(id) {
    const c = claims[id];
    if (!c || !active.has(id) || inactive.has(c.disposition) || plan.excludedIds.includes(id)) throw new Error(`Inactive or missing premise: ${id}`);
    c.premise_ids.forEach(usable);
    return c;
  }
  function prose(item) {
    item.premiseIds.forEach(id => {
      if (!eligible.has(id)) throw new Error(`Unselected editorial premise: ${id}`);
      usable(id);
    });
    const p = el('p', item.text, 'claim');
    p.dataset.framingId = item.id;
    p.dataset.framingType = item.type;
    p.dataset.premiseIds = item.premiseIds.join(' ');
    return p;
  }
  try {
    if (plan.taskId !== state.project_id) throw new Error('Task identity mismatch');
    const summary = plan.framing.find(f => f.status === 'current');
    if (!summary) throw new Error('No reviewed current framing');
    summary.premiseIds.forEach(usable);
    const title = el('h1', summary.text);
    title.dataset.framingId = summary.id; title.dataset.premiseIds = summary.premiseIds.join(' ');
    root.dataset.taskId = state.project_id; root.dataset.sceneId = plan.scene.id;
    state.intent.communication_context.forEach(usable);
    root.append(el('p', '区域管理层汇报 · 合成案例', 'eyebrow'), title,
      el('p', plan.audience.subtitle, 'context'));
    const nav = el('nav'); nav.setAttribute('aria-label','阅读步骤');
    const previous=el('button','上一步');previous.id='previous';
    const next=el('button','下一步');next.id='next';
    const progress=el('span',undefined,'progress');progress.setAttribute('role','status');
    nav.append(previous,progress,next);root.append(nav);
    const frame=el('section'); frame.id='state-frame';root.append(frame);
    let index=0;
    function render(focus=false) {
      const step=plan.states[index], copy=plan.audience.states[step.id];
      frame.dataset.stateId=step.id;
      const h=el('h2',copy.title);h.tabIndex=-1;
      frame.replaceChildren(h);
      const grid=el('div',undefined,'grid');
      copy.groups.forEach(g=>{
        const box=el('section',undefined,'group'+(g.full?' full':''));
        box.append(el('h3',g.title));
        g.lines.forEach(item=>box.append(prose(item)));
        grid.append(box);
      });
      frame.append(grid);
      if(copy.closing){const closing=el('aside',undefined,'boundary');closing.append(prose(copy.closing));frame.append(closing);}
      progress.textContent=`${index+1} / ${plan.states.length}`;
      previous.disabled=index===0;next.disabled=index===plan.states.length-1;
      if(focus)h.focus({preventScroll:true});
    }
    previous.onclick=()=>{if(index>0){index--;render(true)}};
    next.onclick=()=>{if(index<plan.states.length-1){index++;render(true)}};
    render();
  } catch(error) {
    root.replaceChildren(el('p','内容修订尚未完成复核，暂不呈现旧结论。请由编辑者检查当前任务的表述与前提。','notice'));
    console.error(error);
  }
})();
