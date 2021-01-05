import http from './http';

// 获取首页banner
export const reqBannerList = async (params = {}) => {
  const res = await http('get', '/api/data/banner', params);
  return res;
}
