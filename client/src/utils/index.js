// calculates the remaining days until a campaign deadline
export const daysLeft = (deadline) => 
{
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);

    return remainingDays.toFixed(0);
};

// percentage calculation of the fundraising goal that has been achieved
export const calculateBarPercentage = (goal, raisedAmount) => 
{
    const percentage = Math.round((raisedAmount * 100) / goal);

    return percentage;
};

// verifies if a URL points to a valid image
export const checkIfImage = (url, callback) => 
{
    const img = new Image();
    img.src = url;

    if (img.complete) callback(true);

    img.onload = () => callback(true);
    img.onerror = () => callback(false);
};