export function formatDateToHumanReadable(isoDate) {
    const date = new Date(isoDate);
    
    // Define options for formatting
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };
  
    // Format the date
    return date.toLocaleDateString('en-US', options);
  }

export function generateUniqueId() {
  const timestamp = new Date().getTime(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 900) + 100; // Generate a random number
  

  // Convert both the timestamp and random number to strings and concatenate them
  const uniqueId = `SID${timestamp}${randomNum}`.replace(/\./g, 'U');

  return uniqueId;
}
