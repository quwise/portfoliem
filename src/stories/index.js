import { storiesOf } from '@storybook/vue'

/* addons */
import { action } from '@storybook/addon-actions'
// LinkTo を使いコンポーネント間を遷移
import { linkTo } from '@storybook/addon-links'
// Knobs を使いボタンの背景色とラベルを変更
// import { withKnobs, text, color } from '@storybook/addon-knobs'
// import { withNotes } from '@storybook/addon-notes'
// Centered を使いコンポーネントをページ中央に配置
// import Centered from '@storybook/addon-centered'
// コンポーネントの使い方・見た目・propsのName,Type,Defaultを確認
import VueInfoAddon from 'storybook-addon-vue-info'

/* components */
import Welcome from './Welcome.vue'
import MyButton from './MyButton.vue'

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))

storiesOf('Button', module)
  // .addDecorator(withKnobs)
  .addDecorator(VueInfoAddon)
  .add('with text', () => {
    return {
      components: { MyButton },
      template: '<my-button @click="action">TEST</my-button>',
      methods: { action: action('clicked') }
    }
  })
