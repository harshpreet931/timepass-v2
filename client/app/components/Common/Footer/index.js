/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const links = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerLinks = links.map(item => (
    <li key={item.id}>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '40px 0',
      borderTop: '1px solid #e7e7e7'
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    footerBlock: {
      width: '30%',
      marginBottom: '20px'
    },
    blockTitle: {
      marginBottom: '15px'
    },
    textUppercase: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    blockContent: {
      ul: {
        listStyle: 'none',
        padding: 0
      },
      li: {
        marginBottom: '10px'
      }
    },
    footerCopyright: {
      textAlign: 'center',
      marginTop: '20px',
      borderTop: '1px solid #e7e7e7',
      paddingTop: '20px'
    },
    footerSocialItem: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
      li: {
        margin: '0 10px'
      }
    }
  };

  return (
    <footer style={styles.footer}>
      <Container>
        <div style={styles.footerContent}>
          <div style={styles.footerBlock}>
            <div style={styles.blockTitle}>
              <h3 style={styles.textUppercase}>Customer Service</h3>
            </div>
            <div>
              <ul style={styles.blockContent.ul}>{footerLinks}</ul>
            </div>
          </div>
          <div style={styles.footerBlock}>
            <div style={styles.blockTitle}>
              <h3 style={styles.textUppercase}>Links</h3>
            </div>
            <div>
              <ul style={styles.blockContent.ul}>{footerLinks}</ul>
            </div>
          </div>
          <div style={styles.footerBlock}>
            <div style={styles.blockTitle}>
              <h3 style={styles.textUppercase}>Newsletter</h3>
              <Newsletter />
            </div>
          </div>
        </div>
        <div style={styles.footerCopyright}>
          <span>© {new Date().getFullYear()} MERN Store</span>
        </div>
        <ul style={styles.footerSocialItem}>
          <li style={styles.footerSocialItem.li}>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li style={styles.footerSocialItem.li}>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li style={styles.footerSocialItem.li}>
            <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
              <span className='pinterest-icon' />
            </a>
          </li>
          <li style={styles.footerSocialItem.li}>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
