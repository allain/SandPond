TodeSPLAT `


element Water {

	colour "lightblue"
	emissive "blue"
	
	state "liquid"

	input _ (space) => space && space.atom == undefined
	input # (space) => space && space.atom != undefined
	
	output _ (space) => setSpaceAtom(space, undefined)
	output @ (space, self) => setSpaceAtom(space, self)
	
	rule y {
		
		@ => _
		_    @
		
	}
	
	rule y {
	
		@_ => _@
		#     #
	
	}
	
}




`