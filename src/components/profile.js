import React from 'react'

const Profile = ({ logoImage, title = 'Apple', ticker = 'appl', }) => {
  return (
    <div style={styles.container}>
{/*       <img src={logoImage} alt="logo" style={styles.logo} />
 */}      <div style={styles.title}>{title}</div>
      <div style={styles.ticker}>{ticker}</div>
    </div>
  )
}

export default Profile

const styles = {
  container: {},
  logo: {
    width: 180,
    height: 180,
  }

}