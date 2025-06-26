import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'

const CreateEvent = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
    description: Yup.string().required('Description is required').min(10, 'Description must be at least 10 characters'),
    date: Yup.date().required('Date is required').min(new Date(), 'Date must be in the future'),
    location: Yup.string().required('Location is required')
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      await axios.post('/api/events', values)
      toast.success('Event created successfully!')
      navigate('/events')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create event')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Event</h1>
      
      <div className="card">
        <Formik
          initialValues={{
            title: '',
            description: '',
            date: '',
            location: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="input-field"
                  placeholder="Enter event title"
                />
                <ErrorMessage name="title" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="4"
                  className="input-field"
                  placeholder="Describe your event"
                />
                <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date & Time
                </label>
                <Field
                  type="datetime-local"
                  id="date"
                  name="date"
                  className="input-field"
                />
                <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  className="input-field"
                  placeholder="Enter event location"
                />
                <ErrorMessage name="location" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading || !isValid || !dirty}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating...' : 'Create Event'}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/events')}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CreateEvent