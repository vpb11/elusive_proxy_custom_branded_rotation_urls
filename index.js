const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = 80;

app.use(cors({ origin: ["*"] }));

app.get("/proxy-rotate/:first/:seccond/:proxy_id", async (req, res) => {
  const URL = `https://elusiveproxy.com/proxy-rotate/${req.params.first}/${req.params.seccond}/${req.params.proxy_id}`;
  const axiosResponse = await axios.get(URL);
  const Operation = axiosResponse.data?.message ?? axiosResponse.data?.error;
  const Message = `ProxyID: ${req.params.first}${req.params.seccond}${req.params.proxy_id}, Operation: ${Operation}`;
  res.send({ Message });
});

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
