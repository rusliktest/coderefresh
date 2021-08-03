const { exec } = require("child_process")

const commit = 'fresh'
const branch = 'main'

exec(`git add . & git commit -m "Commit ${commit}" & git push origin ${branch}`, (error, stdout, stderr) => {
  if (error) {
    console.log("error", error)
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`Successful commit: ${stdout}`);
})