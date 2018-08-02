// 用于存储menu或tab切换时的数据
import {routerRedux} from 'dva/router';;

export default {
  namespace: 'menuTabModel',
  state: {
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    currentSelectedTab: '', //当前选中的tab
    tabs: [], //已经缓存起来的tab数组
  },

  // 异步操作
  effects: {
    *changeTab({payload}, { call, put } ){
      yield put(routerRedux.push({ pathname: payload.tabName }))
    },
    *create(){},
    *'delete'(){},   // 因为delete是关键字，特殊处理
    *update(){},
  },

  // 替换状态树
  reducers: {
    currentTabClick(state, action){ //积累tab点击信息
      state.tabName = action.payload.tabName;
      return state;
    },
    getTabName(state, action){
      return {...state};
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // console.log('重定向接收参数：%o', location)
      });
    }
  },
}
