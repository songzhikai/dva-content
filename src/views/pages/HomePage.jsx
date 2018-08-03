import React from 'react';
import {connect} from 'dva';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state={
        }
    }
    render() {
        return (
            <div>
              首页1
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
