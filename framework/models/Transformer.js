class Transformer {

  constructor() {

    if(!this._mapping) {

      this._mapping = this.defineMapping()
    }
  }

  get mapping() { return this._mapping }

  defineMapping(){

    return {}
  }

  transform(key) {

    return this.mapping[key]
  }


}

module.exports = Transformer
