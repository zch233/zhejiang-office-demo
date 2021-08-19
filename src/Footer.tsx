import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <footer class={'footer'}>
        <p>浙江政务服务网</p>
        <p>本服务由浙江政务服务网、杭州谷路网络科技有限公司提供</p>
        <p>服务咨询热线：<a href="tel:057186786579">0571-8678-6579</a></p>
      </footer>
    );
  }
});