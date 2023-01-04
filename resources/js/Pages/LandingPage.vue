<template>
<header-vue :navigation="navigation" title="Yum Yum" subtitle="Pandesal" description="sweet and tasty bread is so yummy and it so delicious you will taste the pure meat of chicken you feel the crowing like a chicken ever morning and then after tasting bread you will imitate crowing like a chicken."/>
<features-vue :items="features"/>
<footer-vue />
</template>
<script setup>
import HeaderVue from './Content/Header.vue';
import FeaturesVue from './Content/Features.vue';
import FooterVue from './Content/Footer.vue';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
];

const features = [
    {
        name: 'Chicken Meat',
        description: 'One bite of pandesal 100% feel a chicken meat',
    },
    { name: 'Pandesal', description: 'Modern breads are fortified with extra nutrients, allowing consumers to obtain greater nutritional value from this staple (and naturally also homemade bread).' },
    {
        name: 'flour',
        description: 'Wheat flour is high in carbohydrates, dietary fiber and protein. However, it is low sugar and fat. 100 grams of wheat flour contains approximately 360 calories.',
    },
    { name: 'Sugar', description: 'If you need immediate energy booster, sugar is the excellent source. Too much sugar will give you too much energy but only for a while. So you should spend the rest of the day being sluggish and unfocused. Add sugar to coffee in the morning to give you the energy booster you really need.' },
    { name: 'Egg', description: 'Whole eggs are among the most nutritious foods on the planet, containing a little bit of almost every nutrient you need. Omega-3 enriched and/or pastured eggs contain more of certain nutrients.' },
    { name: 'Milk', description: 'Milk contains a wide array of nutrients including vitamins, minerals, protein, healthy fats and antioxidants. Keep in mind that its nutritional content can vary depending on many factors.' },
    { name: 'Yeast', description: 'Improving glucose sensitivity, Boosting energy, Supporting the immune system, Supporting a healthy pregnancy' },
]
</script>
