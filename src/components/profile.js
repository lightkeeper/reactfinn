import React from 'react'

const Profile = ({ 
  logo = 'https://www.macworld.co.uk/cmsdata/features/3792765/apple_logo_thumb800.jpg', 
  title = 'Apple', 
  ticker = 'aapl', 
  url = 'https://www.apple.com/', 
  phone = '555-423-6548', 
  marketcap = 2251955.2, 
  outstanding = 16976.76, 
  industry = 'Technology'
}) => (
  <div style={styles.container}>
    <div style={styles.identity}>
      <img src={logo} alt="logo" style={styles.logo} />
      <div style={styles.title}>{title}</div>
      <div style={styles.ticker}>{ticker}</div>
    </div>
    <div style={styles.contact}>
      <div style={styles.url}>
        <a href={url} target='_blank' rel='noreferrer'>{url}</a>
      </div>
      <div style={styles.phone}>{phone}</div>
    </div>
    <table style={styles.table}>
      <tbody>
        <tr>
          <td style={styles.label}>
            <span>Marketcap</span>
          </td>
          <td style={styles.value}>
            <span>{marketcap}</span>
          </td>
        </tr>
        <tr>
          <td style={styles.label}>
            <span>Outstanding</span>
          </td>
          <td style={styles.value}>
            <span>{outstanding}</span>
          </td>
        </tr>
        <tr>
          <td style={styles.label}>
            <span>Industry</span>
          </td>
          <td style={styles.value}>
            <span>{industry}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Profile

const styles = {
  container: {
    border: '1px solid #CCC',
    margin: 10,
    padding: 10,
  },
  identity: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    border: '1px solid #CCC',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginLeft: 10,
  },
  ticker: {
    fontSize: '2rem',
    fontWeight: 900,
    marginLeft: 'auto',
    textTransform: 'uppercase',
  },
  contact: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  table: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontWeight: 600,
  },
  value: {
    textAlign: 'right',
  }
}