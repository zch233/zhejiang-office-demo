import { request } from '../index';
type Data = {
  type: number;
  subtype: number;
  lastid: number;
  unionid: string;
  openid: string;
  communityid: number;
}
export const getList = (data: Data) =>
  // @ts-ignore
  request({
    url: '/communityInfo/get_info',
    method: 'post',
    banRepeatCancel: true,
    data,
  });
