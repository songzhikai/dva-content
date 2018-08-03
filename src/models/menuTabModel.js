// 用于存储menu或tab切换时的数据
import {routerRedux} from 'dva/router';
import {menus} from '../views/index/Menu';
import PubSub from 'pubsub-js';

export default {
  namespace: 'menuTabModel',
  state: {
    selectedTab:{}, //当前选中的tab
    tabs: [], //已经缓存起来的tab数组
  },

  // 异步操作
  effects: {
    *tabClickToChangeRouter({payload}, {put,call,select}){
      try{
        yield put(routerRedux.push({pathname:payload.key}));
      }catch(e){
        e.message;
      }
    },
    *create(){},
    *'delete'(){},   // 因为delete是关键字，特殊处理
    *update(){},
  },

  // 替换状态树
  reducers: {
    setSelectedTab(state, {payload}){
      state.selectedTab.key = payload.key;
      return {...state};
    },
    setTabs(state, {payload}){
      state.tabs = payload.tabs;
      return {...state};
    },
    routerChange(state, action){
      if(action.payload.pathname == '/'){
        state.selectedTab.key = '';
        // state.selectedTab.title = '';
        return {...state};
      }
      // 当前选中tab
      for(let index in menus){
        let flag = false;
        let isTabsHas = false;
        if(!!menus[index].sub){
          let sub = menus[index].sub;
          for(let key in sub){
            if(sub[key].key == action.payload.pathname){
              state.selectedTab.key = action.payload.pathname;
              // state.selectedTab.title = sub[key].menuName;

              // 将路由放到tabs中
              for(let bkey in state.tabs){
                let tabs = state.tabs;
                if(tabs[bkey].key == action.payload.pathname){
                  isTabsHas = true;
                  break;
                }
              }
              if(isTabsHas == false){
                state.tabs.push({key:action.payload.pathname, title: sub[key].menuName});
              }
              PubSub.publish('tabChange', {key: action.payload.pathname});
              flag = true;
              break;
            }
          }
        }
        if(flag == true){
          return {...state};
        }
        if(flag == false && !menus[index].sub && !!menus[index].path && (menus[index].key == action.payload.pathname)){
          state.selectedTab.key = action.payload.pathname;
          // state.selectedTab.title = menus[index].menuName;
          // 将路由放到tabs中
          for(let bkey in state.tabs){
            let tabs = state.tabs;
            if(tabs[bkey].key == action.payload.pathname){
              isTabsHas = true;
              break;
            }
          }
          if(isTabsHas == false){
            state.tabs.push({key:action.payload.pathname, title: menus[index].menuName});
          }
          PubSub.publish('tabChange', {key: action.payload.pathname});
          break;
        }
      }
      return {...state};
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type:'routerChange',
          payload: {pathname: location.pathname}
        });

        // console.log('重定向接收参数：%o', location)
      });
    }
  },
}
