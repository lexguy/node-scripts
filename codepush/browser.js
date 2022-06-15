const { exec } = require("child_process");
const uri = "https://www.google.com";
const open = require("open");

// Windows
exec("start https://www.google.com");
exec(
  "start https://git.code.tencent.com/wsxch5/wsxc_biz/merge_requests/new?merge_request[source_project_id]=158491&merge_request[source_branch]=D206-1-xw&merge_request[target_branch]=D206"
);

// Mac
exec("open https://www.google.com");

// Otherwise: https://portland.freedesktop.org/doc/xdg-open.html
// exec("xdg-open https://www.google.com");
