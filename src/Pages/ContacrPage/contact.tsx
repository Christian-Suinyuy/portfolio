// ContactForm.jsx
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();
    if (form.current)
    emailjs.sendForm(
      'service_99afos7',
      'template_z3lzet8',
      form.current,
      'IpbpvYAPgPg1vPr2T'
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch((error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='grid mx-4 sm:mx-30 md:mx-50 gap-2'>
      <label>
        Name
        <input type="text" name="from_name" className='border focus:outline-pink-300 p-2 w-full placeholder:to-white' placeholder='Enter your name here' required />
      </label>

      <label>Email</label>
      <input type="email" name="from_email" className='border focus:outline-pink-300 p-2 w-full placeholder:to-white' required />

      <label>Message</label>
      <textarea name="message" required  className='border focus:outline-pink-300 p-2 w-full placeholder:to-white'/>

      <button type="submit" className='bg-blue-300 p-3 rounded'>Send</button>
    </form>
  );
};

export default Contact;