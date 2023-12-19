<!--  -->
<template>
  <div class="tab-control">
    <template v-for="(item,index) in names" key="item">
        <div class="tab-control-item"
         @click="itemClick(index)" 
        :class="{active:  index ===  currenIndex}"><span>{{ item}}</span></div>
    </template>


  </div>
</template>
index
<script>
export default {
  data () {
    return {
        currenIndex:0,//记录索引
    };
  },

  components: {},

  computed () {},

  mounted () {},
  emit:["tabItemClick"],

  methods: {
    itemClick(index){
        this.currenIndex=index;
        this.$emit("tabItemClick",index)

    }
  },
  props:{
    names:{
        type:Array,
        default:()=>[]
    }

  }
}

</script>
<style  scoped>
.tab-control-item.active span{
    border-bottom: 3px solid red;
    padding: 3px;
}
.tab-control-item.active{
    color:red;
    font-weight: 700px;
}
.tab-control{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.tab-control-item{
    flex: 1;
}
</style>