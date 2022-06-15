#!/usr/bin/env node

/**
 *  https://git.code.tencent.com/wsxch5/wsxc_biz/merge_requests/new?merge_request[source_project_id]=158491&merge_request[source_branch]=D206-1-xw&merge_request[target_branch]=D206
 */
const { execSync } = require("child_process");

try {
  execSync(`git push`);
  const remoteURLString = execSync(`git remote get-url --push origin`).toString().replace(" ", "");
  const remoteUrl = remoteURLString.replace(`.git`, "");
  const curBranchName = execSync(`git rev-parse --abbrev-ref HEAD`).toString();
  const lineIndex = curBranchName.lastIndexOf("-");
  const targetBranchName = curBranchName.slice(0, lineIndex);

  const projectName = remoteUrl.split("/").reverse()[0].replace(/\n/g, "");
  const projectIds = {
    wsxc_biz: 158491,
    wsxc_portal: 95513,
  };
  const mergeUrl = `${remoteUrl}/merge_requests/new?merge_request[source_project_id]=${projectIds[projectName]}&merge_request[source_branch]=${curBranchName}&merge_request[target_branch]=${targetBranchName}`;
  // process.stdout.write(mergeUrl);
  console.info();
  console.info("mergeUrl", mergeUrl.replace(/\n/g, ""));

  // 转JSON之后 \n 在字符串里面，需要通过 \\n 来匹配
  // const formatLinkString = JSON.stringify({ merge: mergeUrl }).replace(/\\n/g, "");
  // const linkObj = JSON.parse(formatLinkString);
  // console.info("[MR Link]:", linkObj.merge);

  // exec(`start ${linkObj.merge}`);
} catch (error) {
  console.info("[error]", error);
}
