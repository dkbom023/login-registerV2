const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login-registerV2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
