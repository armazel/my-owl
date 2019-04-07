import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/logo.svg';
import action from './action';
import './style.scss';

const propTypes = {
  message: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
};

class Home extends Component {
  componentDidMount() {
    const { getMessage } = this.props;
    getMessage();
  }

  render() {
    const { message } = this.props;

    return (
      <div class="body">
        <div class="hover-area">
        <div class="owl">
          <div class="owl-head">
            <div class="eye left_eye">
              <div class="pupil"></div>
            </div>
            <div class="eye right_eye">
              <div class="pupil"></div>
            </div>
            <div class="nouse_block">
              <div class="nouse"></div>
            </div>
            <div class="ear ear_left">
            </div>
            <div class="ear ear_right">
            </div>
          </div>
          <div class="owl-body">
            <div class="feets-block-first">
              <div class="feet first"></div>
              <div class="feet second"></div>
              <div class="feet third"></div>
            </div>
            <div class="feets-block-second">
              <div class="feet first"></div>
              <div class="feet second"></div>
              <div class="feet third"></div>
            </div>
          </div>
          <div class="owl-second-body">
            <div class="freckles-block-first">
              <div class="freckles"></div>
              <div class="freckles second"></div>
              <div class="freckles third"></div>
              <div class="freckles"></div>
            </div>
            <div class="freckles-block-second">
              <div class="freckles"></div>
              <div class="freckles"></div>
            </div>
          </div>
          <div class="wing wing-left"></div>
            <div class="wing wing-right"></div>
        </div>
        <img class="key" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1px8BVQlB2_jUT6rgJMkP86CmO9o0l5b41w4SEUq3Vbchxxp_w"></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.home.message,
});

const mapDispatchToProps = {
  getMessage: action.getMessage,
};

Home.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
