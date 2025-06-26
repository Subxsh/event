import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Calendar, MapPin, User, ArrowLeft, Edit, Trash2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvent()
  }, [id])

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`/api/events/${id}`)
      setEvent(response.data)
    } catch (error) {
      toast.error('Failed to fetch event details')
      navigate('/events')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`/api/events/${id}`)
        toast.success('Event deleted successfully')
        navigate('/events')
      } catch (error) {
        toast.error('Failed to delete event')
      }
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Event not found.</p>
      </div>
    )
  }

  const isEventOwner = user && event.createdBy._id === user._id

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/events')}
        className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Events
      </button>

      <div className="card">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
          
          {isEventOwner && (
            <div className="flex gap-2">
              <button className="btn-secondary flex items-center">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">About This Event</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{event.description}</p>
          </div>

          <div className="space-y-6">
            <div className="card bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-4">Event Details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-3" />
                  <span>Organized by {event.createdBy.name}</span>
                </div>
              </div>
            </div>

            <div className="card bg-primary-50">
              <h3 className="font-semibold text-primary-900 mb-4">Get Involved</h3>
              <p className="text-primary-700 text-sm mb-4">
                Interested in attending this event? Contact the organizer for more details.
              </p>
              <button className="btn-primary w-full">
                Contact Organizer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails