import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PrintPreview from './../components/print-preview/PrintPreview'

const Store = ({ prints, paintings, smallCanvases }) => (
  <Layout title='Store | Huebris Arts'>
    <h1>STORE</h1>
    <h2 className='title'>PRINTS</h2>
    <PrintPreview prints={prints} />
  </Layout>
)

function mapStateToProps ({ prints, paintings, smallCanvases }) {
  return { prints, paintings, smallCanvases }
}

export default connect(mapStateToProps)(Store)
