<template>
    <div>
        <div v-for="data in countriesData" :key="data">
            {{ data.common }}
            {{ data.official }}
		</div>
    </div>
</template>


<script>
export default ({
    props: {
        countriesData: [],
    }
})
</script>
