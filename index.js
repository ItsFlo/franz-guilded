module.exports = Franz => class Guilded extends Franz {
	overrideUserAgent() {
		return window.navigator.userAgent.replace('Electron', '').replace('Franz', '');
	}
};
