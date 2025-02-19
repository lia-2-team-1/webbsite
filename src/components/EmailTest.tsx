import { useState } from 'react';

export function EmailTest() {
  const [status, setStatus] = useState<string>('');

  const sendTestEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
        console.log(status);
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus('Failed to send email');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <button
        className='w-32 h-10 flex items-center justify-center bg-red-600 rounded-md'
        onClick={sendTestEmail}
      >
        Send Email
      </button>
    </>
  );
}
