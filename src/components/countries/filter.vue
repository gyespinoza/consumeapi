<template>
  <div>
    <h3>Filtros</h3>
      <div class="form-check" v-for="region in allRegions" :key="region">
          <input  type="radio" 
              :id="region.id"
              name="regionSelct" 
              :value="region" 
              v-model="currentRegion"
              class="form-check-input" 
              >
              <label class="form-check-label">{{region}}</label>
      </div>  
  </div>
</template>

<script>
 export default ({
    data() {
      return{
          allRegions: ['All','Europe', 'Americas', 'Asia','Africa', 'Oceania', 'Antarctic'],
      }
    },
    components: {
    },
    computed: {
      currentRegion: {
          get() {
              return this.$store.state.currentRegion
          },
          set(value){
              this.$store.commit("SET_REGION", value)
          }
      },
      
    },

  })
  </script>