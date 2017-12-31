import { CronJob } from 'cron'

import sephoraScraper from './sephora/scraper'

// Run every 1 seconds
const cronTime = '*/1 * * * * *'
// function to run
const onTick = () => sephoraScraper()
// start job now
const start = true
// timezone
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const scheduler = new CronJob({
  cronTime: cronTime,
  onTick: onTick,
  start: start,
  timeZone: timeZone
})

scheduler.start()

export default scheduler