var common = [
	`--format json:reports/json/${process.env.TEST_CLIENT}.json`,
	`--tags "not @Android"`
].join(' ')

module.exports = {
	default: common,
}