import React from 'react';

const ActivityFeed = () => {
    const activityData = {
        "results": [
            {
                "name": "Kushantha Charuka",
                "decs": "Created Item on this date",
                "date": "2024-08-09"
            },
            {
                "name": "Kushantha Charuka",
                "decs": "Created Item on this date",
                "date": "2024-08-09"
            },
            {
                "name": "Kushantha Charuka",
                "decs": "Created Item on this date",
                "date": "2024-08-09"
            }
        ]
    };

    return (
      <div>
      <span>Activity Feed</span>
      <div className="activity-feed-items">
          {activityData.results.map((item, index) => (
              <div key={index} className="activity-feed-item">
                  <span>{item.name}</span>
                  <span>{item.decs}</span>
                  <span>{item.date}</span>
              </div>
          ))}
      </div>
  </div>
    );
}

export default ActivityFeed;
