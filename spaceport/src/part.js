class Part {
	constructor(part) {
		this.name = part.name;
		this.type = part.type;
		this.value = part.value;
		this.broken = false;
		this.isValid = true;
		this.checkForValidity = function checkForValidity() {
			if (!this.name) {
				this.isValid = false;
				return 'This part needs a name!';
			}
			if (!this.type) {
				this.isValid = false;
				return 'This part needs a type!';
			}
		}

	}





}

module.exports = Part;
