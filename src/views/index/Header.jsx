import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import PCBar from "../../components/layout/pc_bar";
import ImgBroadcast from "../../components/pages/img_broadcast";
import styles from './ViewsIndex.css';
import {connect} from 'dva';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return (
      <div className={styles.headerStyle}>
        <h2 className={styles.headerTitle}>内容中心</h2>
      </div>
    );
  }

}
export default Header;
