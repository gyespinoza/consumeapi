<template>
        <div class="row h-100 w-100" style="margin-top: 150px;">
            <h1>API COUNTRIES</h1>
        </div>
        <div class="row h-100 w-100">
            <div class="col-sm-3">
                <Filters></Filters>
            </div>
            <div class="col-sm-9" style="height: 800px">
                <countries></countries>
                <div class="container d-flex align-items-center justify-content-center" style="height: 200px">
                    <div>
                        <Paginate></Paginate>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import Filters from '/src/components/countries/filter.vue';
import Paginate from '/src/components/countries/paginate.vue';
import countries from '/src/components/countries/Countries.vue';


export default ({
    components: {
        Filters,
        Paginate,
        countries
    }    
})
</script>
