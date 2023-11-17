/*
TODO:

- handle a11y
=> reduce motion speed
=> make the faces tabable
=> enable arrow navigation


- we want a cube that shows more sides than there are
- the cube can have 2 tracks (vertical and horizontal)
=> the back and the front need work for both tracks
=> or we need 8 instead of 6 sides

- going from the left to front or bottom to front currently rotates the whole cube
=> we can rotate into multiples of the 360deg like 720deg to show the 8. slide
=> but that would cause a lot of spining when tab navigating between elements that are far from each other 

- alternatively, we could have just 6 faces and do the nesting inside of those and do some part without a transition
=> -270 to -360 with transition, -360 to 0 without
=> to go from the front (level 0) to the left of level 3, we promote the level3 left to be visible without transition, go from 0 to -360 without transition,
	 and change from -360 to -270 with transition

- maybe we can chain these singular rotations to make it look like a permanent rotation


layout



*/
