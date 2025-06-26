/*
 *
 * Customer
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
import Product from '../../../containers/Product';
import Brand from '../../../containers/Brand';
import Order from '../../../containers/Order';
import Wishlist from '../../../containers/WishList';

const Merchant = props => {
  const styles = {
    merchant: {
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
    <div style={styles.merchant}>
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
              <Route path='/dashboard/brand' component={Brand} />
              <Route path='/dashboard/orders' component={Order} />
              <Route path='/dashboard/wishlist' component={Wishlist} />
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Merchant;
