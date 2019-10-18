/** @prettier */
import classNames from 'classnames';

export class UiHelpers {
  static getColSize(xs, width, size) {
    if (size === true || size === '') {
      return xs ? 'col' : `col-${width}`;
    }
    if (size === 'auto') {
      return xs ? 'col-auto' : `col-${width}-auto`;
    }
    return xs ? `col-${size}` : `col-${width}-${size}`;
  };

  static getColClass (props, widths, isPadding) {
    let classList = [];
    const attributes = props;

    widths.forEach((width, i) => {
      const col = attributes[width];
      const xs = !i;

      delete attributes[width];

      if (!col && col !== '') {
        return;
      }

      if (col instanceof Object) {
        const colSize = xs ? '' : width;
        const colClass = UiHelpers.getColSize(xs, width, col.size);

        classList = [...classList, classNames({
          [colClass]: col.size || col.size === '',
          [`order-${colSize}-${col.order}`]: col.order || col.order === 0,
          [`offset-${colSize}-${col.offset}`]: col.offset || col.offset === 0,
        })];
      } else {
        const colClass = UiHelpers.getColSize(xs, width, col);
        classList = [...classList, colClass];
      }
    });

    if (!classList.length) {
      classList = [...classList, 'col'];
    }

    return classNames(
      classList,
      !isPadding && 'col-nopad',
      props.className || '',
    );
  };
}
