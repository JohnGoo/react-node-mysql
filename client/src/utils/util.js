// 验证浏览器错误码 => 业务错误码
export const createAjaxAction = (api, startAction, endAction) => (data, cb, reject) => (dispatch) => {
  let respon;
  startAction && dispatch(startAction());
  api(data)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then(response => response.json())
    .then((resp) => {
      respon = resp;
      endAction && dispatch(endAction({
        req: data,
        res: resp,
      }));
    })
    .then(() => {
      if (respon.status === 1) {
        cb && cb(respon);
      } else if (respon.errorCode === '101') {
        // logOut();
      } else if (typeof reject === 'function') {
        reject(respon);
      } else {
        console.error(respon.msg);  // eslint-disable-line
      }
    })
    .catch((error) => {
      const { response } = error;
      if (!response) {
        // eslint-disable-next-line
        console.log(error)
        return;
      }
      if (response.status === 401) {
        console.error('请重新登录！');    // eslint-disable-line
        // 线上环境，刷新页面以重定向到登录页面
        // process.env.NODE_ENV === 'production' && location.reload();
      } else if (response.status === 403) {
        console.error('你缺少相关权限，部分功能无法使用');    // eslint-disable-line
      }
    });
};
