import { defineComponent, onMounted, KeepAlive } from 'vue';
import { RouterView } from 'vue-router';
import Footer from './Footer';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      window.aplus_queue.push({
        action: 'aplus.setMetaInfo', arguments: ['aplus-waiting', 'MAN']
      });
      window.aplus_queue.push({
        'action': 'aplus.sendPV',
        'arguments': [{is_auto: false}, {miniAppId: '2001832113', miniAppName: '社区连线'}]
      });
      window.ZWJSBridge.onReady(() => {
        window.ZWJSBridge.getUserType().then(({userType}: {userType: number}) => {
          window.aplus_queue.push({
            'action': 'aplus.sendPV',
            'arguments': [{userType}]
          });
        });
        window.ZWJSBridge.getLocation().then(({longitude, latitude}: {longitude: number; latitude: number}) => {
          window.aplus_queue.push({
            'action': 'aplus.sendPV',
            'arguments': [{is_auto: false}, {long: longitude, lati: latitude}]
          });
        });
      });

    });
    // @ts-ignore
    return () => (
      <main class={'app'}>
        <RouterView>
          {({Component, route}: any) => Component ? (route.meta.keepAlive ? <KeepAlive><><Component /><Footer /></>
          </KeepAlive> : <><Component /><Footer /></>) : <p class={'myLoading'}>loading...</p>}
        </RouterView>

      </main>
    );
  }
});