'use client';

import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function AppointmentScheduler() {
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time) {
      setStatus(t('AppointmentScheduler.selectDateTime'));
      return;
    }

    const emailBody = `Appointment request:%0D%0ADate: ${date}%0D%0ATime: ${time}%0D%0AMessage: ${message}`;

    const mailtoLink = `mailto:andre.emidio09@gmail.com?subject=Appointment Request&body=${emailBody}`;

    window.location.href = mailtoLink;
    setStatus(t('AppointmentScheduler.emailOpened'));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl text-black font-bold mb-4">{t('AppointmentScheduler.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label  htmlFor="date" className="block text-black font-medium mb-1">{t('AppointmentScheduler.date')}</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border text border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label  htmlFor="time" className="block text-black font-medium mb-1">{t('AppointmentScheduler.time')}</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-black font-medium mb-1">{t('AppointmentScheduler.message')}</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            placeholder={t('AppointmentScheduler.messagePlaceholder')}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {t('AppointmentScheduler.sendRequest')}
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
  );
}
