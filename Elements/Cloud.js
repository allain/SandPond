TodeSPLAT `


element Cloud {

	colour "lightgrey"
	emissive "grey"
	
	input . (space) => space
	input _ (space) => space && space.atom == undefined
	
	output _ (space) => setSpaceAtom(space, undefined)
	output W (space) => setSpaceAtom(space, new Atom(Water))
	output @ (space, self) => setSpaceAtom(space, self)
	
	input @ () => Math.random() < 0.1
	rule y { 
		@ => @
		_    W
	}
	
	input @ () => Math.random() < 0.02
	rule y { @_ => _@ }
	
	input @ () => Math.random() < 0.005
	rule y { @ => W }
	
}




`