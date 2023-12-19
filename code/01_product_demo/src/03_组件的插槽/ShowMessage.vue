<!--  -->
<template>
  <h2>{{title}}</h2>
  <div class="content">
    <slot></slot>
    <!--插槽slot,可以灵活展示-->
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed () {},

  mounted () {},

  methods: {},
  props:{
    title:{
        type:String,
        default:""
    }
  }
}

</script>
<style  scoped>
</style>