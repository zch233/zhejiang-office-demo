import { defineComponent } from 'vue';
import { Tab, Tabs } from 'vant';
import './app.scss';
import GuideTab from './GuideTab';

export default defineComponent({
  name: 'List',
  setup() {
    const tabMap = [
      {title: '计生服务', type: 1},
      {title: '为老服务', type: 2},
      {title: '党建服务', type: 3},
      {title: '志愿扶贫', type: 4},
      {title: '城市管理', type: 5},
      {title: '劳动保障', type: 6},
      {title: '助残服务', type: 7},
    ];
    return () => (
      <div class={'list'}>
        <Tabs color={'#428FFC'} title-active-color={'#428FFC'} title-inactive-color={'#363A44'}>
          {tabMap.map(v => <Tab title={v.title} title-style={{fontSize: '14px'}}>
            <GuideTab type={v.type} />
          </Tab>)}
        </Tabs>
      </div>
    );
  }
});