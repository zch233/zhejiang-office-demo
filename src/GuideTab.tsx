import { defineComponent, onMounted, ref } from 'vue';
import './app.scss';
import { Icon } from 'vant';
import { getList } from './utils/request/api';
import { clearToast, showLoadingToast } from './utils/toast';
import { useRouter } from 'vue-router';

export type Item = {
  activity_result: string;
  add_time: string;
  can_review: number;
  can_sign: string;
  communityid: number;
  content: string;
  count_down: number;
  count_up: number;
  count_view: number;
  deleted: number;
  document: string;
  id: number;
  images: string;
  praise: number;
  sign_config: string;
  sign_end_time: string;
  sign_num: null
  sign_start_time: string;
  sub_title: string;
  submitter: string;
  subtype: number;
  title: string;
  type: number;
  voteid: number;
}

export default defineComponent({
  name: 'GuideTab',
  props: {type: Number},
  setup(props) {
    const router = useRouter()
    const list = ref<Item[]>([]);
    const getData = async () => {
      showLoadingToast();
      const {data} = await getList({
        type: 41,
        subtype: props.type!,
        lastid: 0,
        openid: 'o2Tmm09w0aqnXsG0MQFQ_WtVk3po',
        unionid: 'ozXC107RO82-NXvA2vGJeVWJBh04',
        communityid: 110,
      });
      clearToast()
      list.value = data;
    };
    onMounted(() => {
      getData();
    });
    return () => (
      <section class={'guideTab'}>
        {list.value.map(v => <div class={'guideTab-item'} onClick={() => router.push(`/detail/${v.id}`)}>
          <div class={'guideTab-item-icon'}>
            <img
              src="data:image/png;base64,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"
              alt="" />
          </div>
          <div class={'guideTab-item-content'}>{v.title}</div>
          <div class={'guideTab-item-right'}>
            <Icon name="arrow" />
          </div>
        </div>)}
      </section>
    );
  }
});