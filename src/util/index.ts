export function routeToArray(route: string): { routeArr: string[], params: string } {
    if (!route) {
      return {
        routeArr: [],
        params: '',
      };
    }
    const arr: string[] = route.split('/');
    const ret: string[] = [];
    let params = '';
    arr.shift();
    arr.forEach((item, index) => {
      if (parseInt(item, 10)) {
        params = item;
        return;
      }
      ret.push(`/${item}`);
    });
    return {
      routeArr: ret,
      params,
    };
  }
