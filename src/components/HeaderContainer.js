import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = ({ cartCount }) => (
  <Header {...{ cartCount }} />
);

const mapStateToProps = state => ({ cartCount: state.cartCount, });

export default connect(mapStateToProps, null)(HeaderContainer);
