module.exports = {
  // 继承规则
  extends :['@commitlint/config-conventional'],
// 定义规则类型
roles:{
  // type 的类型定义：表示git提交的type必须在一下类型范围之内
'type-enum':[
  2,
  'always',
  [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'chore',
    'revert',
    'build'
  ]

],
//subiect 大小写不效验
'subiect-case':[0]
}
}
