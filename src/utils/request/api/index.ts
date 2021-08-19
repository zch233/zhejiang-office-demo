import { request } from '../index';
type GetList = {
  type: number;
  subtype: number;
  lastid: number;
  unionid: string;
  openid: string;
  communityid: number;
}
export const getList = (data: GetList) =>
  // @ts-ignore
  request({
    url: '/communityInfo/get_info',
    method: 'post',
    banRepeatCancel: true,
    data,
  });

type GetDetail = {
  infoid: number;
  openid: string;
  unionid: string;
  communityid: number;
}
export const getDetail = (data: GetDetail) =>
  // @ts-ignore
  request({
    url: '/communityInfo/is_set_activityMember_info',
    method: 'post',
    banRepeatCancel: true,
    data,
  });
