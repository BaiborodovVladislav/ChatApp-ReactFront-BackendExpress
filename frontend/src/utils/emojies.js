const emojiArray = [
	'🍎', // Red apple
	'🌟', // Glowing star
	'🏠', // House
	'🚗', // Car
	'🐶', // Dog face
	'🌳', // Tree
	'⚽', // Soccer ball
	'🎸', // Guitar
	'📚', // Books
	'🚀', // Rocket
	'🎨', // Artist palette
	'🍕', // Pizza
	'✈️', // Airplane
	'⏰', // Alarm clock
	'📱', // Mobile phone
	'🌈', // Rainbow
	'🎁', // Gift
	'🔥', // Fire
	'💡', // Light bulb
	'🔧', // Wrench
	'💎', // Gem stone
	'🎲', // Game die
	'🛴', // Scooter
	'🏖️', // Beach with umbrella
	'📀', // DVD
	'🖥️', // Desktop computer
	'🔒', // Lock
	'⚓', // Anchor
	'🎤', // Microphone
	'🍔', // Hamburger
	'🍦', // Ice cream
	'🛏️', // Bed
	'📷', // Camera
	'🎧', // Headphones
	'💌', // Love letter
	'📆', // Calendar
	'🕹️', // Joystick
	'🎮', // Video game
	'🎯', // Dart
	'🏆', // Trophy
	'🥇', // 1st place medal
	'🌍', // Earth globe Europe-Africa
	'🌙', // Crescent moon
	'🪐', // Ringed planet
	'☂️', // Umbrella
	'🛸', // Flying saucer
	'🪁', // Kite
	'🎈', // Balloon
	'🎃', // Jack-o-lantern
	'🌺', // Hibiscus
	'🌸', // Cherry blossom
	'🎋', // Tanabata tree
	'🧩', // Puzzle piece
	'🎵', // Musical note
	'🔔', // Bell
	'📣', // Megaphone
	'💼', // Briefcase
	'🛒', // Shopping cart
	'📍', // Round pushpin
	'✏️', // Pencil
	'📎', // Paperclip
	'📏', // Straight ruler
	'🔬', // Microscope
	'🔭', // Telescope
	'🧪', // Test tube
	'⚗️', // Alembic
	'🧬', // DNA
	'📚', // Books
	'🔖', // Bookmark
	'🎓', // Graduation cap
	'🏫', // School
	'🏢', // Office building
	'🏥', // Hospital
	'🏦', // Bank
	'🏛️', // Classical building
	'🏰', // Castle
	'🗽', // Statue of Liberty
	'🌁', // Foggy
	'🌉', // Bridge at night
	'🗻', // Mount Fuji
	'🌋', // Volcano
	'🏔️', // Snow-capped mountain
	'🗾', // Map of Japan
	'🏕️', // Camping
	'🏖️', // Beach with umbrella
	'🏜️', // Desert
	'🏝️', // Desert island
	'🏞️', // National park
	'🏟️', // Stadium
	'🎡', // Ferris wheel
	'🎢', // Roller coaster
	'🎠', // Carousel horse
	'⛲', // Fountain
	'⛱️', // Umbrella on ground
	'⛰️', // Mountain
	'🏙️', // Cityscape
	'🌃', // Night with stars
	'🌆', // Cityscape at dusk
	'🌇', // Sunset
	'🌉', // Bridge at night
];


export const randomEmoji = () => {
	return emojiArray[Math.floor(Math.random() * emojiArray.length)]
}