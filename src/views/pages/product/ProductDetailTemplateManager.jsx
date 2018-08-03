import React from 'react';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import ImgBroadcast from "../../../components/pages/img_broadcast";
import styles from '../views_pages.css';
import {connect} from 'dva';

const MenuItem = Menu.Item;

class ProductDetailTemplateManager extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.titleBarClick = this.titleBarClick.bind(this);
        this.state={
            current: 'news',
            currentMenu: 'health'

        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });
    }
    handleClickMenu(e){
        this.setState({
            currentMenu: e.key,
        });
    }
    titleBarClick(){
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={3}></Col>
                    <Col span={4}>
                        <ImgBroadcast></ImgBroadcast>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                            <MenuItem key="news">要闻</MenuItem>
                            <MenuItem key="ccnews">长春新闻</MenuItem>
                        </Menu>
                        {
                            this.state.current == 'news' ?
                                <ul>
                                    <li className={styles['news-content']}>军改以来东海舰队首迎新政委 他来自空军政工部</li>
                                    <li className={styles['news-content-bold']}>月薪1500到身家过亿 京东前副总裁自我投资之道</li>
                                    <li className={styles['news-content']}>人间 | 我一个要当作家的，怎么信了成功学</li>
                                </ul>
                                  :
                                <ul>
                                    <li className={styles['news-content-bold']}>长春生态广场互通立交预计10月完工</li>
                                    <li className={styles['news-content']}>好样的 女子倒地抽搐 女护士跪地救人</li>
                                </ul>
                        }
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {


  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailTemplateManager);
