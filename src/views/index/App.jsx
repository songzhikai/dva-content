import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col} from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import ImgBroadcast from "../../components/pages/img_broadcast";
import styles from './ViewsIndex.css';
import {connect} from 'dva';
import Header from "./Header";
import ContentTab from "./ContentTab";
import SiderMenu from "./SiderMenu";
import {menus} from './Menu'

const {  Sider } = Layout;
const SubMenu = Menu.SubMenu;

const MenuItem = Menu.Item;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <div id="app">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            className={styles.leftSiderStyle}
          >
            <div className="logo" />
            <SiderMenu menu={menus}/>
          </Sider>
          <Layout>
            <Header style={{padding: 0 }} />
            <ContentTab style={{ margin: '0 16px' }}>
            </ContentTab>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default  App;
