import { defineComponent } from 'vue';
import {RouterView} from 'vue-router'
import Footer from './Footer';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <main class={'app'}>
        <RouterView />
        <Footer />
      </main>
    );
  }
});