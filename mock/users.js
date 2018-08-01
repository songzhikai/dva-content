'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

const Random = mockjs.Random;

// 数据持久化
let tableListData = {};

if (!global.tableListData) {
  const data = mockjs.mock({
    'data|100': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'mobile': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
      'avatar': () => {
        return Random.image('125x125');
      },
      'status|1-2': 1,
      'email': () => {
        return Random.email('visiondk.com');
      },
      'isadmin|0-1': 1,
      'created_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
      'updated_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}
