// English audience layer for the audited synthetic task.
// The original evidence, IDs, eligibility and Chinese baseline remain unchanged.
// Review translated framing against its premiseIds whenever evidence changes.
(() => {
  const plan = window.TASK.handoff;
  const translations = {
  "counts": "May records 82 complaints. June’s 113 tickets and July’s 119 also include inquiries; complaint-only counts are not separated.",
  "delivery-share": "Delivery-delay complaints: 31% → 42% of complaints in the category table.",
  "system-share": "System-use complaints: 24% → 18% of complaints in the category table.",
  "contact-count": "Complaints about being unable to reach the responsible person remained broadly unchanged in number.",
  "share-basis": "These shares come from a separate, complaint-only table with a consistent counting basis. The source does not specify the exact start/end months or complete monthly category counts. A change in share is not a change in count.",
  "logistics-context": "Delivery-delay share rose from 31% to 42%. Separately, some routes changed carriers in mid-June, and average receipt times fluctuated.",
  "logistics-link": "Customer-level records linking specific complaints to the affected routes are missing. That link still needs checking.",
  "product-context": "Two product types launched in June before customer training materials were fully updated. Some account-permission issues increased after launch; these generally fall under system use, rather than delivery delays.",
  "product-link": "The complaint table reports a lower system-use share: 24% → 18%. The product records describe usage problems, but do not establish a change in complaint counts.",
  "summary-counts": "May’s 82 records are complaints only; June’s 113 and July’s 119 include inquiries. They do not establish complaint growth. The category shares come from a separate, consistently defined complaint-only table.",
  "summary-logistics": "Delivery-delay share: 31% → 42%. Some routes changed carriers and average receipt times fluctuated, but customer-level links to complaints are missing.",
  "summary-product": "System-use share: 24% → 18%, while some account-permission issues increased. Share and count are different measures; permission issues are also distinct from delivery delays.",
  "summary-close": "The logistics and product records point to different operational issues. Their respective effects remain unresolved; the records do not establish either a single cause or a combined explanation."
};
  plan.framing.find(f => f.status === 'current').text = 'Customer complaints: what changed, and what explains it?';
  plan.audience.subtitle = 'Regional management briefing · May–July service records';
  const titles = {observed: ['The category mix changed. The totals are not comparable.', ['Ticket totals: three months, two counting bases', 'Complaint-only table: a different category mix']], clues: ['Delivery and product-use records describe different issues.', ['Delivery: receipt times fluctuated', 'Product use: more permission issues']], synthesis: ['The mix shifted. Overall growth and causes remain unresolved.', ['Establish the counting basis first', 'Delivery-delay share rose', 'System-use share fell']]};
  for (const [id, state] of Object.entries(plan.audience.states)) {
    state.title = titles[id][0];
    state.groups.forEach((g, i) => {g.title = titles[id][1][i]; g.lines.forEach(line => {line.text = translations[line.id];});});
    if (state.closing) state.closing.text = translations[state.closing.id];
    plan.states.find(s => s.id === id).title = state.title;
  }
})();
