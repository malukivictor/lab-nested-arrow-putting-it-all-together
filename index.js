function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (
      passwordAttempt === userInfo.password &&
      attemptCount < 3
    ) {
      return "login successful";
    }

    if (attemptCount > 3) {
      return "account locked due to too many failed login attempts";
    }

    return `attempt ${attemptCount}: login failed`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};  





};  



