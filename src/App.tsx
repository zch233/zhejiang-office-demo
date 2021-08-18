import {defineComponent} from 'vue';
import {Button} from 'vant';
import './app.scss';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <Button type={'primary'}>123</Button>
      </div>
    );
  }
});