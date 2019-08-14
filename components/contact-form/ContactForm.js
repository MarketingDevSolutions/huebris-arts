/* eslint-disable no-tabs */
import React, { useState } from 'react'
import axios from 'axios'
import FormInput from './../form-input/FormInput'
import CustomButton from './../custom-button/CustomButton'
import Modal from './../modal/Modal'
import MiniLoader from './../mini-loader/MiniLoader'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function encode (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm () {
  const [inputs, setInputs] = useState({
    email: '',
    phone: '',
    name: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    setLoading(true)

    await axios.post('https://huebris-email.herokuapp.com/api/contact', encode({
      ...inputs
    }), config)
      .then(response => response)
      .then(res => {
        if (res.ok) {
          setLoading(false)
          setSuccess(true)
        } else {
          setLoading(false)
          setError('Please, fill all the fields')
        }
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
        setError('Error sending email. Please, try later.')
      })

    form.reset()
  }

  const handleCloseSuccess = () => {
    setSuccess(false)
  }

  const handleCloseError = () => {
    setError(false)
  }

  return (
    <div className='contact-form'>
      {success
        ? <Modal onClose={handleCloseSuccess}>
          <h2>YOUR EMAIL WAS SENT SUCCESSFULLY!</h2>
        </Modal> : null }

      {error
        ? <Modal onClose={handleCloseError}>
          <h2>{error}</h2>
        </Modal> : null }
      <h2>Want to give a suggestion or order a personalized painting? </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='name'
          label='Name'
          type='text'
          value={inputs.name}
          onChange={handleChange}
          required />
        <FormInput
          name='phone'
          label='Phone number'
          type='text'
          value={inputs.phone}
          onChange={handleChange}
          required />
        <FormInput
          name='email'
          label='Email'
          type='email'
          value={inputs.email}
          onChange={handleChange}
          required />
        <FormInput
          textarea='true'
          name='message'
          label='Message'
          value={inputs.message}
          rows={4}
          onChange={handleChange}
          required />

        { loading ? <MiniLoader><h4>SENDING EMAIL...</h4></MiniLoader> : null }
        <span onClick={handleSubmit}>
          <CustomButton
            type='submit'>
								SEND
          </CustomButton>
        </span>
      </form>
      <style jsx>
        {`
					.contact-form{
						text-align: center;
						width: 100%;
						display: flex;
						flex-direction: column;
					}
				`}
      </style>
    </div>
  )
}
