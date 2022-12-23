export default {
  development: {
    protocol: "http",
    baseUrl: 'http://localhost:6500/api/v1' // 测试接口域名
  },
  beta: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
  },
  release: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
  }
}