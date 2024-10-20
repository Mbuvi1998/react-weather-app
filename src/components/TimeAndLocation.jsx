import React from 'react';

// Helper function to format the local date and time correctly
const formatLocalDateTime = (timestamp, timezoneOffset) => {
  const localDate = new Date((timestamp + timezoneOffset) * 1000);  // Convert to milliseconds and adjust for timezone

  // Format the date (e.g., Friday, 18 Oct 2024)
  const formattedDate = localDate.toLocaleDateString('en-US', {
    weekday: 'long',   // Full day name (e.g., Friday)
    year: 'numeric',   // Full year (e.g., 2024)
    month: 'short',    // Abbreviated month (e.g., Oct)
    day: 'numeric'     // Numeric day (e.g., 18)
  });

  // Format the time (e.g., 2:57 PM)
  const formattedTime = localDate.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true       // 12-hour format without seconds
  });

  return { formattedDate, formattedTime };
};

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
  // Compute the formatted local date and time
  const { formattedDate, formattedTime } = formatLocalDateTime(dt, timezone);

  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        {/* Display Date and Time in the correct order */}
        <p className='text-xl font-extralight'>{`${formattedDate} | Local Time ${formattedTime}`}</p>
      </div>
      <div className='flex items-center justify-center my-3'>
        {/* Display Location */}
        <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
