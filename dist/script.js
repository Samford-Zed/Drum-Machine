const firstSoundsGroup = [
{
  keyCode: 81,
  key: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  key: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  key: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  key: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  key: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  key: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  key: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  key: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  key: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const App = () => {
  const [display, setDisplay] = React.useState('');
  const [volume, setVolume] = React.useState(0.5);
  const [power, setPower] = React.useState(true);

  const play = (key, id) => {
    if (!power) return;
    const audio = document.getElementById(key);
    if (audio) {
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      setDisplay(id);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = event => {
      const sound = firstSoundsGroup.find(
      s => s.key.toUpperCase() === event.key.toUpperCase());

      if (sound) {
        play(sound.key, sound.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [volume, power]);

  const handleVolumeChange = e => {
    setVolume(e.target.value);
    setDisplay(`Volume: ${Math.round(e.target.value * 100)}`);
  };

  const togglePower = () => {
    setPower(!power);
    setDisplay(!power ? 'Power ON' : 'Power OFF');
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement("div", { className: "pads" },
    firstSoundsGroup.map((sound) => /*#__PURE__*/
    React.createElement("div", {
      className: "drum-pad",
      id: sound.id,
      key: sound.key,
      onClick: () => play(sound.key, sound.id) },

    sound.key, /*#__PURE__*/
    React.createElement("audio", { className: "clip", id: sound.key, src: sound.url })))), /*#__PURE__*/




    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("button", { className: "power-button", onClick: togglePower },
    power ? 'Turn Power OFF' : 'Turn Power ON'), /*#__PURE__*/


    React.createElement("div", { id: "display" }, display), /*#__PURE__*/

    React.createElement("div", { className: "volume-control" }, /*#__PURE__*/
    React.createElement("span", null, "Volume: ", Math.round(volume * 100), "%"), /*#__PURE__*/
    React.createElement("input", {
      type: "range",
      min: "0",
      max: "1",
      step: "0.01",
      value: volume,
      onChange: handleVolumeChange })), /*#__PURE__*/



    React.createElement("button", { className: "sound-group-button" }, "Bank")))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));