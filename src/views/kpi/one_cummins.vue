<template>
  <div class="flex flex-col items-center justify-center py-8 bg-white">
    <img
      class="parent"
      src="../../assets/images/kpi/one_cummins.png"
      alt="planets"
      usemap="#plantmap"
      @click="doclick($event)"
    />
    <!-- Deploy-to-Deploy -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative right-15.25rem bottom-29.41rem hover:opacity-100"
        src="../../assets/images/kpi/idea_to_deploy.png"
      />
    </a>
    <!-- order-to-cash -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative right-7.05rem bottom-48.08rem hover:opacity-100"
        src="../../assets/images/kpi/order_to_cash.png"
      />
    </a>
    <!-- Source-to-Pay -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative left-6.3rem bottom-52.59rem hover:opacity-100"
        src="../../assets/images/kpi/source_to_pay.png"
      />
    </a>
    <!-- Plan-to-Build -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative left-10.87rem bottom-48.05rem hover:opacity-100"
        src="../../assets/images/kpi/plan_to_build.png"
      />
    </a>
    <!-- Issue-to-Resolution -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative left-2.47rem bottom-44.9rem hover:opacity-100"
        src="../../assets/images/kpi/issue_to_resolution.png"
      />
    </a>
    <!-- Record-to-Report -->
    <a href="/#/comp/basic">
      <img
        class="opacity-0 relative right-11.05rem bottom-53.4rem hover:opacity-100"
        src="../../assets/images/kpi/record_to_report.png"
      />
    </a>
    <map id="plantmap" name="plantmap">
      <!-- Ethics, Compliance, Environment and Legal Managment -->
      <area shape="rect" coords="338,192,383,503" href="/#/comp/basic" />

      <!-- Pople, Resource & Asset Managment -->
      <area shape="rect" coords="919,211,970,553" href="/#/comp/basic" />

      <!-- Functional & Intergrated Leadership -->
      <area shape="rect" coords="519,5,832,49" href="/#/comp/basic" />

      <!-- Mission, Vision and Value -->
      <area shape="rect" coords="527,667,761,712" href="/#/comp/basic" />

      <!-- Customer left -->
      <area shape="rect" coords="4,294,230,425" href="/#/comp/basic" />

      <!-- Customer right -->
      <area shape="rect" coords="1112,298,1342,428" href="/#/comp/basic" />
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
        alert(`${event.offsetX},${event.offsetY}`);
      }
      return { doclick };
    },
  });
</script>
<style lang="less" scoped>
  .parent {
    width: 1376px;
    min-width: 1376px;
  }
</style>
