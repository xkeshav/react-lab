import React from 'react';
import { connect } from 'react-redux';

export const DashboardPage = () => {
  return <div>Dashboard</div>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
