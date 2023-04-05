const { writeFile } = require('node:fs/promises')
const CronJob = require('cron').CronJob
const { chromium } = require('playwright')

let counter = 0

const ScreenMetrics_Job = new CronJob('0/15 * * * * *', async () => {
  // Execute Task or Job
  console.log("Execute task")
  counter = counter + 1
  const browser = await chromium.launch()
  const page = await browser.newPage()
  // Add URL
  await page.goto('')

  const buffer = await page.screenshot();
  const ImgToBase64 = buffer.toString('base64')

  writeFile(`./output/img_to_base64_${counter}`, ImgToBase64, (err) => {
    if (err) throw err
    console.log('The img has been saved')
  })

  await browser.close()
})

ScreenMetrics_Job.start()
