module.exports = async (req, res) => {
  // 模拟数据库（实际项目请用Vercel Postgres或外部数据库）
  let accounts = req.body.accounts || [];
  
  if (req.method === 'POST') {
    const { username, password } = req.body;
    accounts.push({ username, password });
    return res.status(200).json({ success: true, accounts });
  }

  return res.status(405).send('Method Not Allowed');
};