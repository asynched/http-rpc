import os from 'node:os'
import { procedures } from '@/rpc'

procedures.getComputerInfo = () => {
  return {
    name: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    arch: os.arch(),
    config: {
      cpus: os.cpus(),
      totalmem: os.totalmem(),
    },
    usage: {
      freemem: os.freemem(),
      loadavg: os.loadavg(),
      uptime: os.uptime(),
    },
  }
}
