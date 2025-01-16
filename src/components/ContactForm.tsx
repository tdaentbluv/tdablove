'use client';

import { useState } from 'react';
import { sendToSplunk } from '../utils/splunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestion,
  faHandshake,
  faCertificate,
  faGraduationCap,
  faClipboardCheck,
  faBolt,
  faCalendarAlt,
  faBusinessTime,
  faCalculator,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

const contactOptions = [
  {
    id: 'ask-question',
    value: 'Ask a Question',
    icon: faQuestion,
    description: 'Get answers to your EHS-related questions'
  },
  {
    id: 'request-consulting',
    value: 'Request Consulting Engagement',
    icon: faHandshake,
    description: 'Professional consulting for your EHS needs'
  },
  {
    id: 'get-certified',
    value: 'Get Staff Certified',
    icon: faCertificate,
    description: 'Industry-recognized safety certifications'
  },
  {
    id: 'get-trained',
    value: 'Get Staff Trained',
    icon: faGraduationCap,
    description: 'Comprehensive safety training programs'
  },
  {
    id: 'site-evaluation',
    value: 'Get Safety Site Evaluation Study',
    icon: faClipboardCheck,
    description: 'Thorough on-site safety assessments'
  }
];

const timeframeOptions = [
  {
    id: 'immediately',
    value: 'Immediately',
    icon: faBolt,
    description: 'Need service as soon as possible'
  },
  {
    id: '1-3-months',
    value: '1-3 months',
    icon: faCalendarAlt,
    description: 'Planning for near-term implementation'
  },
  {
    id: '6-months-1-year',
    value: '6 months - 1 year',
    icon: faBusinessTime,
    description: 'Long-term planning and preparation'
  },
  {
    id: 'quote-only',
    value: 'Just interested in a quote',
    icon: faCalculator,
    description: 'Gathering information and pricing'
  },
  {
    id: 'other-timeframe',
    value: 'Other',
    icon: faEllipsisH,
    description: 'Different timeline or special circumstances'
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    contactReason: contactOptions[0].value,
    timeframe: timeframeOptions[0].value,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await sendToSplunk({
        ...formData,
        submissionTime: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        jobTitle: '',
        contactReason: contactOptions[0].value,
        timeframe: timeframeOptions[0].value,
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-700 text-center font-medium">
              Thank you for contacting us! We'll get back to you shortly.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-center font-medium">
              {errorMessage || 'Failed to submit form. Please try again.'}
            </p>
          </div>
        )}

        <div className="space-y-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Company Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Contact Reason */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Reason for Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactOptions.map((option) => (
                <div key={option.id}>
                  <input
                    type="radio"
                    id={option.id}
                    name="contactReason"
                    value={option.value}
                    checked={formData.contactReason === option.value}
                    onChange={handleChange}
                    className="sr-only"
                    disabled={status === 'loading'}
                  />
                  <label
                    htmlFor={option.id}
                    className={`
                      block p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.contactReason === option.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 hover:border-gray-300'
                      }
                      ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <div className="flex flex-col items-center text-center">
                      <FontAwesomeIcon
                        icon={option.icon}
                        className={`text-2xl mb-2 ${
                          formData.contactReason === option.value
                            ? 'text-primary'
                            : 'text-gray-500'
                        }`}
                      />
                      <div className="font-medium mb-1">{option.value}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Timeframe Selection */}
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Desired Timeframe</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {timeframeOptions.map((option) => (
                <div key={option.id}>
                  <input
                    type="radio"
                    id={option.id}
                    name="timeframe"
                    value={option.value}
                    checked={formData.timeframe === option.value}
                    onChange={handleChange}
                    className="sr-only"
                    disabled={status === 'loading'}
                  />
                  <label
                    htmlFor={option.id}
                    className={`
                      block p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.timeframe === option.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 hover:border-gray-300'
                      }
                      ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <div className="flex flex-col items-center text-center">
                      <FontAwesomeIcon
                        icon={option.icon}
                        className={`text-2xl mb-2 ${
                          formData.timeframe === option.value
                            ? 'text-primary'
                            : 'text-gray-500'
                        }`}
                      />
                      <div className="font-medium mb-1">{option.value}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Please provide any additional details about your request..."
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
