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
  request({
    url: '/communityInfo/get_info',
    method: 'post',
    banRepeatCancel: true,
    data,
  });

type GetDetail = {
  id: number;
  openid: string;
  unionid: string;
  communityid: number;
}
export const getDetail = (data: GetDetail) =>
  request({
    url: '/communityInfo/get_info',
    method: 'post',
    banRepeatCancel: true,
    data,
  });
