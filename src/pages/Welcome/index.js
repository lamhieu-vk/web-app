import React, { PureComponent } from 'react'
import compose from 'lib/hoc/compose'
import withSession from 'lib/hoc/withSession'
import withRouter from 'lib/hoc/withRouter'

type TWelcome = {} & Page

class Welcome extends PureComponent<TWelcome, StateComponent> {
  render() {
    const { session } = this.props
    const { isLogged } = session || {}
    return (
      <div>
        <div>welcome to welcome!</div>
        <div>{isLogged ? 'logged' : 'not logged'}</div>
      </div>
    )
  }
}

export default compose(
  withSession,
  withRouter,
)(Welcome)
