'use strict'

export default function({ error, $sentry }, inject) {
  /**
   * Custom exception when error
   *
   * @param {Object} err
   * @param {Function} func
   */
  inject('exception', err => {
    /** Custom code */
    let { response, message: msg } = err

    let message = (response && response.data && response.data.message) || msg
    let statusCode = (response && response.status) || 404

    if (statusCode === 500) {
      message = 'Sorry, server technical error'
    }
    $sentry.captureException(err)
    /** END Custom code */

    error({ message, statusCode })
  })
}
