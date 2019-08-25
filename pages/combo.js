import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import axios from 'axios'
import Layout from './../components/layout/Layout'
import Link from 'next/link'
import { Button } from '../styles'
import { Image, Grid, GridItem, ReturnContainer } from '../styles/pages/combos'
import { formatPrice } from '../helpers'
import FormInput from '../components/form-input/FormInput'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function Combo ({ storeCombos, id }) {
  const [modal, showModal] = useState(false)
  const [success, setSuccess] = useState(false)

  const getCombo = () => {
    const combo = storeCombos.filter((item) => {
      return item.id === parseInt(id)
    })[0]

    return combo
  }

  const handleOpenModal = () => showModal(true)

  const handleCloseModal = () => showModal(false)

  const handleChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await axios.post('https://huebris-email.herokuapp.com/api/contact', inputs, config)
      .then(response => response)
      .then(res => {
        if (res.status === 200) {
          setSuccess(true)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const combo = getCombo()
  const { title, description, price } = combo
  const { url } = combo.image.fields.file
  const [inputs, setInputs] = useState({
    article: `${title} | ${description}`
  })

  return (
    <Layout title={`${title} | Huebris Arts`}>
      <Grid>
        <GridItem>
          <Image src={url} alt={title} />
        </GridItem>

        <GridItem>
          <h3 className='label'><b>TITLE: </b>{title}</h3>
          <h3 className='label'><b>DESCRIPTION: </b>{description}</h3>
          <h3 className='label'><b>PRICE: </b>{formatPrice(price)} + Shipping and Handling</h3>

          <h2 className='text-center'>LIKE IT?</h2>
          <Button onClick={handleOpenModal}>BUY NOW</Button>
        </GridItem>
      </Grid>

      <ReturnContainer>
        <Link href='/store'>
          <Button>RETURN TO STORE</Button>
        </Link>
      </ReturnContainer>

      <Modal
        isOpen={modal}
        contentLabel='Minimal Modal Example'
        ariaHideApp={false}
      >
        <Button
          style={{ margin: 0, position: 'relative', left: '90%' }}
          onClick={handleCloseModal}
        >X</Button>
        {success ? 'Your message was sent' : (
          <form onSubmit={handleSubmit}>
            <FormInput
              name='name'
              label='Name'
              required
              onChange={handleChange}
            />
            <FormInput
              name='email'
              label='Email'
              type='email'
              required
              onChange={handleChange}
            />
            <FormInput
              name='article'
              label='Article'
              value={`${title} | ${description}`}
              disabled
              onChange={handleChange}
            />
            <FormInput
              textarea='true'
              name='message'
              label='Message'
              required
              rows={4}
              onChange={handleChange}
            />

            <Button type='submit'>Submit message</Button>
          </form>
        )}
      </Modal>
    </Layout>
  )
}

Combo.getInitialProps = async ({ query }) => {
  const { id } = query

  return { id }
}

function mapStateToProps (state) {
  const { combos } = state
  return { storeCombos: combos }
}

export default connect(mapStateToProps)(Combo)
