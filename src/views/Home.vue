<template>
  <div class="home">
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">复选框 a</van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
    </van-checkbox-group>
    <p>djkasjdhjkashdjkahsdjkashdjkhasdkjhsadkjhsadk</p>
    <van-radio-group v-model="radio">
      <van-radio name="1">单选框 1</van-radio>
      <van-radio name="2">单选框 2</van-radio>
    </van-radio-group>
    <p>djkasjdhjkashdjkahsdjkashdjkhasdkjhsadkjhsadk</p>
    <van-field
      v-model="message"
      rows="5"
      type="textarea"
      placeholder="请输入留言"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
       result: ['a', 'b'],
        radio: '1',
      message:''
    };
  },
}
</script>
