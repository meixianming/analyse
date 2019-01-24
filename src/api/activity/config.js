export default [{
  // 获取活动基本信息
  outKey: 'getBaseInfo',
  action: 'activity/getActivityDetaileByActivityId.life',
  reqParams: [{
    name: 'activityId',
    default: ''
  }]
},
{
  // 获取活动投票信息
  outKey: 'getVoteInfo',
  action: 'infoActivityVote/getActivityVotesByActivityId.life',
  reqParams: ['activityId', {
    name: 'userId',
    default: ''
  }]
}
]
