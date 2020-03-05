'use strict'

export default function({ error, $sentry }, inject) {
  /**
   * Custom exception when error
   *
   * @param {Object} err
   */
  inject('exception', err => {
    let { response, message: msg } = err

    let message = (response && response.data && response.data.message) || msg
    let statusCode = (response && response.status) || 404

    if (statusCode === 500) {
      message = 'Sorry, server technical error'
    }
    $sentry.captureException(err)

    error({ message, statusCode })
  })
}
