import Vue from 'vue';

class AppStore {
  private _title = '';

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}

export default Vue.observable(new AppStore());
