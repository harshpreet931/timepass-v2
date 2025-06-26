/*
 *
 * Admin
 *
 */

import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';

import Account from '../../../containers/Account';
import AccountSecurity from '../../../containers/AccountSecurity';
import Address from '../../../containers/Address';
import Order from '../../../containers/Order';
import Users from '../../../containers/Users';
import Category from '../../../containers/Category';
import Product from '../../../containers/Product';
import Brand from '../../../containers/Brand';
import Merchant from '../../../containers/Merchant';
import Review from '../../../containers/Review';
import Wishlist from '../../../containers/WishList';

const Admin = props => {
  const styles = {
    admin: {
      padding: '20px',
      backgroundColor: '#f4f4f4'
    },
    panelBody: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <div style={styles.admin}>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div style={styles.panelBody}>
            <Switch>
              <Route exact path='/dashboard' component={Account} />
              <Route path='/dashboard/security' component={AccountSecurity} />
              <Route path='/dashboard/address' component={Address} />
              <Route path='/dashboard/product' component={Product} />
              <Route path='/dashboard/category' component={Category} />
              <Route path='/dashboard/brand' component={Brand} />
              <Route path='/dashboard/users' component={Users} />
              <Route path='/dashboard/merchant' component={Merchant} />
              <Route path='/dashboard/orders' component={Order} />
              <Route path='/dashboard/review' component={Review} />
              <Route path='/dashboard/wishlist' component={Wishlist} />
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
