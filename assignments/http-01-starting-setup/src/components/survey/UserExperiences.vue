<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="systemError">
        {{ systemError }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No Results to Displasy</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      systemError: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.systemError = null;

      // const url = 'http://10.0.0.71/vue/php/getsurveydata.php';
      const url = 'http://10.0.0.71/api/getsurveydata.php';
      this.axios.get(url)
      .then((response)  => {
        console.log(response.data);
        this.isLoading = false;

        const data = response.data;
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });

          this.results = results;
        }
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.systemError = "There has been a problem accessing the results. Please try again or try later!";
      })

      // const url = 'http://10.0.0.71/vue/php/getsurveydata.php';
      // const url = 'http://10.0.0.71/api/getsurveydata.php';
      // fetch(url)
      // .then((response)  => {
      //   console.log(response);
      //   if (response.ok) {
      //     return response.json(); 
      //   } else {
      //     throw new Error("There is a problem with our data server. Please try again later!");
      //   }
      // })
      // .then((data) => {
      //   this.isLoading = false;

      //   const results = [];
      //   for (const id in data) {
      //     results.push({
      //       id: id,
      //       name: data[id].name,
      //       rating: data[id].rating,
      //     });

      //     this.results = results;
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
      //   this.isLoading = false;
      //   this.systemError = "There has been a problem accessing the results. Please try again or try later!";
      // })
    },
  },
  mounted () {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>