import Component from '@ember/component';
import { action } from '@ember/object';

export default class TheDetails extends Component {
    showPost = false;

    @action
    toggleContent() {
      this.toggleProperty('showPost');
    }
  }