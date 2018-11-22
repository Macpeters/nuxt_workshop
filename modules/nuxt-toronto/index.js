import { join } from 'path'

export default function NuxtToronto(moduleOptions) {
  console.log(this.options)
  this.addPlugin(join(__dirname, 'plugin.js'))
}