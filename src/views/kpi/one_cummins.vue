<template>
  <div class="flex flex-col items-center justify-center py-8 bg-white">
    <img
      src="src/assets/images/kpi/one_cummins.png"
      alt="planets"
      usemap="#plantmap"
      @click="doclick($event)"
    />
    <map id="plantmap" name="plantmap">
      <!-- Customer left -->
      <area shape="rect" coords="237,252,428,361" href="/#/comp/basic" />

      <area shape="rect" coords="584,221,633,328" href="/#/comp/basic" title="Deploy" />
      <area shape="rect" coords="678,120,767,154" href="/#/comp/basic" title="Order" />
      <area shape="rect" coords="864,115,921,220" href="/#/comp/basic" title="Source" />
      <area shape="rect" coords="933,280,981,393" href="/#/comp/basic" title="Plan" />
      <area shape="rect" coords="792,449,914,476" href="/#/comp/basic" title="Issue" />
      <area shape="rect" coords="632,370,716,499" href="/#/comp/basic" title="Record" />

      <!-- Ethics, Compliance, Environment and Legal Managment -->
      <area shape="rect" coords="510,190,548,361" href="/#/comp/basic" />

      <!-- Pople, Resource & Asset Managment -->
      <area shape="rect" coords="1020,198,1050,408" href="/#/comp/basic" />

      <!-- Functional & Intergrated Leadership -->
      <area shape="rect" coords="677,14,920,35" href="/#/comp/basic" />

      <!-- Mission, Vision and Value -->
      <area shape="rect" coords="688,574,883,592" href="/#/comp/basic" />

      <!-- Customer right -->
      <area shape="rect" coords="1177,252,1374,361" href="/#/comp/basic" />
    </map>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {},
    setup() {
      function doclick(event: any) {
        console.warn(event.offsetX, event.offsetY);
      }
      return { doclick };
    },
  });
</script>
<style lang="less" scoped>
  img {
    width: 1620px;
    min-width: 1620px;
  }
</style>
