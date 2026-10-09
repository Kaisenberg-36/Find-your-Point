window.TASK = {
  "gate0": {
    "schema_version": "0.3.0",
    "project_id": "task-complaints-01",
    "gate": 0,
    "readiness": "PASS",
    "intent": {
      "communication_context": [
        "context"
      ],
      "audience_model": [
        "audience"
      ],
      "audience_concerns": [
        "concerns"
      ],
      "user_stated_goal": [
        "task-permission"
      ],
      "inferred_communication_goal": [],
      "desired_audience_shift": [
        "shift"
      ],
      "value_hypotheses": [],
      "active_direction": [
        "task-permission",
        "context",
        "audience",
        "concerns",
        "shift",
        "delivery",
        "system",
        "contact",
        "logistics",
        "product",
        "permissions",
        "logistics-possible",
        "product-possible",
        "limit",
        "total-r2",
        "category-basis",
        "trend-limit",
        "basis-r2"
      ],
      "frozen_decisions": []
    },
    "sources": [
      {
        "id": "s-user",
        "title": "Synthetic reproduction task context",
        "uri": "task-context.md",
        "revision": "synthetic-context-alpha-1",
        "format": "conversation",
        "kind": "user_message",
        "authority": "explicit_user_decision",
        "authority_basis": "Explicit task directions in the synthetic reproduction brief; not an actual customer transcript.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Only the four exact authorization excerpts needed here are retained.",
        "blocking_gap": false
      },
      {
        "id": "s-E1",
        "title": "投诉统计 · synthetic",
        "uri": "source-packet.md#E1",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "older_material",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E2",
        "title": "销售反馈 · synthetic",
        "uri": "source-packet.md#E2",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E3",
        "title": "物流记录 · synthetic",
        "uri": "source-packet.md#E3",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E4",
        "title": "客服主管判断 · synthetic",
        "uri": "source-packet.md#E4",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E5",
        "title": "培训记录 · synthetic",
        "uri": "source-packet.md#E5",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E6",
        "title": "系统日志 · synthetic",
        "uri": "source-packet.md#E6",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-goal",
        "title": "Historical Desired Audience Shift · synthetic",
        "uri": "source-packet.md#goal",
        "revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "format": "markdown",
        "kind": "material",
        "authority": "verified_source",
        "authority_basis": "Inspected synthetic source; authoritative only for its own reported observations, not causal attribution or current task permission.",
        "usage": "reference_only",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete relevant excerpt inspected; no external verification claimed.",
        "blocking_gap": false
      },
      {
        "id": "s-E1-r2",
        "title": "E1-r2 synthetic counting-basis correction",
        "uri": "source-revision.md",
        "revision": "2f66b87d8bd59bc660b5e7e3f6472273e4220aa493e3b63099197db1d1085dc6",
        "format": "markdown",
        "kind": "material",
        "authority": "authoritative_current_material",
        "authority_basis": "Designated statistics-owner correction inside this explicitly synthetic source update; precedence only for E1 counting definitions.",
        "usage": "primary",
        "status": "inspected",
        "relevant": true,
        "coverage_note": "Complete controlled correction read after initial Artifact inspection.",
        "blocking_gap": false
      }
    ],
    "evidence": [
      {
        "id": "e-authorization",
        "source_id": "s-user",
        "source_revision": "synthetic-context-alpha-1",
        "locator": "task-context.md / retained task-authorization excerpts",
        "excerpt": "设置一个清楚、受控的 Communication Context。",
        "representation": "quote"
      },
      {
        "id": "e-endpoint",
        "source_id": "s-user",
        "source_revision": "synthetic-context-alpha-1",
        "locator": "task-context.md / retained task-authorization excerpts",
        "excerpt": "understanding-only endpoint。",
        "representation": "quote"
      },
      {
        "id": "e-scope",
        "source_id": "s-user",
        "source_revision": "synthetic-context-alpha-1",
        "locator": "task-context.md / retained task-authorization excerpts",
        "excerpt": "不要默认必须提出建议、决策或完成业务 Transformation。",
        "representation": "quote"
      },
      {
        "id": "e-autonomy",
        "source_id": "s-user",
        "source_revision": "synthetic-context-alpha-1",
        "locator": "task-context.md / retained task-authorization excerpts",
        "excerpt": "一般材料组织和表达选择由 Agent 自主完成。",
        "representation": "quote"
      },
      {
        "id": "e-E1",
        "source_id": "s-E1",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 投诉统计",
        "excerpt": "- 5 月：82 件；\n- 6 月：113 件；\n- 7 月：119 件。\n其中：\n- 交付延期相关投诉占比从 31% 升到 42%；\n- 系统使用问题投诉占比从 24% 降到 18%；\n- “无法联系到负责人”类投诉数量基本不变。",
        "representation": "quote"
      },
      {
        "id": "e-E2",
        "source_id": "s-E2",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 销售反馈",
        "excerpt": "6 月起新上线两类产品，客户培训材料尚未完全更新。",
        "representation": "quote"
      },
      {
        "id": "e-E3",
        "source_id": "s-E3",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 物流记录",
        "excerpt": "6 月中旬起部分线路更换承运商，平均签收时间出现波动，但没有完整客户级关联数据。",
        "representation": "quote"
      },
      {
        "id": "e-E4",
        "source_id": "s-E4",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 客服主管判断",
        "excerpt": "> “主要就是物流换了承运商以后变慢了。”",
        "representation": "quote"
      },
      {
        "id": "e-E5",
        "source_id": "s-E5",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 培训记录",
        "excerpt": "7 月增加了两次新产品培训，但没有投诉改善结果。",
        "representation": "quote"
      },
      {
        "id": "e-E6",
        "source_id": "s-E6",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / 系统日志",
        "excerpt": "新产品上线后，部分账号权限问题增加；但权限问题通常被归入“系统使用问题”，不是“交付延期”。",
        "representation": "quote"
      },
      {
        "id": "e-goal",
        "source_id": "s-goal",
        "source_revision": "743820eb9bfa5a9d7e169d7491f9d04823712d8006c256a5fcde9f9297314545",
        "locator": "source-packet.md / Historical Desired Audience Shift",
        "excerpt": "投诉上升是多个因素共同作用的结果，目前可以分成不同类型，但证据不足以归因于单一原因。",
        "representation": "quote"
      },
      {
        "id": "e-E1-r2",
        "source_id": "s-E1-r2",
        "source_revision": "2f66b87d8bd59bc660b5e7e3f6472273e4220aa493e3b63099197db1d1085dc6",
        "locator": "source-revision.md / 统计负责人 · 口径复核补记",
        "excerpt": "原 E1 总量表的标题不准确：5 月的 82 件为投诉工单；6 月的 113 件、\n7 月的 119 件包含咨询工单，当前尚未分离出这两个月的投诉工单数量。\n\n类别占比来自另一份只统计投诉工单的分类表，前后口径一致，31% 至 42%、\n24% 至 18% 的类别占比及“无法联系到负责人”类数量基本不变的记录不变。\n完整逐月类别件数仍未提供。本次复核仅更正总量表口径，不补充任何因果证据。",
        "representation": "quote"
      }
    ],
    "claims": [
      {
        "id": "task-permission",
        "text": "本轮允许由 Agent 设置受控背景，以 understanding-only 为终点，不默认提出建议或业务转型。",
        "type": "USER ASSERTION",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [
          "e-authorization",
          "e-endpoint",
          "e-scope",
          "e-autonomy"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "context",
        "text": "本次合成任务：区域客服向管理层解释 5—7 月投诉现象与归因边界，不选择整改方案。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "task-permission"
        ],
        "reasoning": "In-scope task setup under explicit delegated authority; no new business recommendation.",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "audience",
        "text": "核心听众设为区域管理层；这是本次受控任务的背景假设。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "task-permission"
        ],
        "reasoning": "In-scope task setup under explicit delegated authority; no new business recommendation.",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "concerns",
        "text": "听众需要区分记录的变化、解释线索和不能确认的因果。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "task-permission"
        ],
        "reasoning": "In-scope task setup under explicit delegated authority; no new business recommendation.",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "shift",
        "text": "从可能直接归因，转为区分观察与候选解释；未声称真实听众已经持有某种信念。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "task-permission"
        ],
        "reasoning": "In-scope task setup under explicit delegated authority; no new business recommendation.",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "total-r1",
        "text": "投诉统计：5 月 82 件，6 月 113 件，7 月 119 件。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Complaint count as labeled by E1; comparability not independently verified",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "delivery",
        "text": "交付延期相关投诉占比：31% 升至 42%。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Share of complaint category, percent; start/end months not explicitly identified",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "system",
        "text": "系统使用问题投诉占比：24% 降至 18%。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Share of complaint category, percent; start/end months not explicitly identified",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "contact",
        "text": "“无法联系到负责人”类投诉数量基本不变。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Count of cannot-contact complaints",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "logistics",
        "text": "6 月中旬部分线路更换承运商；平均签收时间波动，缺少完整客户级关联数据。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Carrier change and fluctuation in mean receipt time",
          "period": "From mid-June",
          "population": "Some routes only",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E3"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "product",
        "text": "6 月起新上线两类产品，客户培训材料尚未完全更新。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E2"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "permissions",
        "text": "新产品上线后部分账号权限问题增加；通常归入系统使用问题，而非交付延期。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E6"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic material only; no external verification or generalization.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "supervisor",
        "text": "主管判断：“主要就是物流换了承运商以后变慢了。”",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E4"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Reports a person’s judgment, not proof of main cause. Excluded from the current audience path.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "training",
        "text": "7 月增加两次新产品培训，但没有投诉改善结果。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E5"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Activity is outside this explanation-only slice; cannot imply demonstrated improvement.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "packet-goal",
        "text": "历史材料预设：投诉上升是多个因素共同作用的结果。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-goal"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Reference-only goal wording cannot authorize a current causal conclusion.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "growth-r1",
        "text": "按当前 E1 的投诉统计口径，记录数量逐月增加。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "total-r1"
        ],
        "reasoning": "82 < 113 < 119; assumes E1 uses a comparable complaint definition.",
        "limitations": "Comparable counting basis is assumed from the original label, not independently verified.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "logistics-possible",
        "text": "物流变化是延期类投诉的候选解释；尚不能确认为主要原因。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "delivery",
          "logistics"
        ],
        "reasoning": "Category relevance exists, but individual complaint-to-route links are absent.",
        "limitations": "No causal attribution, ranking or contribution measurement.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "product-possible",
        "text": "产品与权限记录提供系统使用类线索；不能据此解释延期占比上升或断言培训材料未更新造成投诉。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "system",
          "product",
          "permissions"
        ],
        "reasoning": "Records concern different categories; co-occurrence does not prove attribution.",
        "limitations": "System share decline does not prove count decline; no contribution estimate.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "limit",
        "text": "两组线索尚未建立因果归属；不能确认单一原因或共同因果，也不能推断贡献相等、解释完整。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "logistics-possible",
          "product-possible"
        ],
        "reasoning": "Neither route has customer-level causal or contribution evidence.",
        "limitations": "Does not mean either factor is disproven or that no other explanation exists.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "basis",
        "text": "总量、类别占比与类别件数不是同一口径；占比下降不能直接读成件数下降。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "excluded",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": null,
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "total-r1",
          "system"
        ],
        "reasoning": "Denominators and category counts are not supplied for every month.",
        "limitations": "No derived category counts are presented.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "total-r2",
        "text": "口径复核：5 月 82 件为投诉工单；6 月 113 件、7 月 119 件包含咨询工单，尚未分离投诉数量。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "May complaint tickets; June/July mixed complaint and inquiry tickets",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1-r2"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic correction only; no causal evidence or complete category counts.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "category-basis",
        "text": "类别占比单独统计投诉工单，口径一致；完整逐月类别件数仍未提供。",
        "type": "SOURCE FACT",
        "important": true,
        "disposition": "supported",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Category shares on a separate complaint-only basis",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "actual"
        },
        "evidence_ids": [
          "e-E1-r2"
        ],
        "premise_ids": [],
        "reasoning": "",
        "limitations": "Synthetic correction only; no causal evidence or complete category counts.",
        "assumption": false,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "trend-limit",
        "text": "总量口径不一致，当前不能据此判断投诉是否增加。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "No comparable complaint count trend established",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "total-r2"
        ],
        "reasoning": "Apply the corrected counting basis; do not compare unlike populations.",
        "limitations": "Synthetic correction only; no causal evidence or complete category counts.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      },
      {
        "id": "basis-r2",
        "text": "类别占比仍可描述类别结构，但不能补出可比投诉总量；占比下降也不等于件数下降。",
        "type": "DERIVED INTERPRETATION",
        "important": true,
        "disposition": "proposed",
        "scope": {
          "subject": "Synthetic regional customer-service task",
          "metric": "Share versus count; no inferred category counts",
          "period": "May–July, unspecified year",
          "population": "One synthetic region; no group-wide inference",
          "status": "not_applicable"
        },
        "evidence_ids": [],
        "premise_ids": [
          "category-basis",
          "total-r2",
          "system"
        ],
        "reasoning": "Apply the corrected counting basis; do not compare unlike populations.",
        "limitations": "Synthetic correction only; no causal evidence or complete category counts.",
        "assumption": true,
        "requires_user_acceptance": false,
        "is_quotation": false
      }
    ],
    "decisions": [],
    "conflicts": [
      {
        "id": "conflict-total-basis",
        "claim_ids": [
          "total-r1",
          "total-r2"
        ],
        "description": "Original total label conflicts with later counting-basis correction.",
        "material": true,
        "consequence": "Changes whether the growth headline is warranted.",
        "status": "resolved",
        "resolution": {
          "method": "authority",
          "rationale": "Scoped statistics-owner correction supersedes the old total label, not the category records or causal limits.",
          "basis_ids": [
            "s-E1-r2",
            "e-E1-r2"
          ],
          "retained_claim_ids": [
            "total-r2"
          ]
        }
      }
    ],
    "unknowns": [],
    "question_rounds": [],
    "audits": {
      "requirement": {
        "result": "pass",
        "note": "Same regional management task and understanding-only endpoint; new synthetic correction inspected.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      },
      "evidence_consistency": {
        "result": "pass",
        "note": "Original E1 preserved; corrected total populations differ. Category basis explicitly remains comparable.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      },
      "unsupported_claim": {
        "result": "pass",
        "note": "Growth conclusion withdrawn; no replacement trend, category counts, training benefit or cause invented.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      },
      "authority_conflict": {
        "result": "pass",
        "note": "Scoped statistics-owner correction resolves total-label conflict; old source and claims preserved as excluded/history.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      },
      "internal_consistency": {
        "result": "pass",
        "note": "Intent remains operative; current claims exclude old totals/growth interpretation and all previously excluded content.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      },
      "completion": {
        "result": "pass",
        "note": "Gate 0 foundation revalidated after correction, with no blocking unknown; downstream review is separately recorded in handoff.",
        "state_fingerprint": "503633d23a935a36e022b63fcd81dfce6e45feb1c3f1a3b897845895768309ed"
      }
    }
  },
  "handoff": {
    "taskId": "task-complaints-01",
    "revision": "r2-audited",
    "contextIds": [
      "context",
      "audience",
      "concerns",
      "shift"
    ],
    "adoptedIds": [
      "delivery",
      "system",
      "contact",
      "logistics",
      "product",
      "permissions",
      "total-r2",
      "category-basis"
    ],
    "qualifiedIds": [
      "logistics-possible",
      "product-possible",
      "limit",
      "trend-limit",
      "basis-r2"
    ],
    "excludedIds": [
      "supervisor",
      "training",
      "packet-goal",
      "total-r1",
      "growth-r1",
      "basis"
    ],
    "exclusionReasons": {
      "supervisor": "Insufficient causal evidence; role authority does not establish main cause.",
      "training": "Activity outside this explanation-only slice; no measured improvement.",
      "packet-goal": "Reference-only task framing; unsupported joint-cause assertion.",
      "total-r1": "Superseded counting label; old source preserved.",
      "growth-r1": "Comparable population premise no longer holds.",
      "basis": "Replace derived statement to use current total scope; no inactive premise reuse."
    },
    "extraction": "The original apparent total growth is no longer established after counting-basis correction. Category-share changes remain reportable; no causal outcome or capability is inferred.",
    "spine": "Understand non-comparable total counts and valid category records → distinguish two category-specific clues → preserve trend and causal limits.",
    "scene": {
      "id": "scene-complaints",
      "job": "Explain the recorded phenomenon and the limits of attribution to regional management."
    },
    "states": [
      {
        "id": "observed",
        "title": "先看记录与口径",
        "job": "Establish what the records show, with measurement limits.",
        "claimIds": [
          "total-r2",
          "trend-limit",
          "category-basis",
          "delivery",
          "system",
          "contact",
          "basis-r2"
        ],
        "returns": [],
        "audienceJob": "先区分总量、类别占比与统计口径；这些记录尚不说明原因。"
      },
      {
        "id": "clues",
        "title": "分别看两条线索",
        "job": "Relate each clue to its category without proving cause.",
        "claimIds": [
          "delivery",
          "logistics",
          "logistics-possible",
          "system",
          "product",
          "permissions",
          "product-possible",
          "limit",
          "category-basis",
          "basis-r2"
        ],
        "returns": [
          "delivery",
          "system"
        ],
        "audienceJob": "两组线索对应不同投诉类别；已有记录与因果解释需要分开。"
      },
      {
        "id": "synthesis",
        "title": "回到现象与归因边界",
        "job": "Keep the observed pattern and two qualified explanations jointly available.",
        "claimIds": [
          "total-r2",
          "trend-limit",
          "logistics-possible",
          "product-possible",
          "limit",
          "basis-r2",
          "logistics",
          "permissions",
          "category-basis",
          "delivery",
          "system"
        ],
        "returns": [
          "total-r2",
          "logistics-possible",
          "product-possible"
        ],
        "audienceJob": "把记录、两条候选解释和证据缺口放回同一语境，不作因果裁决。"
      }
    ],
    "supportedMeaning": "Current total records cannot establish complaint growth; category-specific clues remain tentative and do not establish causality.",
    "unsupportedReadings": [
      "Activity becomes improvement",
      "Share decline becomes count decline",
      "Reading order becomes causality",
      "Supervisor opinion becomes confirmed cause",
      "Two clues become equal or exhaustive causes"
    ],
    "expression": "Authored audience prose, direct subject headings and economical local qualifications. Internal types and exclusions constrain language without per-claim status badges.",
    "continuity": "Stable claim IDs and naturally stated scope/limits; evidence labels remain internal. Synthesis returns category numbers and relevant business context. Static switching, no motion.",
    "signature": "NO SIGNATURE NEEDED: ordinary evidence/limit grouping already serves this task. No extra expressive value is asserted.",
    "framing": [
      {
        "id": "summary-r1",
        "type": "PRESENTER FRAMING",
        "text": "投诉记录增加，原因仍待证实。",
        "premiseIds": [
          "growth-r1",
          "limit"
        ],
        "status": "superseded",
        "review": "Author reviewed against E1 and causal limits before initial presentation."
      },
      {
        "id": "summary-r2",
        "type": "PRESENTER FRAMING",
        "text": "先核对统计口径，再区分解释线索。",
        "premiseIds": [
          "trend-limit",
          "logistics-possible",
          "product-possible",
          "limit"
        ],
        "status": "superseded",
        "review": "Executing agent withdrew the growth headline after reading E1-r2. The new heading does not assert a trend or causal verdict."
      },
      {
        "id": "summary-editorial",
        "type": "PRESENTER FRAMING",
        "text": "区域投诉情况：类别变化与业务线索",
        "premiseIds": [
          "delivery",
          "system",
          "trend-limit",
          "logistics-possible",
          "product-possible",
          "category-basis"
        ],
        "status": "current",
        "review": "Editorial repair: descriptive topic heading, no growth or causal verdict; governance labels remain internal."
      }
    ],
    "framingReviewOwner": "The executing/editing agent checks affected framing before presenting a revised version. Source IDs do not automatically rewrite headings.",
    "revisionReview": [
      {
        "source": "s-E1-r2",
        "affectedClaimIds": [
          "total-r1",
          "growth-r1",
          "basis"
        ],
        "affectedFramingIds": [
          "summary-r1"
        ],
        "decision": "Withdraw old growth framing; retain original text only as superseded history; use summary-r2 before presenting r2.",
        "unchanged": "Task, audience, category shares, excluded supervisor/training/historical goal, and causal limits.",
        "owner": "Executing agent; manual semantic review, not automatic headline rewriting."
      },
      {
        "source": "s-E1-r2",
        "affectedFramingIds": [
          "summary-editorial",
          "share-basis",
          "product-link",
          "summary-counts"
        ],
        "decision": "Bounded audit: distinguish the complaint-only category denominator from mixed ticket totals; remove unestablished exact temporal alignment. Category shares retain reported comparability; no monthly trajectory or category counts inferred. All audience headings and returned share statements reviewed with category-basis.",
        "owner": "Executing agent; source table assertion accepted within this synthetic task, not independently recomputed."
      }
    ],
    "audience": {
      "subtitle": "5—7 月客户服务情况",
      "states": {
        "observed": {
          "title": "延期类占比上升，系统使用类占比下降",
          "groups": [
            {
              "title": "总量：三个月尚不可直接比较",
              "full": true,
              "lines": [
                {
                  "id": "counts",
                  "type": "PRESENTER FRAMING",
                  "text": "5 月的 82 件只统计投诉；6 月的 113 件和 7 月的 119 件还包含咨询，投诉件数尚未单列。",
                  "premiseIds": [
                    "total-r2",
                    "trend-limit"
                  ]
                }
              ]
            },
            {
              "title": "投诉分类表：延期类占比上升，系统使用类占比下降",
              "full": true,
              "lines": [
                {
                  "id": "delivery-share",
                  "type": "PRESENTER FRAMING",
                  "text": "交付延期相关投诉占比由 31% 升至 42%。",
                  "premiseIds": [
                    "delivery",
                    "category-basis"
                  ]
                },
                {
                  "id": "system-share",
                  "type": "PRESENTER FRAMING",
                  "text": "系统使用问题投诉占比由 24% 降至 18%。",
                  "premiseIds": [
                    "system",
                    "category-basis"
                  ]
                },
                {
                  "id": "contact-count",
                  "type": "PRESENTER FRAMING",
                  "text": "“无法联系到负责人”类投诉数量基本不变。",
                  "premiseIds": [
                    "contact"
                  ]
                },
                {
                  "id": "share-basis",
                  "type": "PRESENTER FRAMING",
                  "text": "类别占比另按仅含投诉工单的分类表计算，前后口径一致，不以含咨询的总量为分母。完整逐月类别件数及占比起止月份未列明，占比变化不等于件数变化。",
                  "premiseIds": [
                    "category-basis",
                    "basis-r2"
                  ]
                }
              ]
            }
          ]
        },
        "clues": {
          "title": "配送环节与产品使用，反映的是不同问题",
          "groups": [
            {
              "title": "配送：签收时间出现波动",
              "lines": [
                {
                  "id": "logistics-context",
                  "type": "PRESENTER FRAMING",
                  "text": "延期类投诉占比由 31% 升至 42%。6 月中旬，部分线路更换了承运商，平均签收时间出现波动。",
                  "premiseIds": [
                    "delivery",
                    "logistics",
                    "category-basis"
                  ]
                },
                {
                  "id": "logistics-link",
                  "type": "PRESENTER FRAMING",
                  "text": "目前缺少具体投诉与线路变化的客户级对应记录，物流变化与延期投诉之间的联系仍需核实。",
                  "premiseIds": [
                    "logistics",
                    "logistics-possible"
                  ]
                }
              ]
            },
            {
              "title": "产品使用：权限问题有所增加",
              "lines": [
                {
                  "id": "product-context",
                  "type": "PRESENTER FRAMING",
                  "text": "6 月上线了两类新产品，客户培训材料尚未完全更新。上线后，部分账号权限问题增加，通常归入系统使用问题，而非交付延期。",
                  "premiseIds": [
                    "product",
                    "permissions"
                  ]
                },
                {
                  "id": "product-link",
                  "type": "PRESENTER FRAMING",
                  "text": "投诉分类表中，系统使用类占比由 24% 降至 18%。这些记录有助于理解产品使用中的问题，尚不足以解释投诉数量的变化。",
                  "premiseIds": [
                    "system",
                    "product-possible",
                    "basis-r2",
                    "category-basis"
                  ]
                }
              ]
            }
          ]
        },
        "synthesis": {
          "title": "当前判断：类别变化清楚，数量趋势和原因仍待核实",
          "groups": [
            {
              "title": "总量需要先统一口径",
              "full": true,
              "lines": [
                {
                  "id": "summary-counts",
                  "type": "PRESENTER FRAMING",
                  "text": "5 月 82 件仅计投诉，6 月 113 件、7 月 119 件包含咨询。现有总量不能直接用来判断投诉是否增加。 类别占比另来自口径一致、只计投诉的分类表。",
                  "premiseIds": [
                    "total-r2",
                    "trend-limit",
                    "category-basis"
                  ]
                }
              ]
            },
            {
              "title": "延期类占比上升",
              "lines": [
                {
                  "id": "summary-logistics",
                  "type": "PRESENTER FRAMING",
                  "text": "延期类占比由 31% 升至 42%；部分线路更换承运商后，平均签收时间出现波动。两者还缺少客户级对应记录。",
                  "premiseIds": [
                    "delivery",
                    "logistics",
                    "logistics-possible",
                    "category-basis"
                  ]
                }
              ]
            },
            {
              "title": "系统使用类占比下降",
              "lines": [
                {
                  "id": "summary-product",
                  "type": "PRESENTER FRAMING",
                  "text": "系统使用类占比由 24% 降至 18%，但部分账号权限问题增加。占比与件数不是同一指标，权限问题也不同于交付延期。",
                  "premiseIds": [
                    "system",
                    "permissions",
                    "basis-r2",
                    "product-possible",
                    "category-basis"
                  ]
                }
              ]
            }
          ],
          "closing": {
            "id": "summary-close",
            "type": "PRESENTER FRAMING",
            "text": "物流和新产品记录分别指向配送与使用环节的问题；现有材料还不足以判断它们各自的影响，也不能将两者合并为投诉变化的原因。",
            "premiseIds": [
              "logistics-possible",
              "product-possible",
              "limit"
            ]
          }
        }
      }
    },
    "editorialReview": "Evidence records and eligibility unchanged. Audience wording is separately identified as PRESENTER FRAMING with live premise links; manual entailment review required after edits. No standalone Evidence Mode UI added."
  }
};
