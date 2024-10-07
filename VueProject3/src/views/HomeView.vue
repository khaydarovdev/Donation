<template>
	<div>
		<Section1 />
		<Section2 />
		<Section3 />
	</div>
</template>
<script>
import Section1 from '../components/Home/Section1.vue';
import Section2 from '../components/Home/Section2.vue';
import Section3 from '../components/Home/Section3.vue';
export default {
	components: {
		Section1,
		Section2,
		Section3,
	},
};
</script>
<style scoped></style>
