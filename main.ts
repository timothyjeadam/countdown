music.setBuiltInSpeakerEnabled(false)
for (let index = 0; index <= 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(988, music.beat(BeatFraction.Breve))
basic.showString("go!")
