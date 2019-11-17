import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../enums';

import {
  MainLayout,
} from '../../components';

import './style.scss';

@inject(Stores.ROUTER)
@observer
export class ExercisesView extends React.Component {
  
  render() {
    return (
      <MainLayout>
        <article className="article-container">
          <header className="article-header">
            <h1 className="article-title">
              Spicy peanut soba noodle low-calorie salad
            </h1>
          </header>
          <div className="article-content">
            <figure className="article-image">
              <img src="https://malina.artstudioworks.net/yummy/wp-content/uploads/sites/3/2019/01/brooke-lark-275181-unsplash-825x550.jpg" alt="" />
            </figure>
            <div className="article-text">
              <p>Lorem ipsum dolor sitamet consectetu ocilng elit. Donec eros aseb dui, suscipit ex uti commodo dignis justo acas turpis egestas. Nullam et cursus pet tellus sapien. Nam nec elementum elit. Pellentesque habi tant morbi tristique senectus et netus emalesuada fames ac turpis egestas. Sed mollis ligula vitae in soda ales lorem consec molestie. Quisque rices portti toiquet odio. Pellentesque porttitor pretium elt atpla cerat. Integer sapien mauris, convallis fatred quis tinciduna, bibendum the sit amet augue. </p>
              <p>Proin leo quam, dapibus vel tristique lacinia, pharetra sed dui. In congue futelis eget eros stibulm, sit amet aliquet lia ferentum bonec id elit dolor. Nullam rhoncus au quam caliquam perdiet. Suspe ndisse quis augue dapibus, interdum felisut, feugiat purus. Duis at accumsan ligula, vel sed leo nibh. Quisque sollicit udin ornare nivel faucibus. Quisque tempus eleifend magna id efficitur. </p>
              <h4>Prep Time: 10 mins</h4>
              <p>Nullam et cursus pet tellus sapien. Nam nec elementum elit. Pellentesque habi tant morbi tristique senectus et netus emalesuada fames ac turpis egestas. Sed mollis ligula vitae in soda ales lorem consec molestie. Quisque rices portti toiquet odio. Pellentesque porttitor pretium elt atpla cerat. Integer sapien mauris, convallis fatred quis tinciduna, bibendum the sit amet augue. </p>
              <p>Proin leo quam, dapibus vel tristique lacinia, pharetra sed dui. In congue futelis eget eros stibulm, sit amet aliquet lia ferentum bonec id elit dolor. Nullam rhoncus au quam caliquam perdiet. Suspe ndisse quis augue dapibus, interdum felisut, feugiat purus. Duis at accumsan ligula, vel sed leo nibh.</p>
              <hr />
              <h4>Ingredients</h4>
            </div>
          </div>
        </article>
      </MainLayout>
    );
  }
}
