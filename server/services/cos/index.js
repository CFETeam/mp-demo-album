const COS = require('cos-nodejs-sdk-v5')
const config = require('../../config')

module.exports = new COS({
    AppId: config.cosAppId,
    SecretId: config.cosSecretId,
    SecretKey: config.cosSecretKey
})
