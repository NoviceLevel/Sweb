module.exports = async (req, res) => {
  // 从请求中读取模拟数据（生产环境应连接数据库）
  const accounts = req.body.accounts || [];
  return res.status(200).json(accounts);
};