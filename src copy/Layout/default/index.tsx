import React, { PureComponent } from 'react';
import styles from './index.module.scss'
class DefaultLayout extends PureComponent<any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.main__context}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DefaultLayout