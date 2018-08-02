import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import styles from './ViewsIndex.css';
const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {

    handleClick = (e) => {
        // console.log('click ', e);
    }
    renderMenu(obj){ //叶子节点
        return (
            <Menu.Item key={obj.key} className={styles.menuStyle}>
                <Link to={obj.path}>
                    <span className={styles.menuLeafStyle}>{obj.menuName}</span>
                </Link>
            </Menu.Item>
        )
    }
    renderSubMenu(obj) {
        let sub = obj.sub;
        return (
            <SubMenu key={obj.key} className={styles.subMenuStyle} title={<span className={styles.menuParentStyle}>{obj.menuName}</span>}>
                {sub && sub.map(item => item.sub && item.sub.length>0 ? this.renderSubMenu(item) : this.renderMenu(item))}
            </SubMenu>
        )
    }
    menuFunc(menus){
        return menus.map(
            item => item.sub && item.sub.length>0 ? this.renderSubMenu(item) : this.renderMenu(item)
        );
    }
    render() {
        let menus = this.props.menu;
        return (
            <Menu
                onClick={this.handleClick}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                className={styles.menuStyle}
            >
                {
                    this.menuFunc(menus)
                }
            </Menu>
        );
    }
}

export default SiderMenu;
