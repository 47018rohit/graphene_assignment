import { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const handleSubmit = e=>{
    e.preventDefault()
    console.log('form data', formData);
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id='contact-wrapper'>
      <h1>GET <br />IN TOUCH</h1>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>Get news about articles and updates in your inbox.</p>
      </div>
      <form className='contact-form' onSubmit={handleSubmit} >
        <input type="text" placeholder="NAME" required name="name" onChange={handleChange} value={formData.name} minLength={3} />
        <input type="email" placeholder="EMAIL" required name="email" onChange={handleChange} value={formData.email} />
        <input type="text" placeholder="MESSAGE" required name="message" onChange={handleChange} value={formData.message} minLength={10}/>
        <button type="submit">SEND</button>
      </form>
    </section>
  )
}

export default Contact
