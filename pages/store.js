import React from 'react'
import { connect } from 'react-redux'
import Layout from './../components/layout/Layout'
import PrintPreview from './../components/print-preview/PrintPreview'
import PaintingPreview from './../components/painting-preview/PaintingPreview'
import CanvaPreview from './../components/canva-preview/CanvaPreview'

const Store = ({ prints, paintings, smallCanvases, stickers, comboses }) => (
  <Layout title='Store | Huebris Arts'>
    <h1>STORE</h1>
    <h2 className='title'>ORIGINALS</h2>
    <PaintingPreview paintings={paintings} />
    <CanvaPreview canvases={smallCanvases} />
    <h2 className='title'>PRINTS</h2>
    <PrintPreview prints={prints} />
    <h2 className='title'>STICKERS</h2>
    <h4 className='title'>3x3 in stickers made from the below originals and prints</h4>
    <CanvaPreview canvases={stickers}/>
    <h2 className='title'>COMBOS</h2>

  </Layout>
)

function mapStateToProps ({ prints, paintings, smallCanvases, stickers, comboses }) {
  return { prints, paintings, smallCanvases, stickers, comboses }
}

export default connect(mapStateToProps)(Store)
