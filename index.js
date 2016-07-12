module.exports = function time() {
    return ms(process.hrtime())
}

var ms = module.exports.ms = function ms(hrtime) {
    return hrtime[0] * 1e3 + hrtime[1]/1e6
}