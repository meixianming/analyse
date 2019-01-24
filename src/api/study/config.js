export default [{
  // 获取特色定制列表",
  outKey: 'getCustomContentList',
  action: '/studyCustom/getCustomContentList.do',
  isNeedResult: false,
  reqParams: [{
    name: 'page',
    default: 1
  },
  {
    name: 'pageSize',
    default: 10
  },
  {
    name: 'titleOrUserName',
    default: ''
  },
  {
    name: 'columnId',
    default: ''
  },
  {
    name: 'contentType',
    default: ''
  },
  {
    name: 'contentStatus',
    default: ''
  },
  {
    name: 'startDate',
    default: ''
  },
  {
    name: 'endDate',
    default: ''
  },
  {
    name: 'mustStudy',
    default: ''
  }
  ]
},
{
  // 获取当前登录人的栏目列表",
  outKey: 'getCustomColumn',
  action: 'studyCustom/getCustomColumnByPermissionId.do',
  isNeedResult: false,
  reqParams: [{
    name: 'mode',
    default: ''
  }]
}
]
