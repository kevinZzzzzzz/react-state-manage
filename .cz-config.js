// 这里使用的是样例的配置，可根据需要自定义
module.exports = {
  types: [
    { value: "feat", name: "✨ feat:     新功能" },
    { value: "fix", name: "🐛 fix:      修复bug" },
    { value: "build", name: "📦️ build:    打包" },
    { value: "docs", name: "✏️  docs:     文档变更" },
    { value: "style", name: "💄 style:    代码的样式美化" },
    { value: "refactor", name: "♻️  refactor: 重构" },
    { value: "perf", name: "⚡️ perf:     性能优化" },
    { value: "test", name: "✅ test:     测试" },
    { value: "chore", name: "🚀 chore:    构建/工程依赖/工具" },
    { value: "revert", name: "⏪️ revert:   回退" },
    { value: "release", name: "🎉 release:  发布正式版" },
    { value: "ci", name: "👷 ci:       CI related changes" },
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  //消息步骤
  messages: {
    type: "请选择提交类型",
    scope: "表示此更改的范围(可选)",
    customScope: "请输入修改范围(可选)",
    subject: "请简要描述提交(必填)",
    breaking: "列出任何重大更改(可选)",
    body: "请输入详细描述(可选)",
    footer: "请输入要关闭的issue(可选)",
    confirmCommit: "确认以上信息提交?(y/n)",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body", "footer", "scope", "breaking", "customScope"],

  // subject文字长度默认是
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
