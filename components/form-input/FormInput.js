import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	otherProps.textarea ? <div className="group">
	<textarea 
		className="form-input"
		onChange={handleChange}
		{...otherProps}/>
		{ 
			label ? 
			<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
				{label}
			</label>
			: null
		}
		<style jsx>
			{`
			$sub-color: grey;
			$main-color: black;

			.group {
			  float: center;
			  position: relative;
			  margin: 45px 0;

			}

			textarea{
				max-width: 70vw;
				height: 40vh;
				resize: none;
			    border: 1px solid black;
			}
			  .form-input {
			    background: none;
			    background-color: white;
			    color: grey;
			    font-size: 18px;
			    padding: 10px 10px 10px 5px;
			    display: block;
			    width: 100%;
			    border: 1px solid black;
			    margin: 25px 0;

			  }
			    .form-input:focus {
			      outline: none;
			    }

			    .form-input:focus ~ .form-input-label {
			      top: -14px;
			  	  font-size: 12px;
			 	  color: black;
			    }

			  input[type='password'] {
			    letter-spacing: 0.3em;
			  }

			  .form-input-label {
			    color: grey;
			    font-size: 16px;
			    font-weight: normal;
			    position: absolute;
			    pointer-events: none;
			    left: 5px;
			    top: 10px;
			    transition: 300ms ease all;

			  }
			    form-input-label.shrink {
			      top: -14px;
			  	  font-size: 12px;
			 	  color: black;
			    }

						`}
		</style>


		</div>

		:

	<div className="group">
		<input 
			className="form-input" 
			onChange={handleChange}
			{...otherProps}/>
		{ 
			label ? 
			<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
				{label}
			</label>
			: null
		}
		<style jsx>
			{`
			$sub-color: grey;
			$main-color: black;

			.group {
			  position: relative;
			  margin: 45px 0;

			}
			 .form-input {
			 	max-width: 70vw;
			    background: none;
			    background-color: white;
			    color: grey;
			    font-size: 18px;
			    padding: 10px 10px 10px 5px;
			    display: block;
			    width: 100%;
			    border: 1px solid black;
			    margin: 25px 0;

			  }
			    .form-input:focus {
			      outline: none;
			    }

			    .form-input:focus ~ .form-input-label {
			      top: -14px;
			  	  font-size: 12px;
			 	  color: black;
			    }

			  input[type='password'] {
			    letter-spacing: 0.3em;
			  }

			  .form-input-label {
			    color: grey;
			    font-size: 16px;
			    font-weight: normal;
			    position: absolute;
			    pointer-events: none;
			    left: 5px;
			    top: 10px;
			    transition: 300ms ease all;

			  }
			    form-input-label.shrink {
			      top: -14px;
			  	  font-size: 12px;
			 	  color: black;
			    }


						`}
		</style>
	</div>
	);

export default FormInput;