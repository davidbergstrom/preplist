<script>
import axios from 'axios'
import { getFuturePlans, getAllPlans } from '../../api'

export default {
  data() {
    return {
      allPlans: [],
      futurePlans: [],
    }
  },
  async created() {
    this.allPlans = await getAllPlans()
    this.futurePlans = await getFuturePlans()
  },
}
</script>

<template>
  <div>
    <h1>Services</h1>
    <p>This page lists upcoming services.</p>
    <h2>Upcoming</h2>
    <ul>
      <li v-for="plan in futurePlans" :key="plan.id">
        <nuxt-link :to="'/services/' + plan.id">{{
          plan.attributes.dates
        }}</nuxt-link>
      </li>
    </ul>
    <h2>All plans</h2>
    <ul>
      <li v-for="plan in allPlans" :key="plan.id">
        <nuxt-link :to="'/services/' + plan.id">{{
          plan.attributes.dates
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style>
</style>