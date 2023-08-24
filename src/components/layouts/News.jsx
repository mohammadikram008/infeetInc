import React, { Fragment , useEffect, useState} from 'react'
import Navbar from '../Navbar/Index'
import img from '../../components/images/pro3.jpg'
import img1 from '../../components/images/pro2.jpg'
const News = () => {
  const [upcomingActivities, setUpcomingActivities] = useState([]);
  useEffect(() => {
    // Replace this with an actual API call to fetch data from the server
    // For now, we'll use some dummy data
    const dummyData = [
      {
        id: 1,
        title: 'Open House Event',
        date: '2023-08-15',
        location: '123 Main Street, City',
        imageUrl: img,
      },
      {
        id: 2,
        title: 'New Property Launch',
        date: '2023-09-20',
        location: '456 Park Avenue, Town',
        imageUrl: img1,
      },
      // Add more upcoming activities as needed
    ];
    setUpcomingActivities(dummyData);
  }, []);
  return (
    <Fragment>
          <Navbar/>

          <section className="upcoming-activities">
      <h2>Upcoming Activities</h2>
      <div className="activity-list">
        {upcomingActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <img  className='news-img' src={activity.imageUrl} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>Date: {activity.date}</p>
            <p>Location: {activity.location}</p>
          </div>
        ))}
      </div>
    </section>
    </Fragment>
  )
}

export default News