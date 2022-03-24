export default {
  async registerCoach(context, data) {
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const token = context.rootGetters.token;

    const url = "http://10.0.0.71/api/registercoach.php?token="+token;  
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();
    if (!response.ok) {
      console.log("registerCoach error on post: " + response);
    }

    // console.log('responseData :' + responseData);

    context.commit('registerCoach', coachData);
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const url = "http://10.0.0.71/api/getcoach.php";  
    const response = await fetch(url);
    const responseData = await response.json();

    if (!response.ok) {
      console.log("error on post: " + response); 
      const error = new Error(responseData.message || 'Failed to get request');
      console.log("loadCoaches error on get: " + error);

      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};