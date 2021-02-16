const dayjs = require('dayjs')

module.exports = async function(context, req) {
    context.res = {
        status: 200,
        body: dayjs().format()
    }
}