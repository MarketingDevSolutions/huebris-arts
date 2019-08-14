import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import CanvaPreview from './../components/canva-preview/CanvaPreview'

const Gallery = ({ paintings, smallCanvases }) => (
  <Layout title='Gallery | Huebris Arts'>
    <h2 className='title'>PAINTINGS</h2>
    <PaintingPreview paintings={paintings} />
    <CanvaPreview canvases={smallCanvases} />
  </Layout>
)

function mapStateToProps (state) {
  const { paintings, smallCanvases } = state
  return { paintings, smallCanvases }
}

export default connect(mapStateToProps)(Gallery)
