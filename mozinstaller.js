(function() {
	var WebInstaller = function(options) {
		var self = this;
		self.manifest = options.manifest || options;
		self.classes = options.classes || {
			installed: "installed",
			not_installed: "not-installed",
			error: "install-error"
		}

		self.parent = options.parent || document.body;

		if (navigator.mozApps) {
			var request = navigator.mozApps.checkInstalled(self.manifest);
			request.onsuccess = function() {
				if (request.result) {
					self.parent.classList.add(self.classes.installed);
				} else {
					self.parent.classList.add(self.classes.not_installed
		);
				}
			}

			request.onerror = function() {
				self.parent.classList.add(self.classes.error);
			}
		} 
	};

	WebInstaller.prototype.install = function() {
		var self = this;
		if (navigator.mozApps.checkInstalled(self.manifest)) { 
			var request = navigator.mozApps.getSelf();

			request.onsuccess = function() {
				if (!request.result) {
					var install_request = navigator.mozApps.install(self.manifest); 	

					// Apparently this is failing on Android and desktop due: https://bugzilla.mozilla.org/show_bug.cgi?id=806597
					install_request.onsuccess = function() {
						self.parent.classList.remove(self.classes.not_installed);
						self.parent.classList.add(self.classes.installed);
					}

					install_request.onerror = function() {
						self.parent.classList.remove(self.classes.not_installed);
						self.parent.classList.remove(self.classes.error);
					}
				};
			};

			request.onerror = function() {
				self.parent.classList.add(self.classes.error);
			}
		};
	};


	if ( typeof define === "function" && define.amd ) {
 		define([], function () { return WebInstaller; } );
	} else {
		window.WebInstaller = window.WebInstaller || WebInstaller;
	}

}) ();
