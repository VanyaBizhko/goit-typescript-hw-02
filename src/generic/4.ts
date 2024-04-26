/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Comp{
  title:string;
}


class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Comp> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};