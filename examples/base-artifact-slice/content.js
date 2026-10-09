// Editable source. Keep IDs stable; edit values here, save, then reload index.html.
// Synthetic excerpts preserve source meaning; this is not a production schema.
window.BRIEFING = {
  id: 'night-service-comparison',
  language: 'zh-CN',
  copy: {
    context: '客服运营 / 合成案例',
    title: '夜间值守安排，差异在哪里',
    lead: '先区分已经运行的安排与尚未验证的提案，再理解覆盖、人员负担和响应机制的差异。',
    focusTitle: '比较之前，先明确证据状态',
    synthesisTitle: '按同一问题比较，不预设推荐',
    caption: 'A 为现行安排；B、C 为提案。顺序仅用于识别，不代表优劣。',
    rowHeading: '比较问题',
    closingTitle: '现在能理解差异，还不能判断谁更快',
    closing: '已有安排的记录并不完整，两个提案也没有实际运行结果。上述配置说明不能替代效果验证或成本测算。'
  },
  sources: {
    packet: { title: 'Gate4_Multi_Angle_Trial_Pack.md · Trial C', kind: 'supplied_synthetic_material' }
  },
  evidence: {
    baseline: { sourceId: 'packet', representation: 'faithful_paraphrase', locator: 'Evidence Status / Current Baseline', excerpt: '当前区域自治模式已经运行。最近3个月有47个夜间问题，其中29个有首次响应时间记录。' },
    a: { sourceId: 'packet', representation: 'faithful_paraphrase', locator: 'Evidence Status / Option A', excerpt: '继续区域自治，已存在的 current-state arrangement；没有新增成本估算。' },
    b: { sourceId: 'packet', representation: 'faithful_paraphrase', locator: 'Evidence Status / Option B', excerpt: '总部统一夜班。Proposal。每晚2人值班；估计需6–8人轮换。没有真实运行数据；补贴成本未测算。' },
    c: { sourceId: 'packet', representation: 'faithful_paraphrase', locator: 'Evidence Status / Option C', excerpt: '区域主责＋总部二线。Proposal。超过30分钟未解决或跨区域问题升级总部。没有真实运行数据；需要建立统一升级记录。' }
  },
  claims: {
    baseline: { text: '当前区域自治模式最近 3 个月记录了 47 个夜间问题，其中 29 个有首次响应时间记录。', provenance: 'SOURCE FACT', status: 'reported_in_synthetic_source', evidenceIds: ['baseline'], scope: 'Current baseline; last three months', uncertainty: 'Incomplete first-response records; not an effectiveness comparison.' },
    aStatus: { text: '现行安排 · 已运行', provenance: 'SOURCE FACT', status: 'reported_current', evidenceIds: ['a'] },
    bStatus: { text: '提案 · 未运行验证', provenance: 'SOURCE FACT', status: 'proposed', evidenceIds: ['b'] },
    cStatus: { text: '提案 · 未运行验证', provenance: 'SOURCE FACT', status: 'proposed', evidenceIds: ['c'] },
    aCoverage: { text: '延续区域自治。', provenance: 'SOURCE FACT', status: 'reported_current', evidenceIds: ['a'] },
    bCoverage: { text: '拟由总部统一安排夜班。', provenance: 'SOURCE FACT', status: 'proposed', evidenceIds: ['b'] },
    cCoverage: { text: '拟由区域承担主责，总部作为二线。', provenance: 'SOURCE FACT', status: 'proposed', evidenceIds: ['c'] },
    aStaff: { text: '材料未提供新增人员配置或新增成本估算。', provenance: 'DERIVED INTERPRETATION', status: 'unknown_in_material', evidenceIds: ['a'], uncertainty: 'No estimate is not zero cost.' },
    bStaff: { text: '拟每晚 2 人值班；初步估计需 6–8 人轮换。补贴成本未测算。', provenance: 'SOURCE FACT', status: 'proposed_estimate', evidenceIds: ['b'] },
    cStaff: { text: '需建立统一升级记录；人员配置与成本尚无材料支持。', provenance: 'DERIVED INTERPRETATION', status: 'proposed_with_unknowns', evidenceIds: ['c'] },
    aResponse: { text: '已运行，但首次响应记录仅覆盖部分问题；材料不足以判断总体速度。', provenance: 'DERIVED INTERPRETATION', status: 'limited_observation', evidenceIds: ['a','baseline'] },
    bResponse: { text: '拟通过总部夜班响应；没有真实运行数据，不能据此认定响应更快。', provenance: 'DERIVED INTERPRETATION', status: 'unverified_outcome', evidenceIds: ['b'] },
    cResponse: { text: '拟在超过 30 分钟未解决，或出现跨区域问题时升级总部。', provenance: 'SOURCE FACT', status: 'proposed', evidenceIds: ['c'] },
    cLimit: { text: '30 分钟是拟议升级条件，不是首次响应承诺，也不是解决时限保证。', provenance: 'DERIVED INTERPRETATION', status: 'bounded_interpretation', evidenceIds: ['c'] }
  },
  objects: [
    { id: 'option-a', label: 'A', name: '继续区域自治', statusClaim: 'aStatus', fields: {coverage:['aCoverage'], staffing:['aStaff'], response:['aResponse']} },
    { id: 'option-b', label: 'B', name: '总部统一夜班', statusClaim: 'bStatus', fields: {coverage:['bCoverage'], staffing:['bStaff'], response:['bResponse']} },
    { id: 'option-c', label: 'C', name: '区域主责＋总部二线', statusClaim: 'cStatus', fields: {coverage:['cCoverage'], staffing:['cStaff'], response:['cResponse','cLimit']} }
  ],
  dimensions: [
    { id: 'coverage', label: '覆盖与责任', question: '由谁承担夜间服务？' },
    { id: 'staffing', label: '人员与投入', question: '明确了什么，缺少什么？' },
    { id: 'response', label: '响应与升级', question: '规则说明了什么，效果验证到哪里？' }
  ],
  narrative: {
    scene: { id: 'scene-options', job: 'Understand arrangement trade-offs without recommending an option.' },
    states: [
      { id: 'state-evidence-basis', role: 'focus', job: 'Distinguish current from proposed and establish record coverage.', dependsOn: [], objectIds: ['option-a','option-b','option-c'], claimIds:['baseline'] },
      { id: 'state-aligned-comparison', role: 'synthesis', job: 'Compare arrangements with status and limitations available.', dependsOn: ['state-evidence-basis'], objectIds: ['option-a','option-b','option-c'], returnAnchors:['baseline','aStatus','bStatus','cStatus'] }
    ]
  },
  semantics: {
    supportedMeaning: 'The options differ in responsibility, proposed staffing and escalation; evidence maturity differs.',
    unsupportedReadings: ['No default recommendation or positional ranking.', 'No equal validation of current and proposed arrangements.', 'Unknown cost is not zero.', 'Proposed escalation is not response SLA.', 'No measured speed or cost advantage.'],
    attention: { primary:'Arrangement differences with status attached', context:'Evidence coverage and missing outcomes', suppressed:'No irrelevant anecdotes', returnAnchors:['baseline','aStatus','bStatus','cStatus'] },
    coPresence: 'At synthesis, each compared dimension has all three objects and their status available together; status must not rely on earlier recall.',
    interactionNeed: 'None. Static comparison and ordinary document scrolling suffice.',
    endpoint: 'Understanding and later decision readiness; no recommendation.'
  }
};
