<template> 
	<div class="container">
		<h3>{{title }}</h3>
		{{ $store.state.currentRegion }}<br />

		<CountriesView :countriesData="loadData"></CountriesView>
		<!--
		{{ sliceData.map ((r) => r.name)  }}

		{{  getName.map(n => n.common) }}
		

		<div v-for="data in getName" :key="data">
			<h2>
				<b>Nombre comun: </b>
			</h2>{{ data.common }}
		</div>-->
	</div>
</template>

<script>
import requests from "./requests";
import CountriesView from '/src/views/countries/countriesView.vue';

export default({
	data() {
		return {
			data: [],
			title: '',
			lastIndex: 0,
			firstIndex: 0,
			sliceData:[],
			getName: [],
		}
	},
	components:{
		CountriesView
	},
	methods: {
		async getAllCountries() {
			const response = await fetch(requests.getAllCountries)    
			this.data= await response.json();
			this.title ="Todos los países";
			this.total = this.data.length; //asigna el total de elementos
		},
		async getcountriesbyRegion (){
			const response = await fetch(requests.getbyRegion(this.$store.state.currentRegion))     
            this.data= await response.json();			
			this.title="Países de la región: " + this.$store.state.currentRegion;
			this.total = this.data.length; //asigna el total de elementos
		},
	},
	computed: {
		loadData(){
			if(this.$store.state.currentRegion=="All"){   
				this.getAllCountries();
				this.lastIndex = this.$store.state.currentPage * 10;
  				this.firstIndex = this.lastIndex - 10;
				this.sliceData = this.data.slice(this.firstIndex, this.lastIndex);		
				this.getName = this.sliceData.map(r=>r.name)	
			}
			else {
				this.getcountriesbyRegion();	
				this.lastIndex = this.$store.state.currentPage * 10;
  				this.firstIndex = this.lastIndex - 10;
				this.sliceData = this.data.slice(this.firstIndex, this.lastIndex);	
				this.getName = this.sliceData.map(r=>r.name)
			}
			return this.getName
		},
		total: {
            get() {
                return this.$store.state.total
            },
            set(value){
                this.$store.commit("SET_TOTAL", value)
            }
        },
	},
})

</script>