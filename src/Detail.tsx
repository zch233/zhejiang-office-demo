import { defineComponent, onMounted, ref } from 'vue';
import './app.scss';
import { useRoute } from 'vue-router';
import { getDetail } from './utils/request/api';
import { Item } from './GuideTab';
import { clearToast, showLoadingToast } from './utils/toast';

export default defineComponent({
  name: 'Detail',
  setup() {
    const route = useRoute()
    const detail = ref<Partial<Item>>({})
    const getData = async () => {
      showLoadingToast()
      const {data} = await getDetail({
        id: Number(route.params.id as string),
        openid: 'o2Tmm09w0aqnXsG0MQFQ_WtVk3po',
        unionid: 'ozXC107RO82-NXvA2vGJeVWJBh04',
        communityid: 110,
      })
      clearToast()
      detail.value = data
    }
    onMounted(() => {
      getData()
    })
    return () => (
      <section class={'detail'}>
        <h1 class={'detail-title'}>{detail.value.title}</h1>
        <p class={'detail-info'}>社区连线 <span>{detail.value.add_time}</span></p>
        {/*// @ts-ignore*/}
        <div class={'detail-content'} vHtml={detail.value.content}/>
      </section>
    );
  }
});