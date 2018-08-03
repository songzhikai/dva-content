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
    this.props.changeTab(activeKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    // this.state.panes.forEach((pane, i) => {
    //   if (pane.key === targetKey) {
    //     lastIndex = i - 1;
    //   }
    // });
    // const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    // if (lastIndex >= 0 && activeKey === targetKey) {
    //   activeKey = panes[lastIndex].key;
    // }
    // this.setState({ panes, activeKey });
  }
  render(){
    return(
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.props.tabs.map(tab => <TabPane tab={tab.title} key={tab.key}><Routes/></TabPane>)}

      </Tabs>
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
    changeTab: (activeKey) => {
      dispatch({type: 'menuTabModel/changeTab', payload: { key: activeKey }})
    },
    setSelectedTab: (activeKey) => {
      dispatch({type: 'menuTabModel/setSelectedTab', payload: { key: activeKey}})
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentTab);
