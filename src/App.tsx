import { defineComponent, ref } from 'vue';
import { Tab, Tabs } from 'vant';
import './app.scss';
import GuideTab from './GuideTab';

export default defineComponent({
  name: 'App',
  setup() {
    const tabMap = [
      {title: '计生服务', type: 41},
      {title: '为老服务', type: 41},
      {title: '党建服务', type: 41},
      {title: '志愿扶贫', type: 41},
      {title: '城市管理', type: 41},
      {title: '劳动保障', type: 41},
      {title: '助残服务', type: 41},
    ];
    const active = ref(2);
    return () => (
      <div class={'app'}>
        <Tabs active={active.value} onUpdate:active={e => active.value = e} color={'#428FFC'} title-active-color={'#428FFC'} title-inactive-color={'#363A44'}>
          {tabMap.map(v => <Tab title={v.title} title-style={{fontSize: '14px'}}>
            <GuideTab type={v.type} />
          </Tab>)}
        </Tabs>
      </div>
    );
  }
});