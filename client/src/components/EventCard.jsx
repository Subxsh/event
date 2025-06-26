import { Link } from 'react-router-dom'
import { Calendar, MapPin, User } from 'lucide-react'

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{event.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          {formatDate(event.date)}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          {event.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <User className="h-4 w-4 mr-2" />
          {event.createdBy?.name || 'Unknown'}
        </div>
      </div>
      
      <Link 
        to={`/events/${event._id}`}
        className="inline-block btn-primary w-full text-center"
      >
        View Details
      </Link>
    </div>
  )
}

export default EventCard