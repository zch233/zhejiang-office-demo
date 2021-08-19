import { defineComponent, onMounted } from 'vue';
import './app.scss';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Detail',
  setup() {
    const route = useRoute()
    onMounted(() => {
      console.log(route);
    })
    return () => (
      <div class={'detail'}>
        1111
      </div>
    );
  }
});