import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Tabs } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import PCHeader from "../../components/layout/pc_header";
import PCFooter from "../../components/layout/pc_footer";
import PCBar from "../../components/layout/pc_bar";
import ImgBroadcast from "../../components/pages/img_broadcast";
import styles from './ViewsIndex.css';
import {connect} from 'dva';
import Routes from '../../routes/all';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;

class ContentTab extends React.Component {

  constructor(props){
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
    ];
    this.state={
      activeKey: panes[0].key,
      panes,
    }
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render(){
    return(
      <Tabs
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        <Routes/>
        {/*{this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}*/}
      </Tabs>
    );
  }

}

export default ContentTab;
