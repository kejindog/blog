
### UI

[naive-ui](https://github.com/tusen-ai/naive-ui)

> 仅支持 Vue3 的组件库。拥有完善的 TypeScript 类型推导的 Vue3 组件库，拥有 80 多种组件、中文文档，如果你想换换“口味”可以试试它。

### SetUp 语法糖

```html
<script lang="ts">
export default {
  name: 'CustomName',
  inheritAttrs: false, // 无法在 setup 中使用， 需要使用单独的代码块声明
}
</script>
 
<script setup lang="ts">
import { ref, useAttrs, useSlots, onMounted } from 'vue'
import ChildComponent from './child/child.vue'
 
const childRef = ref(null)
 
  // props 属性注册
  const props = defineProps({})
 
  // 事件注册
  const emits = defineEmits([])
 
  // 获取 attrs 属性
  const attrs = useAttrs()
 
  // 获取 slots 插槽
  const slots = useSlots()
 
  // 属性/方法暴露 ==> setup 语法糖中默认不会对外暴露组件的任何属性与方法，可以使用该方法将需要属性/方法暴露出去
  defineExpose({})
 
  const text = ref('Hello world！')
 
  const onClick = (): void => {
    text.value = '好好学习，天天向上！'
  }
 
  onMounted(() => {
    console.log('childRef===>', childRef.value)
  })
</script>
```