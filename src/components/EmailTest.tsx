import { useState } from 'react';

export function EmailTest() {
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const sendTestEmail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      console.log('Backend response:', responseData); // Log full response

      if (response.ok) {
        setStatus(`Email sent! ID: ${responseData.resendData?.id}`);
        console.log('Resend API response:', responseData.resendData);
        setIsLoading(false);
        console.log(status);
      } else {
        setStatus(`Error: ${responseData.error}`);
        console.error('Backend error:', responseData.error);
      }
    } catch (error) {
      setStatus('Failed to send email');
      console.error('Network error:', error);
    }
  };

  return (
    <div className='bg-slate-800 flex items-center justify-center flex-col'>
      <button
        className={`w-32 h-10  rounded-md ${
          isLoading ? 'bg-gray-400' : status.includes('Email sent!') ? 'bg-green-600' : 'bg-red-600'
        }`}
        onClick={sendTestEmail}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Email'}
      </button>
      <h2 className='font-semibold text-lg text-green-300'>{status && 'Your email has been sent'}</h2>
    </div>
  );
}
