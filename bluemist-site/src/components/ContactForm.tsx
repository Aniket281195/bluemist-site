import React from 'react'

export default function ContactForm() {
  return (
    <div style={{maxWidth:'600px', margin:'0 auto', padding:'40px'}}>
      <h1 style={{textAlign:'center'}}>Enquire Now</h1>
      <form 
        name="bluemist-enquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="bluemist-enquiry" />
        <p hidden>
          <label>Don’t fill this: <input name="bot-field" /></label>
        </p>

        <label>Name</label>
        <input name="name" required style={{width:'100%', marginBottom:'15px'}} />

        <label>Email</label>
        <input name="email" type="email" required style={{width:'100%', marginBottom:'15px'}} />

        <label>Phone</label>
        <input name="phone" required style={{width:'100%', marginBottom:'15px'}} />

        <label>Interest</label>
        <select name="interest" style={{width:'100%', marginBottom:'15px'}}>
          <option>General Enquiry</option>
          <option>Private Label</option>
          <option>Bulk Order</option>
        </select>

        <label>Message</label>
        <textarea name="message" rows="5" style={{width:'100%', marginBottom:'15px'}}></textarea>

        <button type="submit" style={{width:'100%', padding:'15px', background:'#c8873d', color:'#000'}}>
          Submit Enquiry
        </button>
      </form>
    </div>
  )
}