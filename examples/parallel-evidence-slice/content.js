// Edit values here, save, and reload index.html. IDs are stable references.
// All business material is synthetic; embedded paraphrases require no private file at runtime.
window.BRIEFING = {
  id: 'complaint-evidence-path', language: 'zh-CN',
  copy: {
    context: '客户服务 / 合成案例', title: '投诉增加，哪些线索值得区分',
    lead: '先看投诉现象，再分别理解物流与新产品线索，最后回到整体。这里只解释证据，不选择整改方案。',
    previous: '上一步', next: '下一步', end: '已到本次说明终点',
    orderNote: '阅读先后不表示事件因果；两组线索是并行的候选解释。',
    related: '回到相关现象', closure: '理解停在证据边界'
  },
  statuses: {
    observed: '材料记录', possible: '候选解释 · 尚未证实', boundary: '证据边界'
  },
  sources: {packet: {title:'Gate3_Multi_Angle_Trial_Pack.md · Trial B', kind:'supplied_synthetic_material'}},
  evidence: {
    e1: {sourceId:'packet',locator:'E1 投诉统计',representation:'faithful_paraphrase',excerpt:'5月82件，6月113件，7月119件。延期相关投诉占比31%升至42%；系统使用问题占比24%降至18%；无法联系负责人类数量基本不变。'},
    e2: {sourceId:'packet',locator:'E2 销售反馈',representation:'faithful_paraphrase',excerpt:'6月起新上线两类产品，客户培训材料尚未完全更新。'},
    e3: {sourceId:'packet',locator:'E3 物流记录',representation:'faithful_paraphrase',excerpt:'6月中旬起部分线路更换承运商，平均签收时间波动，没有完整客户级关联数据。'},
    e6: {sourceId:'packet',locator:'E6 系统日志',representation:'faithful_paraphrase',excerpt:'新产品上线后部分账号权限问题增加；通常归入系统使用问题，而非交付延期。'}
  },
  claims: {
    total: {text:'投诉总量：5 月 82 件，6 月 113 件，7 月 119 件。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e1']},
    delivery: {text:'交付延期相关投诉占比：31% 升至 42%。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e1']},
    system: {text:'系统使用问题投诉占比：24% 降至 18%。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e1']},
    contact: {text:'“无法联系到负责人”类投诉数量基本不变。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e1']},
    basis: {text:'总量、类别占比和类别件数不是同一口径；占比下降不能直接读成件数下降。材料没有提供各类逐月完整数据。',provenance:'DERIVED INTERPRETATION',status:'boundary',evidenceIds:['e1'],premiseIds:['total','system']},
    logisticsFact: {text:'6 月中旬起，部分线路更换承运商，平均签收时间出现波动。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e3']},
    logisticsLink: {text:'物流变化是延期投诉的一条待核实解释线索。',provenance:'DERIVED INTERPRETATION',status:'possible',evidenceIds:['e1','e3'],premiseIds:['delivery','logisticsFact']},
    logisticsGap: {text:'缺少完整客户级关联，尚不能把投诉对应到线路变化，也不能据此确认物流是主要原因。',provenance:'DERIVED INTERPRETATION',status:'boundary',evidenceIds:['e1','e3'],premiseIds:['delivery','logisticsFact']},
    productFact: {text:'6 月起新上线两类产品；客户培训材料尚未完全更新。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e2']},
    permissionFact: {text:'新产品上线后，部分账号权限问题增加；通常归入“系统使用问题”，不是“交付延期”。',provenance:'SOURCE FACT',status:'observed',evidenceIds:['e6']},
    productLink: {text:'新产品相关问题为理解系统使用类投诉提供线索，尚未解释总体投诉增长。',provenance:'DERIVED INTERPRETATION',status:'possible',evidenceIds:['e1','e2','e6'],premiseIds:['system','productFact','permissionFact']},
    productGap: {text:'材料未量化这些问题对投诉变化的贡献；不能用这条线索直接解释延期投诉占比上升，也不能断言培训材料未更新造成了投诉。',provenance:'DERIVED INTERPRETATION',status:'boundary',evidenceIds:['e1','e2','e6'],premiseIds:['delivery','system','productFact','permissionFact']},
    limit: {text:'当前不能确认单一原因，也不能声称物流与新产品因素已被证实共同造成投诉增长。两组线索并列，不代表贡献相等或解释已经完整。',provenance:'DERIVED INTERPRETATION',status:'boundary',evidenceIds:['e1','e2','e3','e6'],premiseIds:['total','logisticsGap','productGap']}
  },
  objects: {
    phenomenon: {id:'phenomenon',title:'投诉现象',status:'observed',claimIds:['total','delivery','system','contact','basis'],relatedClaimIds:[]},
    logistics: {id:'logistics',title:'物流线索',status:'possible',claimIds:['logisticsFact','logisticsLink','logisticsGap'],relatedClaimIds:['delivery']},
    product: {id:'product',title:'新产品线索',status:'possible',claimIds:['productFact','permissionFact','productLink','productGap'],relatedClaimIds:['system']}
  },
  narrative: {
    scene:{id:'scene-complaint-explanation',job:'Understand observed patterns and parallel possible explanations; no causal verdict or action request.'},
    states:[
      {id:'state-observed',title:'先区分总量与类别变化',role:'focus',dependsOn:[],objectIds:['phenomenon'],returnAnchors:[]},
      {id:'state-logistics',title:'物流变化能解释到哪一步',role:'focus',dependsOn:['state-observed'],objectIds:['logistics'],returnAnchors:['delivery']},
      {id:'state-product',title:'新产品线索对应哪类问题',role:'focus',dependsOn:['state-observed'],objectIds:['product'],returnAnchors:['system']},
      {id:'state-synthesis',title:'把现象与候选解释放回整体',role:'synthesis',dependsOn:['state-observed','state-logistics','state-product'],objectIds:['phenomenon','logistics','product'],returnAnchors:['total','delivery','system','logisticsGap','productGap'],closingClaimIds:['limit']}
    ]
  },
  semantics: {
    supportedMeaning:'Complaint counts and category patterns are observed; logistics and product clues have different relevant categories and unresolved links.',
    unsupportedReadings:['Neither reading order nor adjacency establishes causality.','Two clues do not prove joint causation or equal contribution.','Category share decline is not automatically count decline.','Training or measures are not demonstrated improvements.'],
    attention:{primary:'Each clue and its evidential limit',context:'Relevant complaint category',suppressed:'Unsupported supervisor verdict and training activity',returnAnchors:['phenomenon','logistics','product']},
    coPresence:'At synthesis all three objects, their original claim/status keys and necessary gaps remain directly available without revisiting earlier States.',
    interactionNeed:'Previous/next attention-state switching in a stable Scene; no animation or causal linking.',
    endpoint:'Understanding only.',
    upstreamRepair:'Narrow the packet desired outcome from proven multiple-factor causation to possible explanations; do not upgrade evidence.'
  }
};
