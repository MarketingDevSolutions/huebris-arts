import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PrintPreview from './../components/print-preview/PrintPreview'

class Store extends React.Component {
  render () {
    const { prints } = this.props

    return (
      <Layout title='Store | Huebris Arts'>
        <h1>STORE</h1>
        <h2 className='title'>PRINTS</h2>
        <PrintPreview prints={prints} />
      </Layout>
    )
  }
}

function mapStateToProps (state) {
  const { prints } = state
  return { prints }
}

export default connect(mapStateToProps)(Store)
