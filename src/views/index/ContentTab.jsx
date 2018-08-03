import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import styles from './ViewsIndex.css';
import {connect} from 'dva';
import Routes from '../../routes/all';
import PubSub from 'pubsub-js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;

class ContentTab extends React.Component {

  constructor(props){
    super(props);
    this.newTabIndex = 0;
    this.state={
      activeKey: this.props.selectedTab.key,
    }
  }
  componentDidMount(){
    console.log('tabs', this.props.tabs);
    this.setState({
      activeKey: this.props.selectedTab.key
    });
    PubSub.subscribe('tabChange', function(topic, msg){
      this.setState({
        activeKey: msg.key
      });
    }.bind(this))
  }
  componentWillUnmount(){
    PubSub.unsubscribe('tabChange');
  }

  onChange = (activeKey) => {
    PubSub.publish('tabChange', {key: activeKey});
    this.props.setSelectedTab(activeKey);
    this.props.tabClickToChangeRouter(activeKey);
  }

  add = () => {
    // const panes = this.state.panes;
    // const activeKey = `newTab${this.newTabIndex++}`;
    // panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    // this.setState({ panes, activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  stateFunc(a){
    let res = [];
    res.push(a);
    console.log('activeKey', this.state.activeKey)
    return res
  }
  setStateOpt(obj){ //setState是异步的
    this.setState(obj,function(){
      this.stateFunc(obj);
    })
  }
  remove = (targetKey) => {
    let newIndex = 0;
    this.props.tabs.forEach((tab, i) => {
      if (tab.key === targetKey) {
        newIndex = i - 1;
        return false;
      }
    });
    if(newIndex == -1){
      if(this.props.tabs.length > 1){//还有tab
        this.setState({ activeKey : this.props.tabs[1].key});
        this.props.setSelectedTab(this.props.tabs[1].key);
      }else if(this.props.tabs.length == 1){
        this.setState({ activeKey : ''});
        this.props.setSelectedTab('');
        this.props.tabClickToChangeRouter('/');
      }
    }else if(newIndex > -1){
      //改变当前的tab
      this.setState({ activeKey : this.props.tabs[newIndex].key});
      this.props.setSelectedTab(this.props.tabs[newIndex].key);
      //改变router
      this.props.tabClickToChangeRouter(this.props.tabs[newIndex].key);
    }
    //改变当前的tabs
    let newTabs = this.props.tabs.filter(tab => tab.key !== targetKey)
    this.props.setTabs(newTabs);

  }
  render(){
    return(
      <div>
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.props.tabs.map(tab => <TabPane tab={tab.title} key={tab.key}></TabPane>)}
        </Tabs>
        <Routes/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedTab: state.menuTabModel.selectedTab,
    tabs: state.menuTabModel.tabs
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    tabClickToChangeRouter: (activeKey) => {
      dispatch({type: 'menuTabModel/tabClickToChangeRouter', payload: { key: activeKey }})
    },
    setSelectedTab: (activeKey) => {
      dispatch({type: 'menuTabModel/setSelectedTab', payload: { key: activeKey}})
    },
    setTabs: (tabs) => {
      dispatch({type: 'menuTabModel/setTabs', payload: { tabs}})
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTab);
