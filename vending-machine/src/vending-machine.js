class VendingMachine {
	constructor(machine) {
		this.id = machine.id;
		this.isBroken = machine.isBroken;
		this.snacks = [];
	}

	addSnacks(snack) {
		for (var i = 0; i < this.snacks.length; i++) {
			if (this.snacks[i].name === snack.name) {
				return 'Sorry, that snack is already stocked! Try adding a different snack.'
			}
		}
		this.snacks.push(snack);
	}

	purchaseSnack(snackName, amountPaid) {
		for (var i = 0; i < this.snacks.length; i++) {
			if (this.snacks[i].name === snackName && this.snacks[i].itemsInStock >= 1 && amountPaid >= this.snacks[i].price) {
				this.snacks[i].itemsInStock --
				return `Success! Here is $${amountPaid - this.snacks[i].price} back!`
			} else if (amountPaid < this.snacks[i].price) {
				return 'Sorry, not enough payment. Please add more money.'
			} else if (this.snacks[i].itemsInStock < 1) {
				return 'Sorry, no items in stock. Try another item.'
			}
		}
	}

}

module.exports = VendingMachine;
