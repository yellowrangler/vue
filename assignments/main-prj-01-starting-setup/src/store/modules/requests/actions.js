export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    const url = "http://10.0.0.71/api/newrequest.php";  
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });

    // const response = await fetch(url, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newRequest),
    // });

    const responseData = await response.json();
    console.log('responseData :' + responseData);

    if (!response.ok) {
      const error = new Error(responseData.message || 'Faoled to send request');
      console.log("contactCoach error on post: " + error);

      throw error;
    }

    newRequest.Id = responseData;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const url = "http://10.0.0.71/api/getcoachrequests.php?coachId="+coachId;  
    const response = await fetch(url);

    const responseData = await response.json();

    if (!response.ok) {
      console.log("error on get request: " + response); 
      const error = new Error(responseData.message || 'Faoled to get request');
      console.log("contactCoach error on get: " + error);

      throw error;
    }
 
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: responseData[key].id,
        coachId: responseData[key].coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
       
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
