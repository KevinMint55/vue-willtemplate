<template>
  <div>
    <h2 :class="s.title">vue</h2>
    <img src="../assets/me.jpg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" module="s">
.title {
  display: flex;
  color: green;
}
</style>
