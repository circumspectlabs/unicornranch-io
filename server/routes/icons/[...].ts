import * as iconset from '#shared/iconset'

import { readFileSync } from 'node:fs'
import { resolve } from 'path'
import { satori } from 'v-satori'
import { Resvg } from '@resvg/resvg-js'

import RenderIcon from '~/components/Render/RenderLogo.vue'

const _DIRNAME = typeof __dirname !== 'undefined' ? __dirname : resolve()

export default defineEventHandler(async (event) => {
  const name = event.path.split('/').slice(2).join('/')
  if (iconset.icons.map(e => e.name).includes(name)) {
    const icon = iconset.icons.find(e => e.name == name)

    if (!icon) {
      setResponseStatus(event, 404)
      return
    }

    const Lexend = readFileSync(resolve(_DIRNAME, './public/lexend.otf'))

    const svg = await satori(RenderIcon, {
      width: icon.width,
      height: icon.height,
      fonts: [{
        name: 'Lexend',
        data: Lexend,
        weight: 400,
        style: 'normal'
      }],
      embedFont: true
    })

    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'original'
      }
    })

    const png = resvg.render()

    setHeader(event, 'Content-Type', 'image/png')
    setHeader(event, 'Cache-Control', 'public, max-age=3600, immutable')

    return png.asPng()
  }

  setResponseStatus(event, 404)
})
