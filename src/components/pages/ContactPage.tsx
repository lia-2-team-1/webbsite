import React, { useEffect } from 'react'
import ContactForm from '../ContactForm.tsx';
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { }
  }, []);
  return (
    <>
      <ContactForm />
    </>
  )
}
