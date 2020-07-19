function HandleChange(event, object) {
    var partialState = {};
    const target = event.target;
    const value = target.type === 'select' ? target.value : target.value;
    const name = target.name;
    //console.log('///////HandleChange////////////: ' + name + '-' + value)
    partialState[name] = value;
    object.setState(partialState);
    return partialState
  }

module.exports = {
    HandleChange,
}