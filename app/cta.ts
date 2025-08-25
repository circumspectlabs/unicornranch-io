import type { UrlParams } from '@vueuse/core'
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

export const hideTheseParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content'
]

export const persistCampaignParams = (params: UrlParams) => {
  Object.keys(params).filter(value => hideTheseParams.includes(value)).forEach((value) => {
    if (params[value]) {
      if (Array.isArray(params[value])) {
        if (params[value][0]) {
          localStorage.setItem(`campaign_${value}`, params[value][0])
        }
      } else {
        localStorage.setItem(`campaign_${value}`, params[value])
      }
      try {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete params[value]
      } finally { /* empty */ }
    }
  })
}

export const getCampaignParams = () => {
  const r: Record<string, string> = {}
  hideTheseParams.forEach((value) => {
    const data = localStorage.getItem(`campaign_${value}`)
    if (data) {
      r[value] = data
    }
  })
  return r
}

export const deleteCampaignParams = () => {
  hideTheseParams.forEach((value) => {
    localStorage.removeItem(`campaign_${value}`)
  })
}

export const getNonCampaignParams = (params: UrlParams, route: RouteLocationNormalizedLoadedGeneric) => {
  const r: Record<string, string> = {}
  Object.keys(params).forEach((value) => {
    if (hideTheseParams.includes(value)) {
      return
    }
    if (params[value]) {
      if (Array.isArray(params[value])) {
        if (params[value][0]) {
          r[value] = params[value][0]
        }
      } else {
        r[value] = params[value]
      }
    }
  })

  return Object.assign({}, r, {
    session: getSessionUuid(),
    path: route.path
  })
}

export const getSessionUuid = () => {
  const itemName = 'campaign_session_uuid'
  let uuid: string | null = localStorage.getItem(itemName)
  if (uuid) {
    return uuid
  } else {
    uuid = crypto.randomUUID()
    localStorage.setItem(itemName, uuid)
    return uuid
  }
}
